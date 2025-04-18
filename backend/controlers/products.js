const productSchema = require('../db/productSchema');

const products = async (req, res) => {
    try {
        if (req.body.role != "admin"){
            return res.status(401).json({ message: "you are not admin" });
        }
        const { name, price, ImgUrl,model, description } = req.body;
        const product = new productSchema({
            name,
            price,
            ImgUrl,
            model,
            description
        })
        await product.save();
        res.json({
            product: product,
            message: "Product created successfully"
        });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}


const getProducts = async (req, res) => {
    try {
        const products = await productSchema.find();
        res.json(products);
        } catch (error) {
            res.status(400).json({ message: error.message })
            }
            }


module.exports = {products, getProducts};