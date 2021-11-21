import React, { ChangeEvent, useState } from 'react';
import { useFormInput } from '../hooks/useFormInput';
import { ViewFilterMode } from '../models/ViewFilterMode';
import './Header.css';

interface IProps {
	onAdd: (value: string) => void;
	onViewFilterChange: (newValue: ViewFilterMode) => void;
}


const Header: React.FC<IProps> = ({ onAdd, onViewFilterChange }) => {
	const [buttonEnabled, setButtonEnabled] = useState(false);
	const [viewFilterValue, setViewFilterValue] = useState(ViewFilterMode.All);
	const updateButtonByInput = (newValue: string) => setButtonEnabled(newValue.length > 0)
	const newItem = useFormInput('', updateButtonByInput);

	const handleViewChange =(event: ChangeEvent<HTMLSelectElement>) => {
		const value = parseInt(event.target.value);
		setViewFilterValue(value);
		onViewFilterChange(value);
	}

	const clear = () => {
		setButtonEnabled(false);
		newItem.onChange('');
	}

	const onAddClicked = () => {
		if (buttonEnabled) {
			onAdd(newItem.value);
			clear();
		}
	};

	return (
		<header className="header">
			<h1>My Todo list</h1>
			<div className="header-new-item">
				<input {...newItem} />
				<button onClick={onAddClicked} disabled={!buttonEnabled}>
					Add
				</button>
			</div>
			<div>
				<label htmlFor="view-selector">View</label>
				<select
					id="view-selector"
					value={viewFilterValue}
					onChange={handleViewChange}
				>
					<option value={ViewFilterMode.All}>All</option>
					<option value={ViewFilterMode.Completed}>Completed</option>
				</select>
			</div>
		</header>
	);
};

export default Header;
