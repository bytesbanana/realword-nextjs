import React from 'react';

const CommentListItem = ({ comment }) => {
  return (
    <div className='card'>
      <div className='card-block'>
        <p className='card-text'>
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div className='card-footer'>
        <a className='comment-author'>
          <img
            src='http://i.imgur.com/Qr71crq.jpg'
            className='comment-author-img'
            alt='commentor'
          />
        </a>
        &nbsp;
        <a className='comment-author'>Jacob Schmidt</a>
        <span className='date-posted'>Dec 29th</span>
      </div>
    </div>
  );
};

export default CommentListItem;
