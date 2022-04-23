import Link from 'next/link';
import React, { useContext, useState } from 'react';
import TagList from './TagList';
import AuthContext from 'contexts/AuthContext';
import { useRouter } from 'next/router';
import ArticlesAPI from 'lib/api/ArticlesAPI';
import ToggleFavoriteButton from './ToggleFavoriteButton';

const ArticleListItem = ({ article: initArticle = null }) => {
  const [article, setArticles] = useState(initArticle);
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
  const { isAuthenticated } = useContext(AuthContext);

  const handleFavoriteButtonClick = async (isFav) => {
    if (!isAuthenticated) {
      router.push('/login');
    }

    const updatedArticle = await ArticlesAPI.setFavorite(slug, isFav);
    setArticles(updatedArticle);
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
            <ToggleFavoriteButton
              favorited={favorited}
              favoritesCount={favoritesCount}
              showIconOnly
              onClick={(e) => handleFavoriteButtonClick(!favorited)}
            />
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
