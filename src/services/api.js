export const getData = (cb) =>{
  fetch('./data.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
      if (cb && typeof cb === 'function') {
        cb();
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error to get data.');
    });
}
