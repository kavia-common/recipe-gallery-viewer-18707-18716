import React from 'react';

function IconTime() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.8V12l3.2 2.2" />
    </svg>
  );
}
function IconServes() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M2.8 19.2c1.1-2.8 3.7-4.6 6.6-4.6s5.6 1.8 6.6 4.6" />
      <circle cx="17.8" cy="9.8" r="2.2" />
      <path d="M16 15c1.7.5 3 1.6 3.7 3" />
    </svg>
  );
}

// PUBLIC_INTERFACE
export default function MetaItem({ type, label }) {
  /** Icon + label compact meta element (time or serves). */
  return (
    <span className="meta-item">
      <span aria-hidden="true" className="muted-icon" style={{ color: 'var(--text-subtle)' }}>
        {type === 'time' ? <IconTime /> : <IconServes />}
      </span>
      <span>{label}</span>
    </span>
  );
}

export { IconTime, IconServes };
