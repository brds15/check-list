import React, { useCallback, useEffect, useState } from 'react';
import { getData } from '../services/api';
import List from './List';
import { handleFlatCheckList, getFlatCheckList } from './CheckList';
import '../Styles/App.scss';

export default function Content() {
  const [checkList, setCheckList] = useState([]);

  const formatterList = useCallback((itemsList, fatherId = '') => {
    for (const key in itemsList) {
      const list = itemsList && key ? itemsList[key] : {};
      const { children = [] } = list || {};
      const arrChildren = Object.values(children);
      const childrenItems = arrChildren.length >= 0 ? arrChildren : [{}];

      if (childrenItems.length > 0) {
        formatterList(childrenItems, list.id);
      }

      const { level, id, name } = Object.assign(list);
      const newCheckableItem = {
        level: level,
        id: id,
        name: name,
        isChecked: false,
        isCollapsed: false,
        fatherId: fatherId
      };

      handleFlatCheckList(newCheckableItem);
    }
    return getFlatCheckList();
  }, []);

  useEffect(() => {
    if (checkList && checkList.length === 0) {
      getData(res => {
        const { hasError = true, list = [] } = res || {};
        if (!hasError) {
          const formattedList = formatterList(list);
          setCheckList(formattedList);
        }
      });
    }
  }, [checkList, formatterList]);

  return (
    <div className="App">
      <div className="App-content">
        <List />
      </div>
    </div>
  );
}
