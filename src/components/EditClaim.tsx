import React from 'react';
import ReactModal from 'react-modal';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEditClaimOpen: Function;
  toggleEndClaimOpen: Function;
};

const EditClaim = (
  {
    isOpen, toggleStartClaimOpen, toggleEditClaimOpen, toggleEndClaimOpen,
  }: Props,
) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleEditClaimOpen}
    contentLabel="Edit Claim Modal"
    className="modal"
  >
    <div>
      <h2 className="modal__title">Verify Claim Details</h2>
      <MapContainer id="edit-claim__map" center={[39.8283, -98.5795]} zoom={17}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[39.8283, -98.5795]} />
      </MapContainer>
      <h6>Add relevant information for your claim</h6>
      <button type="button" onClick={() => { toggleEditClaimOpen(); toggleStartClaimOpen(); }}>
        Back
      </button>
      <button type="button" onClick={() => { toggleEditClaimOpen(); toggleEndClaimOpen(); }}>
        Submit
      </button>
    </div>
  </ReactModal>
);

export default EditClaim;
