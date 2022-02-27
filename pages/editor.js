import React, { useState } from 'react';
import ArticleAPI from 'lib/api/article';
import ErrorList from 'components/ErrorList';

const Editor = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [body, setBody] = useState();
  const [tag, setTag] = useState();
  const [tagList, setTagList] = useState([]);
  const [errors, setErrors] = useState();

  const addTagHandler = (e) => {
    if (e.key === 'Enter') {
      if (tag) {
        setTagList([...tagList, tag]);
        setTag('');
      }
    }
  };

  const removeTagHandler = (index) => {
    setTagList((tags) => tags.filter((t, i) => i !== index));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await ArticleAPI.createArticle(
      title,
      description,
      body,
      tagList
    );

    const data = await response.json();
    if (response.ok) {
    } else {
      setErrors(data.errors);
    }
  };

  const renderErrors = () => {
    return (
      <ul className='error-messages'>
        {Object.keys(errors).map((key) => {
          return errors[key].map((e) => <li key={e}>{`${key} ${e}`}</li>);
        })}
      </ul>
    );
  };

  return (
    <div className='editor-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <form onSubmit={submitHandler}>
              {errors && <ErrorList errors={errors} />}

              <fieldset>
                <fieldset className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Article Title'
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder="What's this article about?"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <textarea
                    className='form-control'
                    rows='8'
                    placeholder='Write your article (in markdown)'
                    onChange={(e) => setBody(e.target.value)}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter tags'
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    onKeyPress={addTagHandler}
                  />
                  {tagList?.length > 0 && (
                    <div className='tag-list'>
                      {tagList.map((tag, index) => (
                        <span className='tag-default tag-pill' key={tag}>
                          <i
                            className='ion-close-round'
                            onClick={(e) => removeTagHandler(index)}
                          />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </fieldset>
                <button
                  className='btn btn-lg pull-xs-right btn-primary'
                  type='submit'
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
