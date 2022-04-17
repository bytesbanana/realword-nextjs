import React from 'react';

const TagList = ({ variant = 'light', tagList = [] }) => {
  return (
    <ul className='tag-list'>
      {tagList.map((tag) => (
        <li key={tag} className={`tag-default tag-pill tag-outline`}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
