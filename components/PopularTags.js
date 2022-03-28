import React from 'react';
import TagList from './TagList';

const PopularTags = (props) => {
  return (
    <div className='col-md-3'>
      <div className='sidebar'>
        <p>Popular Tags</p>
        <TagList tags={props.tags} variant="secondary"/>
      </div>
    </div>
  );
};

export default PopularTags;
