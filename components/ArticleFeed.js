import React, { useState } from 'react';
import ArticlePreview from 'components/articles/ArticlePreviewList';
import PopuplarTags from 'components/PopularTags';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const FeedType = {
  global: 'GLOBAL',
  your: 'YOUR',
};

const ArticleFeed = ({ articles, tags, onFetchFeed }) => {
  const [currentFeed, setCurrentFeed] = useState(FeedType.global);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = !!user;

  const changeFeedHandler = (feedType) => {
    setCurrentFeed(feedType);
    if (feedType === FeedType.global) {
      onFetchFeed();
      return;
    }
    if (feedType === FeedType.your) {
      return;
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
                  className='nav-link'
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
                className='nav-link active'
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
