import data from './data.json';

export const getData = cb => {
  setTimeout(() => {
    const objData = { ...data };
    if (cb && typeof cb === 'function') {
      cb({ hasError: false, list: Object.entries(objData) });
    }
  }, 5000);
};
