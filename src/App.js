import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;
