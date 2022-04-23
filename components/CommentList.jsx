import React from 'react';
import CommentListItem from './CommentListItem';

export const CommentList = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentListItem key={comment} comment={comment} />
      ))}
    </>
  );
};
