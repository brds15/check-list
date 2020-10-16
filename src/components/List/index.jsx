import React from 'react';
import Row from './Row/Row';

export default function List({ items = [] }) {
  const buildRowItem = () => {
    return <Row name={'lalalal'} />;
  };

  return <ul className="App-content-list">{buildRowItem()}</ul>;
}
