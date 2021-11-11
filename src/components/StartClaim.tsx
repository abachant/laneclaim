import React, { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEditClaimOpen: Function;
};

const StartClaim = ({ isOpen, toggleStartClaimOpen, toggleEditClaimOpen }: Props) => {
  const [userErrors, setUserErrors] = useState();

  // Close StartClaim and open EditClaim
  const switchToEditClaim = () => {
    toggleStartClaimOpen();
    toggleEditClaimOpen();
    // reset state of StartClaim for next submission
    setUserErrors();
  };

  // Begin claim process
  const beginClaim = () => {
    const fileInput = document.getElementById('start-claim__input');
    const file = fileInput.files[0];
    // verify user has submitted a file
    if (file) {
      switchToEditClaim();
    } else {
      setUserErrors('Please add a photo before proceeding');
    }
  };

  // Render an error message for the user's unnacceptable file input
  const renderErrorMessage = () => {
    if (userErrors) {
      return <div className="user-error">{userErrors}</div>;
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
        {renderErrorMessage()}
        <p>File must be a jpeg with exif data</p>
        <button type="button" onClick={toggleStartClaimOpen}>
          Close
        </button>
        <button type="button" onClick={beginClaim}>
          Next
        </button>
      </div>
    </ReactModal>
  );
};

export default StartClaim;
