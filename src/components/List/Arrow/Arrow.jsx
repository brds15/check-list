import React from 'react';
import arrowDown from '../../../assets/down.svg';
import arrowUp from '../../../assets/up.svg';
import './Arrow.scss';

export default function Arrow({ handleCollapse, isCollapsed, id }) {
  return (
    <div className="Arrow" onClick={() => handleCollapse(isCollapsed, id)}>
      <img src={isCollapsed ? arrowDown : arrowUp} alt={'arrow'} className="Arrow-img" />
    </div>
  );
}
