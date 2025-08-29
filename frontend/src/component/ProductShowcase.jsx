const ProductShowcase = () => {
    const products = [
        { id: 1, name: 'Classic Leather Jacket', price: '$299.99', image: 'https://placehold.co/400x400/333/fff?text=Jacket' },
        { id: 2, name: 'Modern Wrist Watch', price: '$149.50', image: 'https://placehold.co/400x400/555/fff?text=Watch' },
        { id: 3, name: 'Stylish Sunglasses', price: '$89.00', image: 'https://placehold.co/400x400/777/fff?text=Glasses' },
        { id: 4, name: 'Comfortable Sneakers', price: '$120.00', image: 'https://placehold.co/400x400/999/fff?text=Shoes' },
    ];

    return (
        <section id="featured-products" className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                    <p className="mt-4 text-gray-600">Check out some of our best-selling items.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <div key={product.id} className="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
                            <div className="p-4 bg-white">
                                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                                <p className="text-indigo-600 font-bold mt-2">{product.price}</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href="#" className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Add to Cart</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;