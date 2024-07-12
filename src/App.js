import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [setResults] = useState([]);

  // TODO: Fix URL issue
  const fetchResults = async (query) => {
    const response = await fetch(`https://test.com/search?q=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  // TODO: Replace with Google dark logo
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <img src="/google-logo.png" alt="Google Logo" className="google-logo" />
        <SearchBar onSearch={fetchResults} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
