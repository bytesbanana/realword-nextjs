import React from 'react';
import ArticlePreview from 'components/ArticlePreviewList';
import PopuplarTags from 'components/PopularTags';
import PropTypes from 'prop-types';

const GlobalFeed = ({ articles, tags, onFetchFeed }) => {
  return (
    <div className='row'>
      <div className='col-md-9'>
        <div className='feed-toggle'>
          <ul className='nav nav-pills outline-active'>
            <li className='nav-item'>
              <a className='nav-link disabled'>Your Feed</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' onClick={onFetchFeed}>
                Global Feed
              </a>
            </li>
          </ul>
          <ArticlePreview articles={articles} />
        </div>
      </div>
      <PopuplarTags tags={tags} />
    </div>
  );
};

GlobalFeed.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.string),
  onFetchFeed: PropTypes.func,
};

export default GlobalFeed;
