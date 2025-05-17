const Cart = require('../db/cartSchema');
const Product = require('../db/productSchema');
const User = require('../db/userSchema');

// Add item to cart
const addToCart = async (req, res) => {
    try {
        const { productId, quantity, email } = req.body;
        
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
    
        const userId = user._id; // Get user ID from auth middleware

        if (!productId || !quantity || quantity < 1) {
            return res.status(400).json({ message: 'Invalid product ID or quantity' });
        }

        // Find user's cart or create new one
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        // Check if product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if product is already in cart
        const cartItem = cart.items.find(item => item.product.toString() === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }

        // Calculate total amount
        cart.totalAmount = await calculateTotal(cart.items);
        await cart.save();

        // Populate product details before sending response
        await cart.populate('items.product');
        res.status(200).json(cart);
    } catch (error) {
        console.error('Add to cart error:', error);
        res.status(500).json({ message: 'Failed to add item to cart' });
    }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
    try {
        const { productId,email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const userId = user._id;

        if (!productId) {
            return res.status(400).json({ message: 'Product ID is required' });
        }

        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.items = cart.items.filter(item => item.product.toString() !== productId);
        cart.totalAmount = await calculateTotal(cart.items);
        await cart.save();

        await cart.populate('items.product');
        res.status(200).json(cart);
    } catch (error) {
        console.error('Remove from cart error:', error);
        res.status(500).json({ message: 'Failed to remove item from cart' });
    }
};

// Update cart item quantity
const updateCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;
        const userId = req.user._id;

        if (!productId || !quantity || quantity < 1) {
            return res.status(400).json({ message: 'Invalid product ID or quantity' });
        }

        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const cartItem = cart.items.find(item => item.product.toString() === productId);
        if (!cartItem) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        cartItem.quantity = quantity;
        cart.totalAmount = await calculateTotal(cart.items);
        await cart.save();

        await cart.populate('items.product');
        res.status(200).json(cart);
    } catch (error) {
        console.error('Update cart item error:', error);
        res.status(500).json({ message: 'Failed to update cart item' });
    }
};

// Get user's cart
const getCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const cart = await Cart.findOne({ user: userId }).populate('items.product');
        
        if (!cart) {
            return res.json({ items: [], totalAmount: 0 }); // Return empty cart instead of 404
        }

        res.status(200).json(cart);
    } catch (error) {
        console.error('Get cart error:', error);
        res.status(500).json({ message: 'Failed to fetch cart' });
    }
};

// Helper function to calculate total amount
async function calculateTotal(items) {
    let total = 0;
    for (const item of items) {
        const product = await Product.findById(item.product);
        if (product) {
            total += product.price * item.quantity;
        }
    }
    return total;
}

module.exports = {
    addToCart,
    removeFromCart,
    updateCartItem,
    getCart
};