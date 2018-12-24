import { mount, shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the app and the heading', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('h1').text()).toBe('Hello React');
  expect(wrapper.find('.counter label').text()).toBe('Current');
});

it('updates state when increment is called without shift', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance() as App;
    expect(instance.state.count).toBe(0);
    instance.increment(false);
    expect(instance.state.count).toBe(1);
});

it('updates state when increment is called with shift', () => {
    const wrapper = shallow(<App/>);
    const instance = wrapper.instance() as App;
    expect(instance.state.count).toBe(0);
    instance.increment(true);
    expect(instance.state.count).toBe(10);
});

it('updates the count by 1 via the counter component', () => {
    const wrapper = mount(<App/>);
    wrapper.find('.counter').simulate('click', {shiftKey: false});
    expect(wrapper.find('.counter span').text()).toBe('1');
});

it('updates the count by 10 via the counter component', () => {
    const wrapper = mount(<App/>);
    wrapper.find('.counter').simulate('click', {shiftKey: true});
    expect(wrapper.find('.counter span').text()).toBe('10');
});