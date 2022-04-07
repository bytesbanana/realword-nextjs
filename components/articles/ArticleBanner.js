import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'lib/date';

const ArticleBanner = ({ article, onFavoritePost, onUnFavoritePost }) => {
  return (
    <div className='banner'>
      <div className='container'>
        <h1>{article?.title}</h1>

        <div className='article-meta'>
          <a className='link-profile-holder'>
            <img
              src={article?.author?.image}
              width='32'
              height='32'
              alt={article?.author?.username}
            />
          </a>
          <div className='info'>
            <a href='' className='author'>
              {article?.author?.username}
            </a>
            <span className='date'>{formatDate(article?.createdAt)}</span>
          </div>
          <button className='btn btn-sm btn-outline-secondary'>
            <i className='ion-plus-round'></i>
            &nbsp; Follow {article?.author?.username}
          </button>
          &nbsp;&nbsp;
          <button
            className={`btn btn-sm ${
              !article?.favorited ? 'btn-outline-primary' : 'btn-primary'
            }`}
            onClick={() =>
              !article?.favorited ? onFavoritePost() : onUnFavoritePost()
            }
          >
            <i className='ion-heart' style={{ paddingRight: '2px' }}></i>
            {!article?.favorited ? 'Favorite' : 'Unfavorite'} Post
            <span className='counter' style={{ paddingLeft: '2px' }}>
              ({article?.favoritesCount})
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
ArticleBanner.propTypes = {
  article: PropTypes.oneOf([PropTypes.object]),
  onFavoritePost: PropTypes.func,
  onUnFavoritePost: PropTypes.func,
};

export default ArticleBanner;
