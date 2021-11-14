import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import Nav from './components/Nav';
import About from './components/About';
import StartClaim from './components/StartClaim';
import EditClaim from './components/EditClaim';
import EndClaim from './components/EndClaim';

const config = require('../config');

const App = () => {
  // Whether or not About and or Claim modals are visible
  const [aboutOpen, setAboutOpen] = useState(false);
  const [startClaimOpen, setStartClaimOpen] = useState(false);
  const [editClaimOpen, setEditClaimOpen] = useState(false);
  const [endClaimOpen, setEndClaimOpen] = useState(false);

  // Toggle state of About and or Claim modals visibility
  const toggleAboutOpen = () => setAboutOpen(!aboutOpen);
  const toggleStartClaimOpen = () => setStartClaimOpen(!startClaimOpen);
  const toggleEditClaimOpen = () => setEditClaimOpen(!editClaimOpen);
  const toggleEndClaimOpen = () => setEndClaimOpen(!endClaimOpen);

  const renderModal = (openValue, modal) => {
    if (openValue) {
      return modal;
    }
  }

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
  }, []);

  return (
    <div id="apps" className="container">
      <Nav toggleAboutOpen={toggleAboutOpen} toggleStartClaimOpen={toggleStartClaimOpen} />
      <About isOpen={aboutOpen} toggleAboutOpen={toggleAboutOpen} />
      {renderModal(startClaimOpen, <StartClaim
        isOpen={startClaimOpen}
        toggleStartClaimOpen={toggleStartClaimOpen}
        toggleEditClaimOpen={toggleEditClaimOpen}
      />)}
      <EditClaim
        isOpen={editClaimOpen}
        toggleStartClaimOpen={toggleStartClaimOpen}
        toggleEditClaimOpen={toggleEditClaimOpen}
        toggleEndClaimOpen={toggleEndClaimOpen}
      />
      <EndClaim
        isOpen={endClaimOpen}
        toggleStartClaimOpen={toggleStartClaimOpen}
        toggleEndClaimOpen={toggleEndClaimOpen}
      />
      <div id="map" />
    </div>
  );
};

export default App;
