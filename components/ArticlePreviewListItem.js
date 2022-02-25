import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/solid';
import dateFormat from 'dateformat';
import Link from 'next/link';

const ArticlePreviewLitItem = ({ article }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr.toString());

    return dateFormat(date, 'mmmm dd, yyyy');
  };

  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <a href='profile.html'>
          <Image
            src={article.author.image}
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
        <button className='btn btn-outline-primary btn-sm pull-xs-right'>
          <i className='ion-heart'></i> {article.favoritesCount}
        </button>
      </div>
      <a href='' className='preview-link'>
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
    </div>
  );
};

export default ArticlePreviewLitItem;
