import Link from 'next/link';
import React from 'react';

const PopularTags = ({ tagList = [], onTagSelect = () => {} }) => {
  return (
    <>
      <p>Popular Tags</p>
      <div className='tag-list'>
        {tagList.map((tag) => (
          <a
            key={tag}
            className={`tag-default tag-pill`}
            onClick={() => onTagSelect(tag)}
            href='#'
          >
            {tag}
          </a>
        ))}
      </div>
    </>
  );
};

export default PopularTags;
