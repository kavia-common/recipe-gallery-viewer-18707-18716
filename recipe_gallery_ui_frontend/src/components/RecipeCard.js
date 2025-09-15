import React, { useState } from 'react';
import RatingStars from './RatingStars';
import MetaItem from './MetaItem';
import FavoriteBadge from './FavoriteBadge';

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe, onClick }) {
  /**
   * Recipe card matching the reference: image, floating favorite badge,
   * title, meta, rating, description, and CTA button.
   */
  const [fav, setFav] = useState(false);

  return (
    <article className="recipe-card" role="article" onClick={() => onClick?.(recipe)} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(recipe); }}>
      <div className="media">
        <img src={recipe.image} alt={recipe.alt} />
        <FavoriteBadge active={fav} onToggle={setFav} />
      </div>
      <div className="body">
        <h2 className="title">{recipe.title}</h2>
        <div className="meta">
          <MetaItem type="time" label={recipe.time} />
          <span className="dot" aria-hidden="true" />
          <MetaItem type="serves" label={`Serves ${recipe.serves}`} />
        </div>
        <RatingStars value={recipe.rating} />
        <p className="desc">{recipe.description}</p>
        <div className="actions">
          <button type="button" className="btn primary" onClick={(e) => { e.stopPropagation(); onClick?.(recipe); }}>
            LET’S COOK!
          </button>
        </div>
      </div>
    </article>
  );
}
