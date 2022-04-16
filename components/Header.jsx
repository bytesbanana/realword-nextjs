import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '/contexts/AuthContext';

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
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);

  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          conduit
        </a>

        {!isLoading && (
          <ul className='nav navbar-nav pull-xs-right'>
            {menus
              .filter((menu) => {
                const isMenuNeedAuth = menu?.auth;
                if (isMenuNeedAuth === undefined) return true;

                if (isLoggedIn) {
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

            {isLoggedIn && (
              <Link
                href={`/profile/${user.username}`}
                key={user?.username}
                passHref
              >
                <li className='nav-item'>
                  <a
                    className={`nav-link ${router.pathname.includes(
                      '/profile'
                    )}`}
                  >
                    <img
                      className='user-pic'
                      src={`${user.image}`}
                      alt={user?.username}
                    />
                    {user.username}
                  </a>
                </li>
              </Link>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
