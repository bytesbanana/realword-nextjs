import Link from 'next/link';
import React from 'react';
import TagList from './TagList';

const ArticleListItem = ({ article = null }) => {
  const {
    author,
    createdAt,
    favoritesCount,
    slug,
    title,
    description,
    tagList,
  } = article || {};

  return (
    <>
      {article && (
        <div className='article-preview'>
          <div className='article-meta'>
            <Link href='profile.html'>
              <a>
                <img src={author?.image} alt={author?.username} />
              </a>
            </Link>
            <div className='info'>
              <Link href={''}>
                <a className='author'>{author?.username}</a>
              </Link>
              <span className='date'>{createdAt}</span>
            </div>
            <button className='btn btn-outline-primary btn-sm pull-xs-right'>
              <i className='ion-heart' /> {favoritesCount}
            </button>
          </div>
          <Link href={`/article/${slug}`}>
            <a className='preview-link'>
              <h1>{title}</h1>
              <p>{description}</p>
              <span>Read more...</span>
              <TagList tagList={tagList} />
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default ArticleListItem;
