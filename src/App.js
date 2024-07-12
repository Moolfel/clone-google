import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);

  const fetchResults = async (query) => {
    // TODO: Fix URL issue
    const response = await fetch(`https://test.com/search?q=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
      // TODO: Replace with Google dark logo
        <img src="/google-logo.png" alt="Google Logo" className="google-logo" />
        <SearchBar onSearch={fetchResults} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
