import * as React from 'react';

interface ICounterProps {
  label?: string;
}

class Counter extends React.Component<ICounterProps> {
	public static defaultProps = {
		label: 'Count',
  };
  
	public render() {
		return (
			<div className="counter">
        <label>{this.props.label}</label>        
				<span>1</span>
			</div>
		);
	}
}

export default Counter;
