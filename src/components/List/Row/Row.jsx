import React from 'react';
import Checkbox from '../../Checkbox/index';
import Arrow from '../Arrow/Arrow';
import './Row.scss';

export default function Row({ name = '' }) {
  return (
    <li className="Row">
      <Checkbox>{name}</Checkbox>
      <Arrow />
    </li>
  );
}
