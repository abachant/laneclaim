import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEndClaimOpen: Function;
};

const EndClaim = ({ isOpen, toggleStartClaimOpen, toggleEndClaimOpen }: Props) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleEndClaimOpen}
    contentLabel="Completed Claim Modal"
    className="modal"
  >
    <div>
      <h2 className="modal__title">Claim submitted</h2>
      <button type="button" onClick={toggleEndClaimOpen}>
        Exit
      </button>
      <button type="button" onClick={() => { toggleEndClaimOpen(); toggleStartClaimOpen(); }}>
        Submit another Claim
      </button>
    </div>

  </ReactModal>
);

export default EndClaim;
