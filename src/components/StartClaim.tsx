import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEditClaimOpen: Function;
};

const StartClaim = ({ isOpen, toggleStartClaimOpen, toggleEditClaimOpen }: Props) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleStartClaimOpen}
    contentLabel="Upload Claim Modal"
    className="modal"
  >
    <div>
      <h2 className="modal__title">Submit New Claim</h2>
      <h6>Upload a photo of a vehicle obstructing a bike lane</h6>
      <input type="file" name="start-claim__file" id="start-claim__input" accept="image/.jpeg" />
      <p>File must be a jpeg with exif data</p>
      <button type="button" onClick={toggleStartClaimOpen}>
        Close
      </button>
      <button type="button" onClick={() => { toggleStartClaimOpen(); toggleEditClaimOpen(); }}>
        Next
      </button>
    </div>
  </ReactModal>
);

export default StartClaim;
