import React, { FC, useEffect } from 'react';
import L from 'leaflet';
import Nav from './components/Nav';

const config = require('../config');

const App: FC = () => {
  useEffect(() => {
    // initialize primary map
    const primaryMap = L.map('map').setView([39.8283, -98.5795], 5);

    // Add tiles to primary map
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: config.leafletToken,
    }).addTo(primaryMap);
  });

  return (
    <div id="app" className="container">
      <Nav />
      <div id="map" />
    </div>
  );
};

export default App;
