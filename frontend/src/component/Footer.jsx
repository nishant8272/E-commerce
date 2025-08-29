const Footer = () => (
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold">Shopify</h3>
                    <p className="mt-4 text-gray-400">Your one-stop shop for everything fashionable.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-lg font-semibold">Support</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Newsletter</h3>
                    <p className="mt-4 text-gray-400">Subscribe to get the latest updates.</p>
                    <form className="mt-4 flex">
                        <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-md text-gray-800" />
                        <button className="px-4 py-2 bg-indigo-600 rounded-r-md hover:bg-indigo-700">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Shopify. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;