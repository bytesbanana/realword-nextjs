import React from 'react';
import { formatDate } from '../lib/date';

const Comment = ({ comment }) => {
  return (
    <div className='card'>
      <div className='card-block'>
        <p className='card-text'>{comment.body}</p>
      </div>
      <div className='card-footer'>
        <a href='' className='comment-author'>
          <img
            src={comment.author.image}
            className='comment-author-img'
            alt={comment.author.name}
          />
        </a>
        &nbsp;
        <a href='' className='comment-author'>
          {comment.author.username}
        </a>
        <span className='date-posted'>{formatDate(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default Comment;
