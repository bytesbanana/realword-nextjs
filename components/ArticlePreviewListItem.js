import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/solid';
import dateFormat from 'dateformat';

const ArticlePreviewLitItem = ({ article }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr.toString());

    return dateFormat(date, 'mmmm dd,yyyy');
  };

  return (
    <div className='py-4'>
      <div className='flex mb-4'>
        <Image
          src={article.author.image}
          alt={article.username}
          width={32}
          height={32}
          layout='fixed'
          className='rounded-full'
        />
        <div className='flex flex-col flex-grow pl-2'>
          <span className='text-lime-500'>{article.author.username}</span>
          <span className='text-xs font-normal text-gray-400'>
            {formatDate(article.createdAt)}
          </span>
        </div>
        <button className='flex items-center px-1 py-1 text-sm align-middle border rounded-sm h-fit text-lime-500 border-lime-500 hover:text-white hover:bg-lime-600'>
          <HeartIcon className='w-4 h-4 mr-1' />
          {article.favoritesCount}
        </button>
      </div>
      <div className='mb-4'>
        <h3 className='text-2xl font-medium'>{article.title}</h3>
        <p className='text-base text-gray-500'>{article.description}</p>
      </div>
      <div className='flex justify-between'>
        <button type='button' className='text-xs font-light text-gray-400 '>
          Read more...
        </button>
        <div className='space-x-2'>
          {article.tagList.map((tag, index) => {
            const key = article.slug + tag;
            return (
              <span
                className='px-2 py-1 text-xs text-gray-400 border rounded-full cursor-pointer '
                key={key}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlePreviewLitItem;
