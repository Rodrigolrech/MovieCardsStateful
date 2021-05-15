import React from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import movies from './data';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar movies={ movies } />
      <AddMovie onClick="funcao" />
    </div>
  );
}

export default App;
