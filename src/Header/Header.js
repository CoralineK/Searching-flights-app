import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const iconStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <div className="header">
      <h1 className="header__title">
        Find your perfect connection with the world!
      </h1>
      <a href="#search">
        <div className="header__arrow">
          <FontAwesomeIcon style={iconStyle} icon={faChevronCircleDown} />
        </div>
      </a>
    </div>
  );
};

export default Header;
