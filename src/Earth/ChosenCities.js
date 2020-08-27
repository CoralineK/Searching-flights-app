import React from 'react';
import './style/chosen.scss';
import Earth from './Earth';
import Weather from '../Weather/Weather';

const ChosenCities = ({ fromCity, toCity, onBack, location }) => {
  return (
    <>
      <div className="search-container">
        <div className="search-container__inside">
          <div className="chosen">
            <div className="chosen__describ">
              <p>FROM: </p>
              <div>{fromCity}</div>
            </div>
            <div className="chosen__describ">
              <p>TO: </p>
              <div>{toCity}</div>
            </div>
          </div>
          <div>
            <input
              onClick={onBack}
              className="confirm"
              type="button"
              value="Change cities"
            />
          </div>
        </div>
        <div className="globe-container">
          <Earth location={location} fromCity={fromCity} toCity={toCity} />
          <Weather location={location} />
        </div>
      </div>
    </>
  );
};

export default ChosenCities;
