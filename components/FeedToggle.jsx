import AuthContext from 'contexts/AuthContext';
import { route } from 'next/dist/server/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

const FeedToggle = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const router = useRouter();

  const { follow, tag } = router.query || {};

  useEffect(() => {
    if (follow && tag) {
      router.push('/', undefined, {
        shallow: true,
      });
    }
  }, [follow, router, tag]);

  return (
    <div className='feed-toggle'>
      <ul className='nav nav-pills outline-active'>
        {isAuthenticated && (
          <Link
            href={`/?follow=${user.username}`}
            as={`/?follow=${user.username}`}
            passHref
            shallow
          >
            <li className='nav-item'>
              <a className={`nav-link ${follow ? 'active' : ''}`}>Your Feed</a>
            </li>
          </Link>
        )}
        <Link href={`/`} as={`/`} passHref shallow>
          <li className='nav-item'>
            <a className={`nav-link ${!follow && !tag ? 'active' : ''}`}>
              Global Feed
            </a>
          </li>
        </Link>
        {tag && (
          <Link href={`/?tag=${tag}`} as={`/?tag=${tag}`} passHref shallow>
            <li className='nav-item'>
              <a className={`nav-link ${tag ? 'active' : ''}`}># {tag}</a>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default FeedToggle;
