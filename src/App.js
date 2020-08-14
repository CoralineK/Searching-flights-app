import React from 'react';
import './app.scss';
import Header from './Header/Header';
import Earth from './EarthComponent/Earth';
import SearchingCities from './SearchingComponents/SearchingCities';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="search-container">
        <Earth />
        <SearchingCities />
      </div>
    </div>
  );
}

export default App;