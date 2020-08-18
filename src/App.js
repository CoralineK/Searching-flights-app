import React from 'react';
import './style/app.scss';
import Header from './Header/Header';
import Earth from './Earth/Earth';
import SearchingCities from './searchComponents/SearchingCities';

function App() {
  return (
    <div className="app">
      <Header />
      <div id="search" className="search-container">
        <Earth />
        <SearchingCities />
      </div>
    </div>
  );
}

export default App;
