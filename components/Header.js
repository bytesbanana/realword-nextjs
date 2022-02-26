import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.auth.user);

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
            {user && (
              <Link href='/' passHref>
                <li className='nav-item'>
                  <a className='nav-link' href=''>
                    <i className='ion-compose'></i>&nbsp;New Article
                  </a>
                </li>
              </Link>
            )}

            {user && (
              <Link href='/' passHref>
                <li className='nav-item'>
                  <a className='nav-link' href=''>
                    <i className='ion-gear-a'></i>&nbsp;Settings
                  </a>
                </li>
              </Link>
            )}

            {!user && (
              <>
                <Link href='/login' passHref>
                  <li className='nav-item'>
                    <a className='nav-link'>Sign in</a>
                  </li>
                </Link>

                <Link href='/register' passHref>
                  <li className='nav-item'>
                    <a className='nav-link' href=''>
                      Sign up
                    </a>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
