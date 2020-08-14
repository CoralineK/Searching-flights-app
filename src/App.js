import React from 'react';
import './App.scss';
import Earth from './EarthComponent/Earth';
import SearchingCities from './SearchingCompotents/SearchingCities';

function App() {
  return (
    <div className="App">
      <Earth />
      <SearchingCities />
    </div>
  );
}

export default App;
