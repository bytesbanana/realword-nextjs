import React, { useState } from 'react';
import { createLogicalAnd } from 'typescript';

const ArticleEditor = () => {
  const [article, setArticle] = useState({
    title: '',
    description: '',
    body: '',
  });
  const [inputTag, setInputTag] = useState('');
  const [tagList, setTagList] = useState([]);

  const addTag = () => {
    if (inputTag.trim()) {
      setTagList([...tagList, inputTag]);
      setInputTag('');
    }
  };

  const removeTag = (index) => {
    const temp = [...tagList];
    temp.splice(index, 1);

    setTagList(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...article, tagList });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <fieldset className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Article Title'
            onChange={({ target }) => {
              setArticle({ ...article, title: target.value });
            }}
          />
        </fieldset>
        <fieldset className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder="What's this article about?"
            onChange={({ target }) =>
              setArticle({ ...article, description: target.value })
            }
          />
        </fieldset>
        <fieldset className='form-group'>
          <textarea
            className='form-control'
            rows={8}
            placeholder='Write your article (in markdown)'
            defaultValue={''}
            onChange={({ target }) =>
              setArticle({ ...article, body: target.value })
            }
          />
        </fieldset>
        <fieldset className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter tags'
            value={inputTag}
            onChange={({ target }) => {
              setInputTag(target.value);
            }}
            onKeyDown={({ key }) => {
              if (key === 'Enter') {
                addTag();
              }
            }}
          />
          <div className='tag-list'>
            {tagList.map((tag, i) => (
              <span
                className='tag-default tag-pill'
                key={tag}
                onClick={() => removeTag(i)}
              >
                <i className='ion-close-round'></i>
                {tag}
              </span>
            ))}
          </div>
        </fieldset>
        <button className='btn btn-lg pull-xs-right btn-primary' type='submit'>
          Publish Article
        </button>
      </fieldset>
    </form>
  );
};

export default ArticleEditor;
