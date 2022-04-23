import React from 'react';

const ToggleFollowButton = ({ following, authorName, onToggle = () => {} }) => {
  return (
    <button
      className={`btn btn-sm btn-${following ? '' : 'outline-'}secondary`}
      onClick={() => onToggle(!following)}
    >
      <i className='ion-plus-round' />
      &nbsp; {following ? 'Unfollow' : 'Follow'} {authorName}
    </button>
  );
};

export default ToggleFollowButton;
