import React, { useState } from 'react';
import './style/searchComponents.scss';
import ChosenCities from './ChosenCities';
import CityInput from './CityInput';

const SearchingCities = () => {
  const [chosen, setChosen] = useState(false);
  const [trip, setTrip] = useState({
    from: '',
    to: '',
  });

  const handleClick = (e) => {
    e.preventDefault();
    setChosen(true);
  };

  if (chosen) {
    return (
      <ChosenCities
        from={trip.from}
        to={trip.to}
        onBack={() => setChosen(false)}
      />
    );
  }

  return (
    <div className="choice" onSubmit={handleClick}>
      <CityInput
        placeholder="From where do you start your advnture?"
        value={trip.from}
        onChange={(e) => setTrip({ ...trip, from: e.target.value })}
      />

      <CityInput
        placeholder="Where do you want to go?"
        value={trip.to}
        onChange={(e) => setTrip({ ...trip, to: e.target.value })}
      />
      <input
        onClick={handleClick}
        className="choice__confirm"
        type="button"
        value="Choose"
      />
    </div>
  );
};

export default SearchingCities;
