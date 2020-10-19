import React from 'react';
import Checkbox from '../../Checkbox/index';
import Arrow from '../Arrow/Arrow';
import './Row.scss';

export default function Row({
  name = '',
  id = '',
  isChecked = false,
  isCollapsed = false,
  hasChildren = false,
  level = null,
  handleChildren,
  handleCollapse
}) {
  return (
    <li className="Row">
      <div className={`Row-level Row-level-${level}`}>
        <Checkbox isChecked={isChecked} handleChildren={handleChildren} id={id}>
          {name}
        </Checkbox>
      </div>
      {hasChildren && <Arrow handleCollapse={handleCollapse} isCollapsed={isCollapsed} id={id} />}
    </li>
  );
}
