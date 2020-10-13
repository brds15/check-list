import React, { useEffect, useState } from 'react';
import { getData } from '../services/api';
import List from './List';
import '../Styles/App.scss';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length === 0) {
      getData(res => {
        const { hasError = true, list = [] } = res || {};
        if (!hasError) {
          setItems(list);
        }
      });
    }
  }, [items]);

  return (
    <div className="App">
      <div className="App-content">
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
