import Link from 'next/link';
import React, { useContext } from 'react';
import TagList from './TagList';
import AuthContext from 'contexts/AuthContext';
import { useRouter } from 'next/router';

const ArticleListItem = ({ article = null }) => {
  const {
    author,
    createdAt,
    favoritesCount,
    slug,
    title,
    description,
    tagList,
    favorited,
  } = article || {};
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const handleFavoriteButtonClick = (isFav) => {
    if (!authContext.isLoggedIn) {
      router.push('/login');
    }
  };
  return (
    <>
      {article && (
        <div className='article-preview'>
          <div className='article-meta'>
            <Link href={`/profile/${author?.username}`}>
              <a>
                <img src={author?.image} alt={author?.username} />
              </a>
            </Link>
            <div className='info'>
              <Link href={`/profile/${author?.username}`}>
                <a className='author'>{author?.username}</a>
              </Link>
              <span className='date'>{createdAt}</span>
            </div>
            <button
              type='button'
              className='btn btn-outline-primary btn-sm pull-xs-right'
              onClick={() => handleFavoriteButtonClick(!favorited)}
            >
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
