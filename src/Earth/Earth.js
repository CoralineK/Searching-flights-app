import React, { useState } from 'react';
import './style/chosen.scss';
import Globe from './Globe';
import Loader from './Loader';

const Earth = ({ location, fromCity, toCity, }) => {
  const [loader, setLoader] = useState(true);

  return (
    <div className="earth-container">
      <Globe
        onLoaded={() => setLoader(false)}
        location={location}
        fromCity={fromCity}
        toCity={toCity}
      />
      {loader && <Loader />}
    </div>
  );
};

export default Earth;
