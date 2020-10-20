import React from 'react';
import Row from './Row/Row';

export default function List({ handleChildren, handleCollapse, showList = [] }) {
  const buildRowItem = () => {
    return showList.map(item => {
      const {
        id = '',
        name = '',
        isChecked = false,
        isCollapsed = false,
        fatherId = '',
        hasChildren = false,
        isShowing = false,
        level = 0
      } = item || {};

      if (isShowing) {
        return (
          <Row
            key={id}
            id={id}
            name={name}
            isChecked={isChecked}
            isCollapsed={isCollapsed}
            fatherId={fatherId}
            hasChildren={hasChildren}
            level={level}
            handleChildren={handleChildren}
            handleCollapse={handleCollapse}
          />
        );
      }

      return '';
    });
  };

  return <ul className="App-content-list">{showList && buildRowItem(showList)}</ul>;
}
