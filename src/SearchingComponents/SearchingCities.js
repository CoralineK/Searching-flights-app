import React, { useState } from 'react';
import './searchingCities.scss';

const SearchingCities = () => {
  // const API = 
  const [trip, setTrip] = useState({
    from: '',
    to: '',
  });

  const handleSubmit = () => {
    console.log(trip);
  };

  return (
    <form className="choice" onSubmit={handleSubmit}>
      <input
        className="choice__city"
        type="text"
        placeholder="From where do you start your advnture?"
        value={trip.from}
        onChange={(e) => setTrip({ ...trip, from: e.target.value })}
      ></input>

      <input
        className="choice__city"
        type="text"
        placeholder="Where do you want to go?"
        value={trip.to}
        onChange={(e) => setTrip({ ...trip, to: e.target.value })}
      ></input>

      <input className="choice__confirm" type="submit" value="Choose" />
    </form>
  );
};

export default SearchingCities;


