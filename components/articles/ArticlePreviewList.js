import React from 'react';
import ArticlePreviewListItem from 'components/articles/ArticlePreviewListItem';
import { useSelector } from 'react-redux';

const ArticlePreview = ({ articles }) => {
  const loading = useSelector((state) => state.article.loading);

  const renderArticlesList = () => {
    if (articles?.length > 0) {
      return articles.map((article, index) => (
        <ArticlePreviewListItem key={index} article={article} />
      ));
    }

    return <div className='article-preview'>No articles are here... yet.</div>;
  };

  return (
    <>
      {loading && <div className='article-preview'>Loading articles... </div>}
      {!loading && renderArticlesList()}
    </>
  );
};

export default ArticlePreview;
