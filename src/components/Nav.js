import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isLibOpen, setIsLibOpen }) => {
  //handlers
  const handleLibClick = () => {
    setIsLibOpen((isLibOpen) => !isLibOpen);
  };

  return (
    <div>
      <nav>
        <h1>Waves</h1>
        <button onClick={handleLibClick}>
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
