let arrCheckList = [];

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
