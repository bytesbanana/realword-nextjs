import React, { useEffect, useState } from 'react';
import ArticlePreview from 'components/ArticlePreviewList';
import PropTypes from 'prop-types';

const GlobalFeed = ({ articles, onFetchFeed }) => {
  return (
    <div className='flex-grow'>
      <ul className='m-0 border-b-2 '>
        <li className='p-2 border-b-2 w-fit text-lime-500 border-lime-500 relative top-[2px] cursor-pointer' onClick={onFetchFeed}>
          Global Feed
        </li>
      </ul>
      <ArticlePreview articles={articles} />
    </div>
  );
};

GlobalFeed.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  onFetchFeed: PropTypes.func,
};

export default GlobalFeed;
