import React from 'react';
import ArticlePreviewListItem from 'components/ArticlePreviewListItem';
import { useSelector } from 'react-redux';

const ArticlePreview = ({ articles }) => {
  const loading = useSelector((state) => state.article.loading);

  return (
    <>
      {loading && <div>Loading articles... </div>}
      {articles &&
        !loading &&
        articles.map((article, index) => (
          <ArticlePreviewListItem key={index} article={article} />
        ))}
    </>
  );
};

export default ArticlePreview;
