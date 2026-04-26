import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import Button from '../../atoms/Button/Button';

export type CarouselProps = {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
};

const Carousel = ({ children, className = '', showDots = true, showArrows = true }: CarouselProps) => {
  const items = React.Children.toArray(children);
  const count = items.length;
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count]);

  useEffect(() => {
    // keep focusable item in view for screen readers
    const node = trackRef.current?.children[index] as HTMLElement | undefined;
    if (node) node.setAttribute('tabindex', '0');
    // remove tabindex from others
    Array.from(trackRef.current?.children || []).forEach((c, i) => {
      if (i !== index) (c as HTMLElement).removeAttribute('tabindex');
    });
  }, [index]);

  return (
    <div className={`carousel ${className}`.trim()}>
      <div className="carousel__viewport" role="region" aria-roledescription="carousel" aria-label="Featured items">
        <div className="carousel__track" ref={trackRef} style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((child, i) => (
            <div className="carousel__slide" aria-hidden={i !== index} key={i}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel__controls">
        {showArrows && (
          <>
            <Button variant="ghost" onClick={prev} aria-label="Previous">‹</Button>
            <Button variant="ghost" onClick={next} aria-label="Next">›</Button>
          </>
        )}
      </div>

      {showDots && (
        <div className="carousel__dots" role="tablist" aria-label="Carousel pagination">
          {items.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
      )}

      <div className="sr-only" aria-live="polite">
        {`${index + 1} of ${count}`}
      </div>
    </div>
  );
};

export default Carousel;
