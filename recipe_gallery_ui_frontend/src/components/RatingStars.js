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
      strokeWidth="1.2"
    >
      <path d="M12 3.2l2.6 5.2 5.7.8-4.1 4 1 5.9L12 16.9 6.8 19l1-5.9-4.1-4 5.7-.8L12 3.2z" />
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
