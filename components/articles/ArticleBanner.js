import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'lib/date';

const ArticleBanner = ({ article }) => {
  return (
    <div className='banner'>
      <div className='container'>
        <h1>{article.title}</h1>

        <div className='article-meta'>
          <a className='link-profile-holder'>
            <img
              objectFit='cover'
              src={article.author.image}
              width='32'
              height='32'
              alt={article.author.username}
            />
          </a>
          <div className='info'>
            <a href='' className='author'>
              {article.author.username}
            </a>
            <span className='date'>{formatDate(article.createdAt)}</span>
          </div>
          <button className='btn btn-sm btn-outline-secondary'>
            <i className='ion-plus-round'></i>
            &nbsp; Follow {article.author.username}
          </button>
          &nbsp;&nbsp;
          <button className='btn btn-sm btn-outline-primary'>
            <i className='ion-heart'></i>
            &nbsp; Favorite Post{' '}
            <span className='counter'>({article.favoritesCount})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
ArticleBanner.propTypes = {
  article: PropTypes.oneOf([PropTypes.object]),
};

export default ArticleBanner;
