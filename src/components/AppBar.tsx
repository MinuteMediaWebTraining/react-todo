import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { ThemeContext } from '../theme';
import { Button } from './Button';
import NavBar from './NavBar';

const AppBarContainer = styled.div`
	display: flex;
	margin: auto;
	&>*:first-child {
		flex: 1;
	}
`;

const AppBar: React.FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<AppBarContainer>
			<NavBar />
			<Button onClick={toggleTheme}>Theme: {theme.name}</Button>
		</AppBarContainer>
	);
};

export default AppBar;
