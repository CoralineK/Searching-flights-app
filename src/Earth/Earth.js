import React, { useState } from 'react';
import './style/chosen.scss';
import Globe from './Globe';
import Loader from './Loader';

const Earth = ({ location }) => {
  const [loader, setLoader] = useState(true);

  return (
    <div className="earth-container">
      <Globe onLoaded={() => setLoader(false)} location={location} />
      {loader && <Loader />}
    </div>
  );
};

export default Earth;
