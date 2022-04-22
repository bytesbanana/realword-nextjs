import React from 'react';

const ArticleContent = ({ content }) => {
  return (
    <div className='row article-content'>
      <div className='col-md-12'>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ArticleContent;
