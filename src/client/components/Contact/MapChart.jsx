import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers = [
  {
    markerOffset: -30,
    name: 'Zamboanga City',
    coordinates: [122.079, 6.9214],
  },
];

const MapChart = () => {
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [-120.0, -10, 0],
        scale: 1500,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill='#222'
              stroke='#d55c15'
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill='none'
            stroke='#912127'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            transform='translate(-12, -24)'
          >
            <circle cx='12' cy='10' r='3' />
            <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
          </g>
          <text
            textAnchor='middle'
            y={markerOffset}
            style={{ fontFamily: 'system-ui', fill: '#fff' }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
