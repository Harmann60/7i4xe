import React, { useState, useEffect } from 'react';

// --- Mock Product Data ---
// In a real app, you'd fetch this from a database/API.
const products = [
    {
        id: 1,
        name: 'Vintage 90s Band Tee',
        price: '35.00',
        size: 'Large',
        imageUrl: 'https://placehold.co/400x500/93c5fd/374151?text=Vintage+Tee'
    },
    {
        id: 2,
        name: 'Classic Levi\'s Denim Jacket',
        price: '75.00',
        size: 'Medium',
        imageUrl: 'https://placehold.co/400x500/a5b4fc/374151?text=Denim+Jacket'
    },
    {
        id: 3,
        name: 'Floral Summer Dress',
        price: '28.00',
        size: 'Small',
        imageUrl: 'https://placehold.co/400x500/fca5a5/374151?text=Summer+Dress'
    },
    {
        id: 4,
        name: 'Leather Crossbody Bag',
        price: '42.00',
        size: 'One Size',
        imageUrl: 'https://placehold.co/400x500/fcd34d/374151?text=Leather+Bag'
    },
    {
        id: 5,
        name: 'Retro Windbreaker',
        price: '50.00',
        size: 'Medium',
        imageUrl: 'https://placehold.co/400x500/6ee7b7/374151?text=Windbreaker'
    },
    {
        id: 6,
        name: 'High-Waisted Mom Jeans',
        price: '40.00',
        size: '28"',
        imageUrl: 'https://placehold.co/400x500/c4b5fd/374151?text=Mom+Jeans'
    },
    {
        id: 7,
        name: 'Knit Cardigan',
        price: '22.00',
        size: 'Small',
        imageUrl: 'https://placehold.co/400x500/fdba74/374151?text=Cardigan'
    },
    {
        id: 8,
        name: 'Doc Martens Boots',
        price: '90.00',
        size: 'UK 7',
        imageUrl: 'https://placehold.co/400x500/f9a8d4/374151?text=Boots'
    }
];

// --- Sub-Components ---
// Keeping components in the same file as per the request.

// -- Header Component --
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Store Name */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-2xl font-bold text-indigo-400">
                            7i4xe
                        </a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium text-white">Home</a>
                        <a href="#featured" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-400 hover:border-gray-600 hover:text-white">Shop All</a>
                        <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-400 hover:border-gray-600 hover:text-white">About Us</a>
                    </div>

                    {/* Cart Icon */}
                    <div className="flex items-center">
                        <button className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <span className="sr-only">View cart</span>
                            <ShoppingCartIcon />
                        </button>
                    </div>

                    {/* Mobile Menu Button (hidden on screens larger than 'sm') */}
                    <div className="sm:hidden flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Panel */}
            {isMobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#featured" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Shop All</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>
                    </div>
                </div>
            )}
        </header>
    );
};

// -- Hero Component --
const Hero = () => (
    <div className="bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Give your closet</span>
                <span className="block text-indigo-400">a second life.</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Shop unique, pre-loved fashion from closets just like yours. Sustainable, affordable, and always one-of-a-kind.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                    <a href="#featured" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Shop Featured
                    </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-300 bg-gray-700 hover:bg-gray-600 md:py-4 md:text-lg md:px-1Ok-10">
                        Learn How to Sell
                    </a>
                </div>
            </div>
        </div>
    </div>
);

// -- Product Card Component --
const ProductCard = ({ product }) => (
    <a href="#" className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-700 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
                src={product.imageUrl}
                alt={`Photo of ${product.name}.`}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
                onError={(e) => {
                    // Simple inline error handling for broken images
                    e.target.onerror = null; // Prevent infinite loops
                    e.target.src = `https://placehold.co/400x500/71717a/3f3f46?text=Image+Error`;
                }}
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-200">
                    {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                    Size: {product.size}
                </p>
            </div>
            <p className="text-sm font-medium text-white">
                ${product.price}
            </p>
        </div>
    </a>
);

// -- Product Grid Component --
const ProductGrid = () => (
    <div id="featured" className="bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h2 className="text-2xl font-extrabold tracking-tight text-white text-center">
                Featured Items
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </div>
);

// -- Footer Component --
const Footer = () => (
    <footer className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-center text-base text-gray-500">
                &copy; 2025 7i4xe. All rights reserved.
            </p>
        </div>
    </footer>
);

// -- Icon Components --
// (Inlining SVGs is a common practice in React)
const ShoppingCartIcon = () => (
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const MenuIcon = () => (
    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


// --- Main App Component ---
// This is the default export that combines all the pieces.
export default function App() {
    return (
        <div className="font-sans bg-gray-900 text-gray-100 min-h-screen">
            <Header />
            <main>
                <Hero />
                <ProductGrid />
            </main>
            <Footer />
        </div>
    );
}
