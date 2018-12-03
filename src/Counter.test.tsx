import { shallow } from "enzyme";
import * as React from 'react';
import Counter from './Counter';

it('should render a counter', () => {
  const wrapper = shallow(<Counter/>);
  expect(wrapper.find('.counter label').text())
      .toBe('Count');
});

it('should render a counter with custom label', () => {
  const wrapper = shallow(<Counter label={'Current'}/>);
  expect(wrapper.find('.counter label').text())
      .toBe('Current');
});