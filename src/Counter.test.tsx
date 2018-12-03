import { mount, shallow } from "enzyme";
import * as React from 'react';
import App from './App';
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

it('should default start at zero', () => {
  const wrapper = shallow(<Counter label={'Current'}/>);
  expect(wrapper.find('.counter span').text())
      .toBe('0');
});

it('should custom start at another value', () => {
  const wrapper = shallow(<Counter label={'Current'} start={10}/>);
  expect(wrapper.find('.counter span').text())
      .toBe('10');
});

it('renders the app and the heading', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find('h1').text())
      .toBe('Hello React');
  expect(wrapper.find('.counter label').text())
      .toBe('Current');
  expect(wrapper.find('.counter span').text())
      .toBe('0');
});