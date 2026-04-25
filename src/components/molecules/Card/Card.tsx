import React from 'react';
import './Card.css';

export type CardProps = {
  title: string;
  description?: string;
  cta?: string;
};

// Atomic Level: Molecule
// Path: src/components/molecules/Card/Card.tsx
// Justification: A Card composes smaller atoms (heading, paragraph, button)
// into a reusable UI block; it is a Molecule by Atomic Design.

const Card: React.FC<CardProps> = ({ title, description, cta = 'Learn more' }) => {
  return (
    <article className="card">
      <header className="card__header">
        <div className="card__eyebrow">New</div>
        <h3 className="card__title">{title}</h3>
      </header>

      <div className="card__media" aria-hidden="true"></div>

      <div className="card__body">
        <p className="card__description">{description}</p>
      </div>

      <footer className="card__footer">
        <button className="card__cta" type="button">{cta}</button>
      </footer>
    </article>
  );
};

export default Card;
