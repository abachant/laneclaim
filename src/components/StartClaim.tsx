import EXIF from 'exif-js';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { fileIsJpeg, parseDMS } from '../utils';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEditClaimOpen: Function;
  setGPSData: Function;
  gpsData: any;
};

const StartClaim = ({
  isOpen, toggleStartClaimOpen, toggleEditClaimOpen, gpsData, setGPSData,
}: Props): any => {
  const [userErrors, setUserErrors] = useState();
  const [photoFile, setPhotoFile] = useState();

  // Close StartClaim and open EditClaim
  const switchToEditClaim = (): void => {
    toggleStartClaimOpen();
    toggleEditClaimOpen();
    // reset for next submission
    setUserErrors();
  };

  // Render an error message for the user's unnacceptable file input
  const renderErrorMessage = () => {
    if (userErrors) {
      return <div className="user-error">{userErrors}</div>;
    }
  };

  // Update reference for current user submitted file
  const onFileChange = (e): void => {
    setPhotoFile(e.target.files[0]);
  };

  const getExif = () => new Promise((resolve, reject) => {
    let exifData;
    EXIF.getData(photoFile, function () {
      const allMetaData = EXIF.getAllTags(this);
      const {
        GPSLatitude, GPSLatitudeRef, GPSLongitude, GPSLongitudeRef,
      } = allMetaData;
      if (GPSLatitude && GPSLatitudeRef && GPSLongitude && GPSLongitudeRef) {
        exifData = {
          GPSLatitude, GPSLatitudeRef, GPSLongitude, GPSLongitudeRef,
        };
        resolve(exifData);
      } else {
        reject(new Error('No exif data found'));
      }
    });
  });

  const beginClaim = async () => {
    // verify user has submitted a file
    if (photoFile) {
      if (fileIsJpeg(photoFile)) {
        // getExif().then(switchToEditClaim);
        try {
          const exifDMS = await getExif();
          if (exifDMS) {
            const exifGPS = parseDMS(exifDMS);
            setGPSData(exifGPS);
            setUserErrors();
            switchToEditClaim();
          } else {
            setUserErrors('File does not contain any location exif data');
          }
        } catch (error) {
          // console.error(error);
          setUserErrors('File does not contain exif data');
        }
      } else {
        setUserErrors('File is not a jpeg');
      }
    } else {
      setUserErrors('Please add a photo before proceeding');
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
