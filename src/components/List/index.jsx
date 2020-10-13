import React from 'react';
import Checkbox from '../Checkbox/index';
import Arrow from './Arrow';
import './List.scss';

export default function () {
  return (
    <ul className="List">
      <li>
        <Checkbox>Richard Paul M.</Checkbox>
        <Arrow />
      </li>
    </ul>
  );
}
