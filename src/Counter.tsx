import * as React from 'react';

interface ICounterProps {
	label?: string;
	start?: number;
}

interface ICounterState {
	count: number;
}

class Counter extends React.Component<ICounterProps, ICounterState> {
	public static defaultProps = {
		label: 'Count',
		start: 0,
	};

	constructor(props: ICounterProps) {
		super(props);
		this.state = {
			count: props.start!
		};
	}

	public render() {
		return (
			<div className="counter">
				<label>{this.props.label}</label>
				<span>{this.state.count}</span>
			</div>
		);
	}
}

export default Counter;
