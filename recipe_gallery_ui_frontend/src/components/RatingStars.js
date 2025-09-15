import React from 'react';

function Star({ filled }) {
  return (
    <svg
      className="star"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 3.8l2.47 5 5.52.8-4 3.9.94 5.5L12 16.8 7.07 19l.93-5.5-4-3.9 5.53-.8L12 3.8z" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export default function RatingStars({ value = 0, outOf = 5 }) {
  /** A row of star icons to represent ratings. */
  const stars = Array.from({ length: outOf }, (_, i) => i < value);
  return (
    <div className="rating" aria-label={`Rating: ${value} out of ${outOf}`}>
      {stars.map((filled, idx) => (
        <Star key={idx} filled={filled} />
      ))}
    </div>
  );
}
