import React from 'react';

function Heart({ active }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" fill={active ? '#FF738A' : '#ffffff'} stroke="none">
      <path d="M12 21s-6.7-4.6-9.5-8.1C.7 10.7 1.2 7.6 3.6 6.1 5.6 4.8 8 5.3 9.4 7c.2.3.4.5.6.8.2-.3.4-.5.6-.8 1.4-1.7 3.8-2.2 5.8-1 2.4 1.5 2.9 4.6 1.1 6.8C18.7 16.4 12 21 12 21z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export default function FavoriteBadge({ active = false, onToggle }) {
  /** Circular favorite/like badge that overlays the card image corner. */
  return (
    <button
      type="button"
      className="badge-fav"
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={active}
      onClick={(e) => {
        e.stopPropagation();
        onToggle?.(!active);
      }}
      title={active ? 'Favorited' : 'Add to favorites'}
    >
      <Heart active={active} />
    </button>
  );
}
