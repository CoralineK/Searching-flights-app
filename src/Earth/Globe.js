import React, { useState, useEffect } from 'react';
import ReactGlobe from 'react-globe';
import './style/chosen.scss';
import globeTexture from '../images/imgs/globe3.png';

const Globe = ({ onLoaded, location, fromCity, toCity }) => {
  const [texture, setTexture] = useState(true);
  const [clouds, setClouds] = useState(true);

  const locFrom = location[0].map((e) => parseFloat(e));
  const locTo = location[1].map((e) => parseFloat(e));

  // Drawing path
  const dLat = Math.abs(locFrom[0] - locTo[0]);
  const dLong = Math.abs(locFrom[1] - locTo[1]);

  let numPoints = 0;
  if (dLong > dLat) {
    numPoints = Math.round(dLong);
  } else {
    numPoints = Math.round(dLat);
  }

  const partOfLat = dLat / numPoints;
  const partOfLong = dLong / numPoints;
  const arr1 = [];
  const arr2 = [];
  const points = [];

  for (let i = partOfLat; i < dLat; i = i + partOfLat) {
    locFrom[0] > locTo[0]
      ? arr1.push(locFrom[0] - i)
      : arr1.push(locFrom[0] + i);
  }
  for (let i = partOfLong; i < dLong; i = i + partOfLong) {
    locFrom[1] > locTo[1]
      ? arr2.push(locFrom[1] - i)
      : arr2.push(locFrom[1] + i);
  }

  if (arr1 < arr2) {
    arr1.map((_, i) => {
      points.push({
        id: `${i}`,
        color: 'black',
        coordinates: [arr1[i], arr2[i]],
        value: 1,
      });
    });
  } else {
    arr2.map((_, i) => {
      points.push({
        id: `${i}`,
        color: 'black',
        coordinates: [arr1[i], arr2[i]],
        value: 1,
      });
    });
  }
  // end

  const arrCities = [fromCity.split(','), toCity.split(',')];

  const markersOnGlobe = {
    from: arrCities[0].splice(0, 2).toString(','),
    to: arrCities[1].splice(0, 2).toString(','),
  };

  useEffect(() => {
    if (!texture && !clouds) {
      onLoaded();
    }
  }, [texture, clouds]);

  const markerCallback = (marker, markerObject, event) => {};

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
        markerTooltipRenderer: (marker) => {
          if (
            locFrom[0] === marker.coordinates[0] &&
            locFrom[1] === marker.coordinates[1]
          ) {
            return markersOnGlobe.from;
          } else if (
            locTo[0] === marker.coordinates[0] &&
            locTo[1] === marker.coordinates[1]
          ) {
            return markersOnGlobe.to;
          }
        },
      }}
      onMouseOverMarker={markerCallback}
      markers={[
        {
          id: 'city1',
          color: 'yellow',
          coordinates: locFrom,
          value: 50,
        },
        {
          id: 'city2',
          color: 'red',
          coordinates: locTo,
          value: 50,
        },
        ...points,
      ]}
    />
  );
};

export default Globe;
