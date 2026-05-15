import { useEffect, useState } from 'react';
import './ActionRadios.css';

const OPTIONS = ['Blue', 'Red', 'White', 'Random', 'Revert'];
const STORAGE_KEY = 'app:theme'

// Only vary the accent color so the app remains dark-themed.
const THEMES: Record<string, string> = {
  Blue: '#1E88E5',
  Red: '#D7263D',
  White: '#FFFFFF',
}

const ActionRadios = ({ className = '' }: { className?: string }) => {
  const [value, setValue] = useState<string | null>(null);
  const [initialAccent, setInitialAccent] = useState<string | null>(null);

  const applyAccent = (accent: string) => {
    const root = document.documentElement;
    root.style.setProperty('--accent', accent);
    root.style.setProperty('--color-accent', accent);
  }

  const randomAccent = (): string => {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
    return `#${hex}`
  }

  useEffect(() => {
    const root = document.documentElement;
    const computed = getComputedStyle(root);
    const currentAccent = computed.getPropertyValue('--accent')?.trim() || '#D7263D';
    setInitialAccent(currentAccent);

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        if (THEMES[stored]) {
          applyAccent(THEMES[stored])
          setValue(stored)
        } else if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(stored)) {
          applyAccent(stored)
          setValue('Random')
        }
      }
    } catch {}
  }, [])

  const perform = (opt: string) => {
    try { localStorage.setItem(STORAGE_KEY, opt) } catch {}
    if (opt === 'Random') {
      const a = randomAccent();
      applyAccent(a);
      try { localStorage.setItem(STORAGE_KEY, a) } catch {}
      return
    }
    if (opt === 'Revert') {
      if (initialAccent) applyAccent(initialAccent);
      setValue(null);
      try { localStorage.removeItem(STORAGE_KEY) } catch {}
      return
    }
    const accent = THEMES[opt]
    if (accent) {
      applyAccent(accent)
      try { localStorage.setItem(STORAGE_KEY, opt) } catch {}
    }
  }

  const onChange = (next: string) => {
    setValue(next);
    perform(next);
  };

  return (
    <fieldset className={`action-radios ${className}`.trim()}>
      <legend className="action-radios__legend">Theme</legend>
      <div className="action-radios__list" role="radiogroup" aria-label="Theme selection">
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
