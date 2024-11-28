import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-orange-800 p-5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          
          <h2 className="text-black font-bold text-3xl md:text-4xl mb-4 md:mb-0">Fabrics World!</h2>
          
          
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-2 md:space-y-0 text-center">
            <Link href="/" className="text-white hover:text-blue-500 font-bold text-lg">
              Home
            </Link>
            <Link href="/cloths" className="text-white hover:text-blue-500 font-bold text-lg">
              Cloths
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
