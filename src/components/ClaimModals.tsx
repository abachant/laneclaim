import React from 'react';
import StartClaim from './StartClaim';
import EditClaim from './EditClaim';
import EndClaim from './EndClaim';

type Props = {
  startClaimOpen: boolean;
  editClaimOpen: boolean;
  endClaimOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEditClaimOpen: Function;
  toggleEndClaimOpen: Function;
};

const ClaimModals = (
  {
    startClaimOpen,
    editClaimOpen,
    endClaimOpen,
    toggleStartClaimOpen,
    toggleEditClaimOpen,
    toggleEndClaimOpen,

  }: Props,
) => {
  const startClaim = (
    <StartClaim
      isOpen={startClaimOpen}
      toggleStartClaimOpen={toggleStartClaimOpen}
      toggleEditClaimOpen={toggleEditClaimOpen}
    />
  );

  const editClaim = (
    <EditClaim
      isOpen={editClaimOpen}
      toggleStartClaimOpen={toggleStartClaimOpen}
      toggleEditClaimOpen={toggleEditClaimOpen}
      toggleEndClaimOpen={toggleEndClaimOpen}
    />
  );

  const endClaim = (
    <EndClaim
      isOpen={endClaimOpen}
      toggleStartClaimOpen={toggleStartClaimOpen}
      toggleEndClaimOpen={toggleEndClaimOpen}
    />
  );

  const renderModal = (openValue: boolean, modal: Object) => {
    if (openValue) {
      return modal;
    }
  };

  return (
    <>
      {renderModal(startClaimOpen, startClaim)}
      {renderModal(editClaimOpen, editClaim)}
      {renderModal(endClaimOpen, endClaim)}
    </>
  );
};

export default ClaimModals;
