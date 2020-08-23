import React from 'react';
import './style/app.scss';
import Header from './Header/Header';

import SearchingCities from './searchComponents/SearchingCities';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchingCities />
    </div>
  );
}

export default App;
