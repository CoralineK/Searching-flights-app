import React from 'react';
import './style/loader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  const compassStyle = {
    color: '#116466',
    width: '100px',
    height: '100px',
  };
  return (
    <div className="loader-container">
      <div className="loading-spinner">
        <FontAwesomeIcon style={compassStyle} icon={faCompass} />
      </div>
    </div>
  );
};

export default Loader;
