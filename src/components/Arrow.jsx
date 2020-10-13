import React from 'react';
import arrowDown from '../assets/down.svg';
import arrowUp from '../assets/up.svg';

export default function Arrow({ type }) {
  return (
    <img
      src={type && type === 'arrowDown' ? arrowDown : arrowUp}
      alt={'arrow'}
      style={{ width: 20 }}
    />
  );
}
