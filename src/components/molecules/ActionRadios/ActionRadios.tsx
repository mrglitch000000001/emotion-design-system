import React, { useState } from 'react';
import './ActionRadios.css';

const OPTIONS = [
  'Accent Pulse',
  'Invert Theme',
  'Shuffle Cards',
  'Random Gap',
  'Show Toast',
];

const ActionRadios = ({ className = '' }: { className?: string }) => {
  const [value, setValue] = useState<string | null>(null);

  const perform = (opt: string) => {
    const root = document.documentElement;
    const style = getComputedStyle(root);

    if (opt === 'Accent Pulse') {
      const prev = style.getPropertyValue('--accent') || '#D7263D';
      root.style.setProperty('--accent', '#FF8A80');
      setTimeout(() => root.style.setProperty('--accent', prev.trim()), 700);
    }

    if (opt === 'Invert Theme') {
      root.classList.toggle('force-dark');
    }

    if (opt === 'Shuffle Cards') {
      window.dispatchEvent(new CustomEvent('design:shuffle-cards'));
    }

    if (opt === 'Random Gap') {
      const px = `${Math.round(8 + Math.random() * 32)}px`;
      root.style.setProperty('--gap-md', px);
    }

    if (opt === 'Show Toast') {
      const toast = document.createElement('div');
      toast.className = 'action-toast';
      toast.textContent = 'Bauhaus action triggered — nice!';
      document.body.appendChild(toast);
      setTimeout(() => toast.classList.add('is-visible'), 20);
      setTimeout(() => toast.classList.remove('is-visible'), 1800);
      setTimeout(() => document.body.removeChild(toast), 2100);
    }
  };

  const onChange = (next: string) => {
    setValue(next);
    perform(next);
  };

  return (
    <fieldset className={`action-radios ${className}`.trim()}>
      <legend className="action-radios__legend">Design Actions</legend>
      <div className="action-radios__list" role="radiogroup" aria-label="Design style actions">
        {OPTIONS.map((opt) => (
          <label key={opt} className={`action-radios__item ${value === opt ? 'is-selected' : ''}`}>
            <input
              type="radio"
              name="design-action"
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            <span className="action-radios__dot" aria-hidden="true" />
            <span className="action-radios__label">{opt}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default ActionRadios;
