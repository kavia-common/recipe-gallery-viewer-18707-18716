import React from 'react';

// PUBLIC_INTERFACE
export default function FilterPills({ pills = [], active = [], onToggle }) {
  /** Filter pills list for categories. Clicking toggles each filter. */
  return (
    <div className="filter-pills" role="group" aria-label="Filter by category">
      {pills.map((pill) => {
        const pressed = active.includes(pill);
        return (
          <button
            key={pill}
            className="pill"
            type="button"
            aria-pressed={pressed}
            onClick={() => onToggle(pill)}
          >
            {pill}
          </button>
        );
      })}
    </div>
  );
}
