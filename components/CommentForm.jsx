import React from 'react';

const CommentForm = ({ user }) => {
  return (
    <form className='card comment-form'>
      <div className='card-block'>
        <textarea
          className='form-control'
          placeholder='Write a comment...'
          rows={3}
          defaultValue={''}
        />
      </div>
      <div className='card-footer'>
        <img
          src={user.image}
          className='comment-author-img'
          alt={user.username}
        />
        <button className='btn btn-sm btn-primary'>Post Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;
