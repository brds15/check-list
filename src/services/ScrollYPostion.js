const keyName = 'CHECKLIST-POSY';
export const setLastPosition = () => {
  setTimeout(() => {
    const position = window.pageYOffset;
    localStorage.setItem(keyName, position.toString());
  }, 2000);
};

export const getLastPosition = () => {
  const lastPosition = localStorage.getItem(keyName);
  const intLastPosition = parseInt(lastPosition);
  return !!intLastPosition ? intLastPosition : 0;
};
