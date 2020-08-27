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
      <h1 className="title">
        <p>comfortable</p>
        <p className="title__accent">traveling</p>
        <p>fly wherever you want</p>
      </h1>

      <div className="start">
        <p>Let's start!</p>
        <a href="#search">
          <div className="arrow">
            <FontAwesomeIcon style={iconStyle} icon={faChevronCircleDown} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
