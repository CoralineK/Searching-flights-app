import React from 'react';
import './app.scss';
import Header from './Header/Header';
import Earth from './Earth/Earth';
import SearchingCities from './SearchingComponents/SearchingCities';
import { getAirports } from './api/airports';

function App() {
  const [error, setError] = React.useState();
  const [airports, setAirports] = React.useState();

  React.useEffect(() => {
    getAirports()
      .then((res) => setAirports(res))
      .catch((err) => setError(err));
  }, []);

  if (!airports && !error) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Sorry, there has been an error</div>;
  }

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
