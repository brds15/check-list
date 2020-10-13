import React from 'react';
import Row from './Row/Row';

export default function List({ items = [] }) {
  console.log('items', items);
  return (
    <ul className="App-content-list">
      <Row name={'lalalal'} />
    </ul>
  );
}
