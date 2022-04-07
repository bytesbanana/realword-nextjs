import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'lib/date';

const ArticleBanner = ({
  article,
  onFavoritePost,
  onUnFavoritePost,
  onFollowAuthor,
  onUnfollowAuthor,
}) => {
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
          <button
            className={`btn btn-sm  ${
              article?.author?.following
                ? 'btn-secondary'
                : 'btn-outline-secondary'
            }`}
            onClick={() => {
              article?.author?.following
                ? onUnfollowAuthor(article.author.username)
                : onFollowAuthor(article.author.username);
            }}
          >
            <i className='ion-plus-round'></i>
            &nbsp; {article?.author?.following ? ' Unfollow ' : ' Follow '}
            {article?.author?.username}
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
  onFollowAuthor: PropTypes.func,
  onUnfollowAuthor: PropTypes.func,
};

export default ArticleBanner;
