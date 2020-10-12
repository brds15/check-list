import React, { useEffect } from 'react';
import { getData } from './services/api';
import './App.css';

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
      <header className="App-header" />
    </div>
  );
}

export default App;
