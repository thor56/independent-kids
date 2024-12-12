"use client";

import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between absolute top-0 z-10">
      {/* Logo - Left */}
      <div className="font-bold text-xl">
        <span className="text-brand-green">Independent</span>{' '}
        <span className="text-white">Kids</span>
      </div>
      
      {/* Right side container for Links and Auth */}
      <div className="flex items-center gap-8">
        <NavLinks />
        <AuthButtons />
      </div>
    </nav>
  );
};

export default Navbar;