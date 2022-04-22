import React from 'react';

const ToggleFollowButton = ({ following, authorName, onClick }) => {
  return (
    <button
      className={`btn btn-sm btn-${following ? '' : 'outline-'}secondary`}
      onClick={onClick}
    >
      <i className='ion-plus-round' />
      &nbsp; {following ? 'Unfollow' : 'Follow'} {authorName}
    </button>
  );
};

export default ToggleFollowButton;
