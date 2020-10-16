let arrCheckList = [];

export function handleFlatCheckList(item) {
  return (arrCheckList = [...arrCheckList, item]);
}

export function getFlatCheckList() {
  return [...arrCheckList];
}
