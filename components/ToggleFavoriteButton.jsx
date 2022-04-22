import React from 'react';

const ToggleFavoriteButton = ({ favorited, favoritesCount, onClick }) => {
  return (
    <button
      className={`btn btn-sm btn-${favorited ? '' : 'outline-'}primary`}
      onClick={onClick}
    >
      <i className='ion-heart' />
      &nbsp; {favorited ? 'Unfavorite' : 'Favorite'} Article{' '}
      <span className='counter'>({favoritesCount})</span>
    </button>
  );
};

export default ToggleFavoriteButton;
