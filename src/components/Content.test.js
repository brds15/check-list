import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

it('should render the Content component ', () => {
  const wrapper = shallow(<Content />);
  expect(wrapper.find('div'))
});
