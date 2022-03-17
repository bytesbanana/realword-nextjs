import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

const ProfileTab = ({ username }) => {
  const { query } = useRouter();
  const { favorite } = query;

  return (
    <div className='articles-toggle'>
      <ul className='nav nav-pills outline-active'>
        <li className='nav-item' key={'my-articles'}>
          <Link href='/profile/[username]' as={`/profile/${username}`} passHref>
            <a className={`nav-link ${!favorite && 'active'}`}>My Articles</a>
          </Link>
        </li>

        <li className='nav-item' key={'fav-articles'}>
          <Link
            href='/profile/[username]?favorite=true'
            as={`/profile/${username}?favorite=true`}
            passHref
          >
            <a className={`nav-link ${favorite && 'active'}`}>
              Favorited Artices
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileTab;
