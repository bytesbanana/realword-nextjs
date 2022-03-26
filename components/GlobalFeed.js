import React from 'react';
import ArticlePreview from 'components/articles/ArticlePreviewList';
import PopuplarTags from 'components/PopularTags';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const GlobalFeed = ({ articles, tags, onFetchFeed }) => {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = !!user;

  return (
    <div className='row'>
      <div className='col-md-9'>
        <div className='feed-toggle'>
          <ul className='nav nav-pills outline-active'>
            {isLoggedIn && (
              <li className='nav-item'>
                <a className='nav-link disabled'>Your Feed</a>
              </li>
            )}
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
