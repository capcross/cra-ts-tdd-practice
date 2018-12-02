import { mount, shallow } from 'enzyme';
import * as React from 'react';
import App from './App';
import Heading from './Heading';

it('renders the heading', () => {
	const wrapper = shallow(<Heading recipient={'World'} />);
	expect(wrapper.find('h1').text()).toBe('Hello World');
});

it('renders the app and the heading', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find('h1').text())
      .toBe('Hello React');
});

it('renders the default heading', () => {
	const wrapper = shallow(<Heading recipient={'World'}/>);
	expect(wrapper.find('h1').text()).toBe('Hello World');
});


it('renders the default heading', () => {
	const wrapper = shallow(<Heading />);
	expect(wrapper.find('h1').text()).toBe('Hello React');
});
