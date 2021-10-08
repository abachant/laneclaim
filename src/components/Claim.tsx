import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const Claim = ({ isOpen, toggleClaimOpen }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleClaimOpen}
    contentLabel="Claim Modal"
    className="modal__content"
  >
    <div>
      <button type="button" onClick={toggleClaimOpen}>
        Close
      </button>
    </div>
  </ReactModal>
);

export default Claim;
