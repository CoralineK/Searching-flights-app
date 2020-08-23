import React from 'react';
import './style/searchComponents.scss';

const CityInput = ({ error, autocomplete, select, ...props }) => {
  return (
    <div className="choice__input-wrapper">
      <input
        className={`choice__city-input ${error ? 'input-error' : ''}`}
        type="text"
        {...props}
      />
      {autocomplete && (
        <div className="choice__autocomplete">
          {autocomplete.slice(0, 10).map((airport, i) => (
            <div className="location" key={i} onClick={() => select(airport)}>
              {airport.city}, {airport.country}, {airport.name} ({airport.iata})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityInput;
