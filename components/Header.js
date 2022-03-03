import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import ActiveLink from './ActiveLink'

const Header = () => {
  const user = useSelector((state) => state.auth.user)
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <ActiveLink activeClassName="active" href="/" passHref>
            <a className="navbar-brand">conduit</a>
          </ActiveLink>
          <ul className="nav navbar-nav pull-xs-right">
            <ActiveLink activeClassName="active" href="/" passHref>
              <li className="nav-item">
                <a className="nav-link">Home</a>
              </li>
            </ActiveLink>
            {user && (
              <ActiveLink activeClassName="active" href="/editor" passHref>
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="ion-compose"></i>&nbsp;New Article
                  </a>
                </li>
              </ActiveLink>
            )}

            {user && (
              <>
                <ActiveLink activeClassName="active" href="/setting" passHref>
                  <li className="nav-item">
                    <a className="nav-link">
                      <i className="ion-gear-a"></i>&nbsp;Settings
                    </a>
                  </li>
                </ActiveLink>

                <ActiveLink activeClassName="active" href="/register" passHref>
                  <li className="nav-item">
                    <a className="nav-link" style={{ display: 'flex' }}>
                      <Image
                        className="user-pic"
                        src="https://api.realworld.io/images/smiley-cyrus.jpeg"
                        alt="User picture"
                        width={26}
                        height={26}
                        objectFit="cover"
                      />
                      <span style={{ marginLeft: '5px' }}>{user?.username}</span>
                    </a>
                  </li>
                </ActiveLink>
              </>
            )}

            {!user && (
              <>
                <ActiveLink activeClassName="active" href="/login" passHref>
                  <li className="nav-item">
                    <a className="nav-link">Sign in</a>
                  </li>
                </ActiveLink>

                <ActiveLink activeClassName="active" href="/register" passHref>
                  <li className="nav-item">
                    <a className="nav-link">Sign up</a>
                  </li>
                </ActiveLink>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
