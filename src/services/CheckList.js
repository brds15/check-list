const keyName = 'CHECKLIST-LIST';
let arrCheckList = [];
let sortedList = [];

export function handleFlatCheckList(item) {
  return (arrCheckList = [...arrCheckList, item]);
}

export function getFlatCheckList() {
  return [...arrCheckList];
}

function setItem(checkList, id, status) {
  const list = [...checkList];
  const index = checkList.findIndex(item => item.id === id);

  list[index] = { ...list[index], isChecked: status };
  return list;
}

export function handleChildrenCheckStatus(checkList, id, newStatus) {
  const list = setItem(checkList, id, newStatus);
  const children = list.filter(item => item.fatherId === id);
  let currentList = [...list];

  if (children.length > 0) {
    for (const child of children) {
      const { id } = child;
      currentList = handleChildrenCheckStatus(currentList, id, newStatus);
    }
    return currentList;
  }
  return list;
}

function sortItemList(list, item) {
  const fatherPosition = sortedList.findIndex(subItem => subItem.id === item.fatherId);
  let newList = [...sortedList];
  newList.splice(fatherPosition + 1, 0, item);
  return [...newList];
}

export function sortList(referenceList) {
  for (let currentLevel = 0; currentLevel <= 4; currentLevel++) {
    const levelItems = referenceList.filter(item => item.level === currentLevel);

    if (sortedList.length === 0 && levelItems.length > 0) {
      sortedList = [...levelItems];
    } else {
      if (levelItems.length > 0) {
        const newLevelItems = [...levelItems].reverse();
        for (const item of newLevelItems) {
          const newList = sortItemList(sortedList, item);
          sortedList = [...newList];
        }
      }
    }
  }

  return sortedList;
}

function closeByItem(list, currentItemId) {
  let newFathers = [];
  const closedList = list.map(item => {
    const isChild = item.fatherId === currentItemId;

    if (isChild) {
      let subItem = { ...item };
      const currentItemHasChild = list.find(child => child.fatherId === subItem.id);

      if (!!currentItemHasChild) {
        newFathers = [...newFathers, subItem.id];
      }

      subItem = { ...subItem, isShowing: false, isCollapsed: false };
      return subItem;
    }

    return item;
  });
  return { closedList: closedList, fathersToCloseChildren: newFathers };
}

export function closeAllChildren(list, currentItemId) {
  const { closedList, fathersToCloseChildren } = closeByItem(list, currentItemId);
  let currentList = [...closedList];

  if (fathersToCloseChildren.length > 0) {
    for (const child of fathersToCloseChildren) {
      currentList = closeAllChildren(currentList, child);
    }
  }

  return [...currentList];
}

export function setRecovery(list) {
  localStorage.setItem(keyName, JSON.stringify(list));
}

export function getRecovery() {
  const recoveredList = JSON.parse(localStorage.getItem(keyName));
  return !!recoveredList ? recoveredList : [];
}
