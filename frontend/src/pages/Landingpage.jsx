import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import ProductShowcase from '../component/ProductShowcase';
import Icon from '../component/Icon';

// --- AUTH MODAL ---

const AuthModal = ({ initialMode = 'login', onClose }) => {
  const [mode, setMode] = useState(initialMode);
  const [role, setRole] = useState('user'); // 'user' or 'admin'

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here, including the role
    console.log(`Submitting ${mode} form as ${role}...`);
    onClose(); // Close modal on submission for this example
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-fade-in-up">
      <button onClick={onClose} className="absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all">
          <Icon name="x" className="h-6 w-6" />
        </button>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
            {mode === 'login' ? 'Welcome Back!' : 'Create Your Account'}
          </h2>
          <p className="text-center text-gray-500 mb-6">
            {mode === 'login' ? 'Sign in to continue' : 'Get started with a free account'}
          </p>

          {/* Role Selector */}
          <div className="flex justify-center rounded-lg bg-gray-100 p-1 mb-6">
            <button
              onClick={() => setRole('user')}
              className={`w-full px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                role === 'user' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              User
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`w-full px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                role === 'admin' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              Admin
            </button>
          </div>
          
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input type="email" placeholder="Email address" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="password" placeholder="Password" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            {mode === 'signup' && (
              <input type="password" placeholder="Confirm Password" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            )}
            <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              {mode === 'login' ? 'Log In' : 'Sign Up'}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="ml-2 font-semibold text-indigo-600 hover:underline"
              >
                {mode === 'login' ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section className="bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Find Your <span className="text-indigo-600">Perfect Item</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          Discover the latest trends in fashion and accessories. High-quality products, unbeatable prices, and a seamless shopping experience await you.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#featured-products" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:-translate-y-1">
            Shop Now
          </a>
          <a href="#" className="inline-block px-8 py-3 text-lg font-semibold text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
        <p className="mt-4 text-gray-600">We provide the best service and quality products.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <Icon name="check-circle" className="h-10 w-10 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">Quality Products</h3>
          <p className="mt-2 text-gray-600">Our products are curated and tested for the highest quality standards.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <Icon name="check-circle" className="h-10 w-10 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">Fast Shipping</h3>
          <p className="mt-2 text-gray-600">Get your orders delivered to your doorstep in no time.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <Icon name="check-circle" className="h-10 w-10 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">24/7 Support</h3>
          <p className="mt-2 text-gray-600">Our team is here to help you with any questions, anytime.</p>
        </div>
      </div>
    </div>
  </section>
);


export default function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });

  // This effect handles the browser's back button.
  // When the user navigates back (using the browser's back button),
  // the 'popstate' event fires, and we ensure the modal is closed.
  React.useEffect(() => {
    const handlePopState = () => {
      setAuthModal(prev => ({ ...prev, isOpen: false }));
    };

    window.addEventListener('popstate', handlePopState);

    // Cleanup the event listener when the component is removed
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []); // The empty array ensures this effect runs only once

  const handleOpenModal = (mode) => {
    setAuthModal({ isOpen: true, mode });
    // Manually add an entry to the browser's history stack.
    // This makes the browser aware that a new "state" (the modal) is active.
    window.history.pushState({ modalOpen: true }, '');
  };

  const handleLoginClick = () => handleOpenModal('login');
  const handleSignUpClick = () => handleOpenModal('signup');

  // This function is called when the user clicks the 'X' button on the modal.
  const handleCloseModal = () => {
    // Instead of just changing the state, we tell the browser to go back.
    // The 'popstate' listener above will then handle closing the modal,
    // keeping the app's state and the browser's history perfectly in sync.
    window.history.back();
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="bg-white font-sans">
        <Header onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ProductShowcase />
        </main>
        <Footer />
        {authModal.isOpen && <AuthModal initialMode={authModal.mode} onClose={handleCloseModal} />}
      </div>
    </>
  );
}





