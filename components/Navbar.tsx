import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <header className='bg-white +shadow-md'>
      <nav className='container mx-auto flex items-center justify-between py-4'>
        {/* Logo and Title */}
        <Link href="/" className='flex items-center gap-4'>
          <Image 
            src="/assets/icons/logo.svg" 
            width={30}
            height={30}
            alt='logo'
            className='object-contain'
          />
          <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 flex items-center'>
            <span className='text-blue-600'>Price</span>
            <span className='text-gray-700'>Dekho</span>
          </p>
        </Link>

        {/* Navigation Links */}
        <div className='flex gap-4 items-center'>
          <Link href="/products" className='text-gray-800 hover:text-blue-600 font-medium text-sm md:text-base lg:text-lg transition-colors duration-300'>
            Products
          </Link>
          <Link href="/contact" className='text-gray-800 hover:text-blue-600 font-medium text-sm md:text-base lg:text-lg transition-colors duration-300'>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
