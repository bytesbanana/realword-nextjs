import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <nav className='navbar navbar-light'>
        <div className='container'>
          <Link href='/' passHref>
            <a className='navbar-brand' href='index.html'>
              conduit
            </a>
          </Link>
          <ul className='nav navbar-nav pull-xs-right'>
            <Link href='/' passHref>
              <li className='nav-item'>
                <a className='nav-link active' href=''>
                  Home
                </a>
              </li>
            </Link>
            <Link href='/' passHref>
              <li className='nav-item'>
                <a className='nav-link' href=''>
                  <i className='ion-compose'></i>&nbsp;New Article
                </a>
              </li>
            </Link>

            <Link href='/' passHref>
              <li className='nav-item'>
                <a className='nav-link' href=''>
                  <i className='ion-gear-a'></i>&nbsp;Settings
                </a>
              </li>
            </Link>

            <Link href='/' passHref>
              <li className='nav-item'>
                <a className='nav-link' href=''>
                  Sign in
                </a>
              </li>
            </Link>

            <Link href='/' passHref>
              <li className='nav-item'>
                <a className='nav-link' href=''>
                  Sign up
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
