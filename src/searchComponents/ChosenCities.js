import React, { useState } from 'react';
import './style/searchComponents.scss';
import CityInput from './CityInput';

const ChosenCities = ({ from, to, onBack }) => {
  return (
    <div className="choice">
      <div className="choice__describ">
        <p>FROM:</p>
        <CityInput value={from}/>
      </div>
      <div className="choice__describ">
        <p>TO:</p>
        <CityInput value={to} />
      </div>
      <input
        onClick={onBack}
        className="choice__confirm"
        type="button"
        value="Do you want to change cities?"
      />
    </div>
  );
};

export default ChosenCities;
