import React, { useEffect } from 'react';
import { getData } from '../services/api';
import List from './List';
import '../Styles/App.scss';

function App() {
  useEffect(() => {
    getData(res => {
      const { hasError = true, list = {} } = res || {};
      console.log('hasError', hasError);
      console.log('list', list);
    }, []);
  });
  return (
    <div className="App">
      <div className="App-content">
        <List />
      </div>
    </div>
  );
}

export default App;
