import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menus = [
  {
    name: 'Home',
    pathName: '/',
  },
  {
    name: 'New Article',
    pathName: '/editor',
    icon: 'ion-compose',
    auth: true,
  },

  {
    name: 'Settings',
    pathName: '/settings',
    icon: 'ion-gear-a',
    auth: true,
  },
  {
    name: 'Sign in',
    pathName: '/login',
    auth: false,
  },
  {
    name: 'Sign up',
    pathName: '/register',
    auth: false,
  },
];

const Header = () => {
  const router = useRouter();
  const session = null;

  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          conduit
        </a>
        <ul className='nav navbar-nav pull-xs-right'>
          {menus
            .filter((menu) => {
              const isMenuNeedAuth = menu?.auth;
              if (isMenuNeedAuth === undefined) return true;

              if (session) {
                if (isMenuNeedAuth) return true;
              } else {
                return isMenuNeedAuth === false;
              }
            })
            .map(({ name, pathName, icon = null }) => (
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

          {session && (
            <Link
              href={`/profile/${session?.user.username}`}
              key={session?.user?.username}
              passHref
            >
              <li className='nav-item'>
                <a
                  className={`nav-link ${router.pathname.includes('/profile')}`}
                >
                  <img
                    className='user-pic'
                    src={`${session?.user.image}`}
                    alt={session?.user?.username}
                  />
                  {session?.user.username}
                </a>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
