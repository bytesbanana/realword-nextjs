import React from 'react';

const ToggleFavoriteButton = ({
  favorited,
  favoritesCount,
  onToggle = () => {},
  showIconOnly,
}) => {
  return (
    <button
      className={`btn btn-sm btn-${favorited ? '' : 'outline-'}primary ${
        showIconOnly ? 'pull-xs-right' : ''
      }`}
      onClick={() => onToggle(!favorited)}
    >
      <i className='ion-heart' />
      {!showIconOnly && (
        <>
          &nbsp; {favorited ? 'Unfavorite' : 'Favorite'} Article
          <span className='counter'>&nbsp;({favoritesCount})</span>
        </>
      )}
      {showIconOnly && <span className='counter'>{' ' + favoritesCount}</span>}
    </button>
  );
};

export default ToggleFavoriteButton;
