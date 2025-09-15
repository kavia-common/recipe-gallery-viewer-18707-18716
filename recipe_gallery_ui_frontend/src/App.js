import React, { useMemo, useState } from 'react';
import './App.css';
import './index.css';
import SearchBar from './components/SearchBar';
import FilterPills from './components/FilterPills';
import RecipeGrid from './components/RecipeGrid';
import RecipeModal from './components/RecipeModal';
import recipesData from './data/recipes';

// PUBLIC_INTERFACE
function App() {
  /**
   * The Recipe Gallery UI main component. Renders search and filter controls,
   * a responsive grid of recipe cards, and a modal for viewing details.
   */
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const set = new Set();
    recipesData.forEach((r) => r.categories.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipesData.filter((r) => {
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.categories.join(' ').toLowerCase().includes(q);
      const matchesFilters =
        activeFilters.length === 0 ||
        activeFilters.every((f) => r.categories.includes(f));
      return matchesQuery && matchesFilters;
    });
  }, [query, activeFilters]);

  const onToggleFilter = (pill) => {
    setActiveFilters((prev) =>
      prev.includes(pill) ? prev.filter((p) => p !== pill) : [...prev, pill]
    );
  };

  return (
    <div className="ocean-app">
      <div className="ocean-bg-accent" aria-hidden="true" />
      <header className="ocean-header" role="banner">
        <div className="container">
          <div className="brand">
            <span className="brand-badge" aria-hidden="true">🍲</span>
            <h1 className="brand-title">Recipe Gallery</h1>
          </div>
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <div className="container">
          <FilterPills
            pills={categories}
            active={activeFilters}
            onToggle={onToggleFilter}
          />
        </div>
      </header>

      <main className="container ocean-main" role="main">
        <RecipeGrid recipes={filtered} onSelect={setSelected} />
      </main>

      <RecipeModal recipe={selected} onClose={() => setSelected(null)} />
      <footer className="ocean-footer" role="contentinfo">
        <div className="container">
          <p className="muted">Ocean Professional · Modern UI · Static demo</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
