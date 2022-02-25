import React from 'react';
import Link from 'next/link';

const response = {
  tags: ['welcome', 'implementations', 'codebaseShow', 'introduction'],
};

const PopularTags = () => {
  return (
    <div className='col-md-3'>
      <div className='sidebar'>
        <p>Popular Tags</p>

        <div className='tag-list'>
          <Link href={'/'} passHref>
            <a className='tag-pill tag-default'>programming</a>
          </Link>
          <Link href={'/'} passHref>
            <a className='tag-pill tag-default'>javascript</a>
          </Link>
          <Link href={'/'} passHref>
            <a className='tag-pill tag-default'>emberjs</a>
          </Link>
          <Link href={'/'} passHref>
            <a className='tag-pill tag-default'>angularjs</a>
          </Link>
          <Link href={'/'} passHref>
            <a className='tag-pill tag-default'>react</a>
          </Link>
          <Link href={'/'} passHref>
            <a className='tag-pill tag-default'>mean</a>
          </Link>
          <Link href={'/'} passHref>
            <a className='tag-pill tag-default'>node</a>
          </Link>
          <Link href={'/'} passHref>
            <a className='tag-pill tag-default'>rails</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
