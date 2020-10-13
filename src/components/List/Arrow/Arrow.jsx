import React from 'react';
import arrowDown from '../../../assets/down.svg';
import arrowUp from '../../../assets/up.svg';
import './Arrow.scss';

export default function Arrow({ type }) {
  return (
    <div className="Arrow">
      <img
        src={type && type === 'arrowDown' ? arrowDown : arrowUp}
        alt={'arrow'}
        className="Arrow-img"
      />
    </div>
  );
}
