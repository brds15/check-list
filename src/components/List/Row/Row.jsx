import React from 'react';
import Checkbox from '../../Checkbox/index';
import Arrow from '../Arrow/Arrow';
import './Row.scss';

export default function Row({
  name = '',
  id = '',
  isChecked = false,
  isCollapsed = false,
  fatherId = '',
  handleChildren,
  handleCollapse
}) {
  return (
    <li className="Row">
      <Checkbox isChecked={isChecked} handleChildren={handleChildren} id={id}>
        {name}
      </Checkbox>
      {!fatherId && (
        <Arrow handleCollapse={handleCollapse} isCollapsed={isCollapsed} id={id} />
      )}
    </li>
  );
}
