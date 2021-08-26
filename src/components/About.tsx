import React, { FC } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const About: FC = ({ isOpen, toggleAboutOpen}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleAboutOpen}
      contentLabel="Example Modal"
    >
      <h1> tsestset</h1>
    </ReactModal>
  );
};

export default About;
