import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEditClaimOpen: Function;
};

const StartClaim = ({ isOpen, toggleStartClaimOpen, toggleEditClaimOpen }: Props) => {
  const switchToEditClaim = () => {
    toggleStartClaimOpen();
    toggleEditClaimOpen();
  };

  const startClaim = () => {
    const fileInput = document.getElementById('start-claim__input');
    const file = fileInput.files[0];
    if (file) {
      switchToEditClaim();
    } else {
      alert('Please add a photo')
    }
  };

  return (
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
        <button type="button" onClick={startClaim}>
          Next
        </button>
      </div>
    </ReactModal>
  );
}

export default StartClaim;
