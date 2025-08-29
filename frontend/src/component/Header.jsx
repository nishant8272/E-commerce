
// --- LANDING PAGE SECTIONS ---
import Icon from "./Icon";

// const Header = () => (
//     <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <a href="#" className="flex items-center space-x-2">
//               <Icon name="shopping-bag" className="h-8 w-8 text-indigo-600" />
//               <span className="text-2xl font-bold text-gray-900">Shopify</span>
//             </a>
//           </div>
//           <nav className="hidden md:flex md:items-center md:space-x-8">
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Products</a>
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About Us</a>
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <a href="#" className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
//               Log In
//             </a>
//             <a href="#" className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
//               Sign Up
//             </a>
//             <button className="md:hidden p-2 text-gray-600 hover:text-indigo-600">
//               <Icon name="menu" className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
const Header = ({ onLoginClick, onSignUpClick }) => (
  <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center space-x-2">
            <Icon name="shopping-bag" className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">Shopify</span>
          </a>
        </div>
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Products</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About Us</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={onLoginClick} className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
            Log In
          </button>
          <button onClick={onSignUpClick} className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
            Sign Up
          </button>
          <button className="md:hidden p-2 text-gray-600 hover:text-indigo-600">
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;