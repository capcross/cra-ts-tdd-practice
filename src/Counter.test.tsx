import { shallow } from 'enzyme';
import * as React from 'react';
import Counter from './Counter';

it('should render a counter', () => {
  const handler = jest.fn();
  const wrapper = shallow(<Counter count={0} onCounterIncrease={handler} />);
  expect(wrapper.find('.counter label').text()).toBe('Count');
});

it('should render a counter with custom label', () => {
  const handler = jest.fn();
  const wrapper = shallow(
    <Counter label={'Current'} count={0} onCounterIncrease={handler} />,
  );
  expect(wrapper.find('.counter label').text()).toBe('Current');
});

it('should call the handler on click', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter count={0} onCounterIncrease={handler}/>);
    wrapper.find('.counter').simulate('click', {shiftKey: false});
    expect(handler).toBeCalledWith(false);
});
