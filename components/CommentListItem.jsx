import { formatDate } from 'lib/date-util';
import React from 'react';

const CommentListItem = ({ comment }) => {
  if (!comment) return null;
  return (
    <div className='card'>
      <div className='card-block'>
        <p className='card-text'>{comment.body}</p>
      </div>
      <div className='card-footer'>
        <a className='comment-author'>
          <img
            src={comment.author.image}
            className='comment-author-img'
            alt='commentor'
          />
        </a>
        &nbsp;
        <a className='comment-author link'>&nbsp;{comment.author.username}</a>
        <span className='date-posted'>{formatDate(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default CommentListItem;
