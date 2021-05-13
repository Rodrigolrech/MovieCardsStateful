import React from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar movies={ movies } />
    </div>
  );
}

export default App;
