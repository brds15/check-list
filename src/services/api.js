import data from './data.json';

export const getData = cb => {
  setTimeout(() => {
    const objData = { ...data };
    if (cb && typeof cb === 'function') {
      cb({ hasError: false, list: Object.values(objData) });
    }
  }, 1000);
};
