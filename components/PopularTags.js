import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const PopularTags = (props) => {
  const loading = useSelector((state) => state.app.loading);
  return (
    <div className='col-md-3'>
      <div className='sidebar'>
        <p>Popular Tags</p>
        <div className='tag-list'>
          {props.tags.map((tag) => (
            <Link href={'/'} passHref key={tag}>
              <a className='tag-pill tag-default'>{tag}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
