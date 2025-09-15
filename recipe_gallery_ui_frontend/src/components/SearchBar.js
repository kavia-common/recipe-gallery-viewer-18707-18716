import React from 'react';

// PUBLIC_INTERFACE
export default function SearchBar({ value, onChange }) {
  /** Accessible search bar used to filter recipes by text query. */
  return (
    <div className="searchbar" role="search">
      <label htmlFor="recipe-search" className="visually-hidden">Search recipes</label>
      <input
        id="recipe-search"
        type="search"
        placeholder="Search recipes, ingredients, categories…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search recipes"
      />
    </div>
  );
}
