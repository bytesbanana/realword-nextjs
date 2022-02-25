import React from 'react';
import ArticlePreviewListItem from 'components/ArticlePreviewListItem';

const ArticlePreview = ({ articles }) => {
  return (
    <>
      {articles &&
        articles.map((article, index) => (
          <ArticlePreviewListItem key={index} article={article} />
        ))}
    </>
  );
};

export default ArticlePreview;
