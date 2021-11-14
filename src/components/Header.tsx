import React, { SyntheticEvent } from 'react';
import { ViewFilterMode } from '../models/ViewFilterMode';
import './Header.css';

interface IProps {
	onAdd: (value: string) => void;
	onViewFilterChange: (newValue: ViewFilterMode) => void;
}

interface IState {
	value: string;
	viewFilterValue: ViewFilterMode;
	buttonEnabled: boolean;
}

class Header extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			value: '',
			viewFilterValue: ViewFilterMode.All,
			buttonEnabled: false,
		};
	}

	clear() {
		this.setState({
			value: '',
			buttonEnabled: false,
		});
	}
	handleViewChange = (event: SyntheticEvent) => {
		const value = parseInt((event.target as HTMLSelectElement).value);
		this.setState({
			viewFilterValue: value,
		});
		this.props.onViewFilterChange(value);
	};

	handleInputChange = (event: SyntheticEvent) => {
		const value = (event.target as HTMLInputElement).value;
		this.setState({
			value,
			buttonEnabled: value.length > 0,
		});
	};

	handleClick = () => {
		if (this.state.buttonEnabled) {
			this.props.onAdd(this.state.value);
			this.clear();
		}
	};

	render(): React.ReactElement {
		return (
			<header className="header">
				<h1>My Todo list</h1>
				<div className="header-new-item">
					<input value={this.state.value} onChange={this.handleInputChange} />
					<button
						onClick={this.handleClick}
						disabled={!this.state.buttonEnabled}
					>
						Add
					</button>
				</div>
				<div>
					<label htmlFor="view-selector">View</label>
					<select
						id="view-selector"
						value={this.state.viewFilterValue}
						onChange={this.handleViewChange}
					>
						<option value={ViewFilterMode.All}>All</option>
						<option value={ViewFilterMode.Completed}>Completed</option>
					</select>
				</div>
			</header>
		);
	}
}

export default Header;
