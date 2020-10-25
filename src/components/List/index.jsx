import React from 'react';
import Row from './Row/Row';

export default function List({ handleCheck, handleCollapse, showList = [] }) {
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
        hasChildrenActivated = false,
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
            hasChildrenActivated={hasChildrenActivated}
            handleCheck={handleCheck}
            handleCollapse={handleCollapse}
          />
        );
      }

      return '';
    });
  };

  return <ul className="App-content-list">{showList && buildRowItem(showList)}</ul>;
}
