import Link from 'next/link';
import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({ articles = [], isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className='article-preview'>
          <p>Loading articles...</p>
        </div>
      )}
      {!isLoading &&
        articles &&
        articles.length > 0 &&
        articles.map((article) => (
          <ArticleListItem key={article.slug} article={article} />
        ))}
    </>
  );
};

export default ArticleList;
