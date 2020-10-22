import React, { useCallback, useEffect, useState } from 'react';
import { getData } from '../services/api';
import List from './List';
import {
  getFlatCheckList,
  handleFlatCheckList,
  handleChildrenCheckStatus,
  sortList,
  closeAllChildren
} from './CheckList';
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
        hasChildren: Object.values(list.children).length > 0,
        isChecked: false,
        isCollapsed: false,
        fatherId: fatherId,
        isShowing: level === 0
      };

      handleFlatCheckList(newCheckableItem);
    }
    return getFlatCheckList();
  }, []);

  const handleCheck = useCallback(
    (id, isChecked) => {
      const list = [...checkList];
      const newList = handleChildrenCheckStatus(list, id, isChecked);

      setCheckList([...newList]);
    },
    [checkList]
  );

  const handleCollapse = useCallback(
    (status, id) => {
      const newStatus = !status;
      let newList;

      if (newStatus) {
        newList = checkList.map(item => {
          if (item.fatherId === id) {
            let subItem = { ...item };
            subItem = { ...subItem, isShowing: true };
            return subItem;
          }
          return item;
        });
      } else {
        newList = closeAllChildren([...checkList], id, newStatus);
      }

      const index = checkList.findIndex(item => item.id === id);
      newList[index] = { ...newList[index], isCollapsed: !status };

      setCheckList([...newList]);
    },
    [checkList]
  );

  useEffect(() => {
    if (checkList && checkList.length === 0) {
      getData(res => {
        const { hasError = true, list = [] } = res || {};
        if (!hasError) {
          const formattedList = formatterList(list);
          const sortedList = sortList(formattedList);
          setCheckList(sortedList);
        }
      });
    }
  }, [checkList, formatterList]);

  return (
    <div className="App">
      <div className="App-content">
        <List showList={checkList} handleCheck={handleCheck} handleCollapse={handleCollapse} />
      </div>
    </div>
  );
}
