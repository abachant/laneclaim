import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
};

const StartClaim = ({ isOpen, toggleStartClaimOpen }: Props) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleStartClaimOpen}
    contentLabel="Upload Claim Modal"
    className="modal"
  >
    <div>
      <h2 className="modal__title">Submit New Claim</h2>
      <h6>Upload a photo of a vehicle obstructing a bike lane</h6>
      <input type="file" name="claim-file" id="photo-file-input" accept="image/.jpeg" />
      <p>File must be a jpeg with exif data</p>
      <button type="button" onClick={toggleStartClaimOpen}>
        Close
      </button>
      <button type="button" onClick={toggleStartClaimOpen}>
        Next
      </button>
    </div>
  </ReactModal>
);

export default StartClaim;
