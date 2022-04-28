import ArticleEditor from 'components/ArticleEditor';
import React from 'react';

const Editor = () => {
  return (
    <div className='editor-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <ArticleEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
