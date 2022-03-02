import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import TagList from './TagList';

const PopularTags = (props) => {
  const loading = useSelector((state) => state.app.loading);
  return (
    <div className='col-md-3'>
      <div className='sidebar'>
        <p>Popular Tags</p>
        <TagList tags={props.tags} />
      </div>
    </div>
  );
};

export default PopularTags;
