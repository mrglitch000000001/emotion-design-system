import React, { useState } from 'react';
import './SearchBar.css';
import Button from '../../atoms/Button/Button';

export type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
};

const SearchBar = ({ placeholder = 'Search...', onSearch, className = '' }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query.trim());
  };

  return (
    <form className={`searchbar ${className}`.trim()} role="search" onSubmit={handleSubmit} aria-label="Site search">
      <label htmlFor="site-search" className="sr-only">Search</label>
      <div className="searchbar__input-wrap">
        <input
          id="site-search"
          className="searchbar__input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label="Search"
        />
      </div>

      <Button type="submit" className="searchbar__button" variant="primary" aria-label="Search">
        🔍
      </Button>
    </form>
  );
};

export default SearchBar;
