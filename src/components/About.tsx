import React, { FC } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const About: FC = ({ isOpen, toggleAboutOpen }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleAboutOpen}
      contentLabel="Example Modal"
    >
      <div>

        <h1>About Lane Claim</h1>
        <p>Lane Claim is progressive web app dedicated to protecting bike lanes from automobile obstructions.</p>
        <h3>Goals</h3>
        <ul>
          <li>To use this data to determine which bikelanes are in the most need for better protection.</li>
          <li>To potentially hold offenders accountable.</li>
        </ul>

        <h3>How To Use</h3>
        <ul>
          <li>Simply take a photo of the offending vehicle and upload it with the 'Submit New Claim' button</li>
          <li>Add any supplemental info like the offender's liscence plate or add a comment</li>
          <li>Lane Claim will place a marker at its location with its information</li>
        </ul>

        <h3>Open Source</h3>
        <ul>
          <li>Lane Claim is open source and pull requests are welcome!</li>
          <li>View the source code <a href="https://github.com/abachant/laneclaim">here</a>.</li>
        </ul>

        <h3>Submit a Bug</h3>
        <ul>
          <li><a href="mailto:laneclaim@gmail.com">Send an email</a></li>
          <li><a href="https://github.com/abachant/laneclaim/issues">Submit through GitHub</a></li>
        </ul>
        <button onClick={toggleAboutOpen}>
          Close
        </button>
        <button variant="success" onClick={() => { toggleAboutOpen(); console.log('opening...'); }}>
          Submit New Claim
        </button>
      </div>
    </ReactModal >
  );
};

export default About;
