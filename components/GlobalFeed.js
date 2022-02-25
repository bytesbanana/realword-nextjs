import React, { useEffect, useState } from 'react';
import ArticlePreview from 'components/ArticlePreviewList';
import PropTypes from 'prop-types';

const GlobalFeed = ({ articles, onFetchFeed }) => {
  return (
    <div className='row'>
      <div className='col-md-9'>
        <div className='feed-toggle'>
          <ul className='nav nav-pills outline-active'>
            <li className='nav-item'>
              <a className='nav-link disabled' href=''>
                Your Feed
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href=''>
                Global Feed
              </a>
            </li>
          </ul>
        </div>
        <ArticlePreview articles={articles} />
      </div>
    </div>
  );
};

GlobalFeed.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  onFetchFeed: PropTypes.func,
};

export default GlobalFeed;
