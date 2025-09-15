import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
export default function RecipeGrid({ recipes = [], onSelect }) {
  /** Responsive gallery grid that renders RecipeCard items. */
  if (!recipes.length) {
    return <p style={{ color: '#eaf5f6' }}>No recipes match your search.</p>;
  }
  return (
    <section className="gallery" aria-live="polite">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} onClick={onSelect} />
      ))}
    </section>
  );
}
