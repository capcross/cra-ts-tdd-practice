import { mount, shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App, { Heading } from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the heading', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h1').text()).toBe('Hello React');
});

it('renders the heading', () => {
	const wrapper = shallow(<Heading/>);
	expect(wrapper.find('h1').text())
			.toBe('Hello React');
});

it('renders the app and the heading', () => {
	const wrapper = mount(<App/>);
	expect(wrapper.find('h1').text())
			.toBe('Hello React');
});