import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  //   TODO: Replace with search icons
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Google"
          />
          <div className="search-icons">
            <img src="" alt="Microphone Icon" />
            <img src="" alt="Google Lens Icon" />
          </div>
        </div>
        <div className="search-buttons">
          <button type="submit">Google Search</button>
          <button type="button" onClick={() => alert("I'm Feeling Lucky!")}>I'm Feeling Lucky</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
