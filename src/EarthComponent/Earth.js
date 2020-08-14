import React from 'react';
import ReactGlobe from 'react-globe';
import './earth.scss';
import globeTexture from '../imgs/globe3.png';

const Earth = () => {
  return (
    <div className="globe-container">
      <ReactGlobe
        width="600px"
        height="600px"
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
            city: 'Barcelona',
            color: 'red',
            coordinates: [41.346176, 2.168365],
            value: 50,
          },
          {
            id: 'marker2',
            city: 'New York',
            color: 'red',
            coordinates: [40.73061, -73.935242],
            value: 50,
          },
        ]}
      />
    </div>
  );
};

export default Earth;
