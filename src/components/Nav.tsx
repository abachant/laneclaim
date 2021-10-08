import React from 'react';

const Nav = ({ toggleAboutOpen, toggleClaimOpen }) => (
  <nav className="nav">
    <h2 className="nav__item">Laneclaim</h2>
    <div className="nav__list">
      <div
        className="nav__item nav__item--link"
        role="button"
        onClick={toggleAboutOpen}
        tabIndex={0}
        onKeyDown={toggleAboutOpen}
      >
        about
      </div>
      <button
        className="nav__item"
        type="button"
        onClick={toggleClaimOpen}
        tabIndex={0}
        onKeyDown={toggleClaimOpen}
      >
        Submit New Claim
      </button>
    </div>
  </nav>
);

export default Nav;
