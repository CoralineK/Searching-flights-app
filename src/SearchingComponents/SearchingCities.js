import React from 'react';
import './searchingCities.scss';

const SearchingCities = () => {
  return (
    <div className="choice">
      <input
        className="choice__city"
        placeholder="From where do you start your advnture?"
      ></input>

      <input
        className="choice__city"
        placeholder="Where do you want to go?"
      ></input>

      <button className="choice__confirm" type="submit">
        Choose
      </button>
    </div>
  );
};

export default SearchingCities;
