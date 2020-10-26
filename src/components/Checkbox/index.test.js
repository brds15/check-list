import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './index';

describe('<Checkbox /> with props', () => {
  it('should render the checkbox component', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('div'));
  });
});
