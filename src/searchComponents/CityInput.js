import React from 'react';
import './style/searchComponents.scss';

const CityInput = (props) => {
  return (
    <>
      <input className="choice__city" type="text" {...props} />
    </>
  );
};

export default CityInput;
