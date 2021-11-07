import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEditClaimOpen: Function;
};

const EditClaim = ({ isOpen, toggleStartClaimOpen, toggleEditClaimOpen }: Props) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={toggleEditClaimOpen}
    contentLabel="Edit Claim Modal"
    className="modal"
  >
    <div>
      <h2 className="modal__title">Verify Claim Details</h2>
      <h6>Add relevant information for your claim</h6>
      <button type="button" onClick={() => { toggleEditClaimOpen(); toggleStartClaimOpen(); }}>
        Back
      </button>
      <button type="button" onClick={toggleEditClaimOpen}>
        Submit
      </button>
    </div>

  </ReactModal>
);

export default EditClaim;
