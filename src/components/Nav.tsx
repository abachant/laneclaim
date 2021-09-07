import React, { FC } from 'react';

const Nav: FC = ({ toggleAboutOpen }) => {
  return (
    <nav className="nav">
      <h2 className="nav__item" >Laneclaim</ h2>
      <div className="nav__list">
        <div className="nav__item nav__item--link" onClick={toggleAboutOpen}>about</div>
        <button className="nav__item" type="button">Submit New Claim</button>
      </div>
    </nav>
  );
};

export default Nav;
