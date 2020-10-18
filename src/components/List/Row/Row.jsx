import React from 'react';
import Checkbox from '../../Checkbox/index';
import Arrow from '../Arrow/Arrow';
import './Row.scss';

export default function Row({
  name = '',
  id = '',
  level = null,
  isChecked = false,
  isCollapsed = false,
  fatherId = '',
  handleChildren
}) {
  return (
    <li className="Row">
      <Checkbox isChecked={isChecked} handleChildren={handleChildren} id={id}>
        {name}
      </Checkbox>
      {!fatherId && <Arrow />}
    </li>
  );
}
