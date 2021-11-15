import React, { useState } from 'react';
import ReactModal from 'react-modal';
import fileIsJpeg from '../utils';

// import EXIF from 'exif-js';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEditClaimOpen: Function;
};

const StartClaim = ({ isOpen, toggleStartClaimOpen, toggleEditClaimOpen }: Props) => {
  const [userErrors, setUserErrors] = useState();
  const [photoFile, setPhotoFile] = useState();

  // Close StartClaim and open EditClaim
  const switchToEditClaim = () => {
    toggleStartClaimOpen();
    toggleEditClaimOpen();
    // reset state of StartClaim for next submission
    setUserErrors();
  };

  // Begin claim process
  const beginClaim = () => {
    // verify user has submitted a file
    if (photoFile) {
      if (fileIsJpeg(photoFile)) {
        switchToEditClaim();
      } else {
        setUserErrors('File is not a jpeg');
      }
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

  // Update reference for current user submitted file
  const onFileChange = (e) => {
    setPhotoFile(e.target.files[0]);
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
        <input type="file" name="start-claim__file" id="start-claim__input" accept="image/.jpeg" onChange={onFileChange} />
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
