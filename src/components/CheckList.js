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

  list[index] = { ...list[index], isChecked: !status };
  return list;
}

export function handleChildrenCheckStatus(checkList, id, status) {
  const list = setItem(checkList, id, status);
  const children = list.filter(item => item.fatherId === id) || [];
  let currentList = [...list];

  if (children.length > 0) {
    for (const child of children) {
      const { id, isChecked } = child;
      currentList = handleChildrenCheckStatus(currentList, id, isChecked);
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
