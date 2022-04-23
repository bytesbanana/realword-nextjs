import { formatDate } from 'lib/date-util';
import Link from 'next/link';
import React from 'react';
import ToggleFollowButton from './ToggleFollowButton';
import ToggleFavoriteButton from './ToggleFavoriteButton';

const ArticleActions = ({ article, onToggleFollow, onToggleFavorite }) => {
  if (!article) return null;
  const { author, createdAt, favorited, favoritesCount } = article;

  return (
    <div className='article-actions'>
      <div className='article-meta'>
        <Link href='/'>
          <a>
            <img src={author.image} alt='author' />
          </a>
        </Link>
        <div className='info'>
          <a className='author link'>{author.username}</a>
          <span className='date'>{formatDate(createdAt)}</span>
        </div>
        <ToggleFollowButton
          following={author.following}
          authorName={author.username}
          onToggle={onToggleFollow}
        />
        &nbsp;
        <ToggleFavoriteButton
          favorited={favorited}
          favoritesCount={favoritesCount}
          onToggle={onToggleFavorite}
        />
      </div>
    </div>
  );
};

export default ArticleActions;
