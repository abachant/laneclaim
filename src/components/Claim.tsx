import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleClaimOpen: Function;
};

const Claim = ({ isOpen, toggleClaimOpen }: Props) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleClaimOpen}
    contentLabel="Claim Modal"
    className="modal__content"
  >
    <div>
      <h2>Submit New Claim</h2>
      <h6>Upload a photo of a vehicle obstructing a bike lane</h6>
      <input type="file" name="claim-file" id="photo-file-input" accept="image/.jpeg" />
      <p>File must be a jpeg with exif data</p>
      <button type="button" onClick={toggleClaimOpen}>
        Close
      </button>
      <button type="button" onClick={toggleClaimOpen}>
        Next
      </button>
    </div>
  </ReactModal>
);

export default Claim;
