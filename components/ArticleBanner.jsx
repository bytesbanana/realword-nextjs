import Link from 'next/link';
import React from 'react';
import { formatDate } from 'lib/date-util';
import ToggleFollowButton from './ToggleFollowButton';
import ToggleFavoriteButton from './ToggleFavoriteButton';

const ArticleBanner = ({ article, onToggleFollow, onToggleFavorite }) => {
  if (!article) return null;
  const { author, createdAt, favoritesCount, favorited } = article;

  return (
    <div className='banner'>
      <div className='container'>
        <h1>{article.title}</h1>
        <div className='article-meta'>
          <Link href={'/'}>
            <a>
              <img src={author.image} alt='profile image' />
            </a>
          </Link>
          <div className='info'>
            <Link href={'/'}>
              <a className='author link'>{author.username}</a>
            </Link>
            <span className='date'>{formatDate(createdAt)}</span>
          </div>
          <ToggleFollowButton
            following={author.following}
            authorName={author.username}
            onToggle={onToggleFollow}
          />
          &nbsp;&nbsp;
          <ToggleFavoriteButton
            favorited={favorited}
            favoritesCount={favoritesCount}
            onToggle={onToggleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleBanner;
