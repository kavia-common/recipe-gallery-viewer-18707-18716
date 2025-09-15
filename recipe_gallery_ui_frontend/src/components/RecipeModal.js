import React from 'react';
import RatingStars from './RatingStars';
import MetaItem from './MetaItem';

// PUBLIC_INTERFACE
export default function RecipeModal({ recipe, onClose }) {
  /**
   * Simple modal/lightbox to show a larger recipe view.
   * Closes when clicking the backdrop or pressing Escape.
   */
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!recipe) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${recipe.title} details`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-media">
          <img src={recipe.image} alt={recipe.alt} />
        </div>
        <div className="modal-body">
          <h3 className="modal-title">{recipe.title}</h3>
          <div className="meta modal-meta">
            <MetaItem type="time" label={recipe.time} />
            <span className="dot" aria-hidden="true" />
            <MetaItem type="serves" label={`Serves ${recipe.serves}`} />
          </div>
          <RatingStars value={recipe.rating} />
          <p className="modal-desc">{recipe.longDescription || recipe.description}</p>
          <div className="modal-actions">
            <button className="btn secondary" onClick={onClose} aria-label="Close">Close</button>
            <button className="btn primary">LET’S COOK!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
