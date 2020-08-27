import React, { useState } from 'react';
import aviation from 'simple-aviation-api';
import './style/searchComponents.scss';
import ChosenCities from '../Earth/ChosenCities';
import CityInput from './CityInput';

const { airports } = aviation.getAllData();

const getAirportsByCityName = (name) => {
  name = name.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return airports.filter((airport) => name && airport.city.startsWith(name));
};

const SearchingCities = () => {
  const [chosen, setChosen] = useState(false);
  const [errorFrom, setErrorFrom] = useState(false);
  const [errorTo, setErrorTo] = useState(false);
  const [city, setCity] = useState({ from: '', to: '' });
  const [locationFrom, setLocationFrom] = useState({ long: 0, lat: 0 });
  const [locationTo, setLocationTo] = useState({ long: 0, lat: 0 });

  const submit = (e) => {
    e.preventDefault();
    if (city.from !== '' && city.to !== '') {
      setChosen(true);
    } else {
      city.from === '' && setErrorFrom(true);
      city.to === '' && setErrorTo(true);
    }
  };

  const onBack = () => {
    setChosen(false);
    setErrorFrom(false);
    setErrorTo(false);
  };

  const handleFromClick = (airport) => {
    setCity({
      ...city,
      from: `${airport.city}, ${airport.country}, ${airport.name} (${airport.iata})`,
    });
    setLocationFrom({ long: airport.longitude, lat: airport.latitude });
  };

  const handleToClick = (airport) => {
    setCity({
      ...city,
      to: `${airport.city}, ${airport.country}, ${airport.name} (${airport.iata})`,
    });
    setLocationTo({ long: airport.longitude, lat: airport.latitude });
  };

  if (chosen) {
    return (
      <ChosenCities
        fromCity={city.from}
        toCity={city.to}
        onBack={onBack}
        location={[
          [locationFrom.lat, locationFrom.long],
          [locationTo.lat, locationTo.long],
        ]}
      />
    );
  }

  return (
    <div id="search" className="choice" onSubmit={submit}>
      <p>From where do you start your advnture?</p>
      <CityInput
        placeholder="Type name of city"
        value={city.from}
        onChange={(e) => setCity({ ...city, from: e.target.value })}
        error={errorFrom}
        autocomplete={getAirportsByCityName(city.from)}
        select={handleFromClick}
      />

      <p>Where do you want to go?</p>
      <CityInput
        placeholder="Type name of city"
        value={city.to}
        onChange={(e) => setCity({ ...city, to: e.target.value })}
        error={errorTo}
        autocomplete={getAirportsByCityName(city.to)}
        select={handleToClick}
      />
      <input
        onClick={submit}
        className="choice__confirm"
        type="button"
        value="Choose"
      />
      {errorFrom || errorTo ? <div className="error">Enter data!</div> : null}
    </div>
  );
};

export default SearchingCities;
