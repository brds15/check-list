import React from 'react';
import Row from './Row/Row';

export default function List({ allItems = [], handleChildren, handleCheckStatus }) {
  const buildRowItem = allItems => {
    const level0Items = allItems.filter(item => item.level === 0);
    return level0Items.map(item => {
      const {
        name = '',
        id = '',
        level = null,
        isChecked = false,
        isCollapsed = false,
        fatherId = ''
      } = item || {};
      return (
        <Row
          key={id}
          id={id}
          name={name}
          isChecked={isChecked}
          isCollapsed={isCollapsed}
          fatherId={fatherId}
          level={level}
          handleChildren={handleChildren}
          handleCheckStatus={handleCheckStatus}
        />
      );
    });
  };

  return <ul className="App-content-list">{allItems && buildRowItem(allItems)}</ul>;
}
