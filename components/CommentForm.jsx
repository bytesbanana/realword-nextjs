import React, { useState } from 'react';

const CommentForm = ({ user, onPostClick }) => {
  const [comment, setComment] = useState('');
  return (
    <form
      className='card comment-form'
      onSubmit={(e) => {
        e.preventDefault();
        if (!comment) return;
        onPostClick(comment);
        setComment('');
      }}
    >
      <div className='card-block'>
        <textarea
          className='form-control'
          placeholder='Write a comment...'
          rows={3}
          onChange={(e) => setComment(e.target.value)}
          defaultValue=''
        />
      </div>
      <div className='card-footer'>
        <img
          src={user.image}
          className='comment-author-img'
          alt={user.username}
        />
        <button className='btn btn-sm btn-primary' type='submit'>
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
