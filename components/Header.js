import React from 'react';
import Link from 'next/link';

import { MenuIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <nav className='shadow-sm'>
      <div className='flex container h-[56px] px-2 mx-auto'>
        <div className='flex flex-row items-center flex-1 space-x-1'>
          <button className='rounded cursor-pointer active:bg-gray-300'>
            <MenuIcon width='32px' height='32px' className='sm:hidden' />
          </button>
          <Link href='/'>
            <a className='inline-flex text-2xl font-semibold text-green-700 cursor-pointer'>
              conduit
            </a>
          </Link>
        </div>

        <div className='flex items-center space-x-6'>
          <Link href='/'>
            <a className='text-gray-400'>Home</a>
          </Link>
          <Link href='/login'>
            <a className='text-gray-400'>Sign in</a>
          </Link>
          <Link href='/register'>
            <a className='text-gray-400'>Sign up</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
