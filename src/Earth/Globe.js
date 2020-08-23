import React, { useState, useEffect } from 'react';
import ReactGlobe from 'react-globe';
import './style/chosen.scss';
import globeTexture from '../images/imgs/globe3.png';

const Globe = ({ onLoaded, location }) => {
  const [texture, setTexture] = useState(true);
  const [clouds, setClouds] = useState(true);

  const locFrom = location[0].map((e) => parseFloat(e));
  const locTo = location[1].map((e) => parseFloat(e));

  useEffect(() => {
    if (!texture && !clouds) {
      onLoaded();
      
    }
  }, [texture, clouds]);

  return (
    <ReactGlobe
      width="600px"
      height="600px"
      onGlobeTextureLoaded={() => setTexture(false)}
      onGlobeCloudsTextureLoaded={() => setClouds(false)}
      globeBackgroundTexture="none"
      globeTexture={globeTexture}
      options={{
        enableCameraZoom: false,
        ambientLightIntensity: 0.6,
        ambientLightColor: '#dbcca0',
      }}
      markers={[
        {
          id: 'marker1',
          color: 'red',
          coordinates: locFrom,
          value: 50,
        },
        {
          id: 'marker2',
          color: 'red',
          coordinates: locTo,
          value: 50,
        },
      ]}
    />
  );
};

export default Globe;
