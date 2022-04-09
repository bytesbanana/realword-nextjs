import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const menus = [
  {
    name: 'Home',
    pathName: '/',
  },
  {
    name: 'About',
    pathName: '/about',
    icon: 'ion-compose',
  },

  {
    name: 'Settings',
    pathName: '/settings',
    icon: 'ion-gear-a',
  },
  {
    name: 'Sign in',
    pathName: '/login',
  },
  {
    name: 'Sign up',
    pathName: '/register',
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          conduit
        </a>
        <ul className='nav navbar-nav pull-xs-right'>
          {menus.map(({ name, pathName, icon = null }) => (
            <Link href={pathName} key={name} passHref>
              <li className='nav-item'>
                <a
                  className={`nav-link ${
                    router.pathname === pathName ? 'active' : ''
                  }`}
                >
                  {icon && <i className={icon}></i>} {name}
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
