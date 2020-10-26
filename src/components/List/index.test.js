import React from 'react';
import { shallow } from 'enzyme';
import List from './index';

describe('<List /> with props', () => {
  const initialProps = {
    showList: [
      {
        level: 0,
        id: '2469bdab-23b5-4cb8-90c9-c609a49410b0',
        name: 'Richard Paul M.',
        hasChildren: true,
        hasChildrenActivated: true,
        isChecked: false,
        isCollapsed: false,
        fatherId: '',
        isShowing: true
      }
    ]
  };
  it('should render the list component', () => {
    const container = shallow(<List {...initialProps} />);
    expect(container.find('ul'));
  });
});
