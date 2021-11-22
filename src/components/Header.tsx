import React, { ChangeEvent, useState } from 'react';
import { useFormInput } from '../hooks/useFormInput';
import { ViewFilterMode } from '../models/ViewFilterMode';
import { Button } from './Button';
import { Textbox } from './Textbox';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import './Header.css';


const newItemStyles = css`
	display: flex;
	margin-bottom: 10px;
	>:last-child {
		margin-left: 10px;
	}
`

interface IProps {
	onAdd: (value: string) => void;
	viewFilter: ViewFilterMode;
	onViewFilterChange: (newValue: ViewFilterMode) => void;
}


const Header: React.FC<IProps> = ({ onAdd, viewFilter, onViewFilterChange }) => {
	const [buttonEnabled, setButtonEnabled] = useState(false);
	const updateButtonByInput = (newValue: string) => setButtonEnabled(newValue.length > 0)
	const newItem = useFormInput('', updateButtonByInput);

	const handleViewChange =(event: ChangeEvent<HTMLSelectElement>) => {
		const value = parseInt(event.target.value);
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
			<div css={newItemStyles}>
				<Textbox {...newItem} />
				<Button onClick={onAddClicked} disabled={!buttonEnabled}>
					Add
				</Button>
			</div>
			<div>
				<label htmlFor="view-selector">View</label>
				<select
					id="view-selector"
					value={viewFilter}
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
