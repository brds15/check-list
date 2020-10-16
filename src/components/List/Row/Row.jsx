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
  handleChildren,
  handleCheckStatus
}) {
  return (
    <li className="Row">
      <Checkbox
        isChecked={isChecked}
        handleChildren={handleChildren}
        id={id}
        handleCheckStatus={handleCheckStatus}
      >
        {name}
      </Checkbox>
      {!fatherId && <Arrow />}
    </li>
  );
}
