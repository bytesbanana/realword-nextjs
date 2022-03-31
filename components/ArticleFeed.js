import React, { useState } from 'react';
import ArticlePreview from 'components/articles/ArticlePreviewList';
import PopuplarTags from 'components/PopularTags';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FeedType } from 'lib/const';

const ArticleFeed = ({ articles, tags, onFetchFeed }) => {
  const [currentFeed, setCurrentFeed] = useState(FeedType.global);
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.article.loading);
  const isLoggedIn = !!user;

  const changeFeedHandler = (e, feedType) => {
    if (!isLoading) {
      setCurrentFeed(feedType);
      onFetchFeed(feedType);
    }
  };

  return (
    <div className='row'>
      <div className='col-md-9'>
        <div className='feed-toggle'>
          <ul className='nav nav-pills outline-active'>
            {isLoggedIn && (
              <li className='nav-item'>
                <a
                  className={`nav-link ${
                    currentFeed === FeedType.your ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    changeFeedHandler(e, FeedType.your);
                  }}
                >
                  Your Feed
                </a>
              </li>
            )}
            <li className='nav-item'>
              <a
                className={`nav-link ${
                  currentFeed === FeedType.global ? 'active' : ''
                }`}
                onClick={(e) => {
                  changeFeedHandler(e, FeedType.global);
                }}
              >
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

ArticleFeed.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.string),
  onFetchFeed: PropTypes.func,
};

export default ArticleFeed;
