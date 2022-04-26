import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ArticlesToggle = () => {
  const router = useRouter();
  const { username, favorite } = router.query;

  return (
    <div className='articles-toggle'>
      <ul className='nav nav-pills outline-active'>
        <Link href={`${username}`} shallow passHref>
          <li className='nav-item'>
            <a className={`nav-link ${!favorite ? 'active' : ''}`}>
              My Articles
            </a>
          </li>
        </Link>
        <Link
          href={{
            pathname: `${username}`,
            query: {
              favorite: true,
            },
          }}
          shallow
          passHref
        >
          <li className='nav-item'>
            <a className={`nav-link  ${favorite ? 'active' : ''}`}>
              Favorited Articles
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ArticlesToggle;
