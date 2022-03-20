import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from 'lib/date';

import ArticleAPI from 'lib/api/article';

const ArticlePreviewLitItem = (props) => {
  const [article, setArticle] = useState(props.article);
  const { slug } = article;

  const favArticleHandler = async () => {
    const data = await ArticleAPI.favoriteArticle(slug);
    setArticle(data.article);
  };

  const unfavArticleHandler = async () => {
    const data = await ArticleAPI.unfavoriteArticle(slug);
    setArticle(data.article);
  };

  console.log(article.favorited);

  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <a href='profile.html'>
          <Image
            src={article?.author?.image}
            alt={article.username}
            width={32}
            height={32}
            layout='fixed'
          />
        </a>
        <div className='info'>
          <a href='' className='author'>
            Eric Simons
          </a>
          <span className='date'> {formatDate(article.createdAt)}</span>
        </div>
        <button
          className={`btn btn-outline-primary btn-sm pull-xs-right ${
            article.favorited ? 'active' : ''
          }`}
          onClick={article.favorited ? unfavArticleHandler : favArticleHandler}
        >
          <i className='ion-heart'></i> {article.favoritesCount}
        </button>
      </div>
      <Link href={`/article/${article.slug}`} passHref>
        <a className='preview-link'>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <span>Read more...</span>
          <ul className='tag-list'>
            {article.tagList.map((tag) => {
              const key = article.slug + tag;
              return (
                <Link href='/' key={key} passHref>
                  <li className='tag-default tag-pill tag-outline'>{tag}</li>
                </Link>
              );
            })}
          </ul>
        </a>
      </Link>
    </div>
  );
};

export default ArticlePreviewLitItem;
