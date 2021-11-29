import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { ThemeContext } from '../theme';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */

const MainInner = styled.div`
	max-width: 300px;
	margin: auto;
`;

// const getMainStyles = (theme: Theme) => css`
// 	height: 100vh;
// 	width: 100vw;
// 	padding: 20px;
// 	box-sizing: border-box;
// 	color: ${theme.foreground};
// 	background-color: ${theme.background};
// `;

const Main: React.FC = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	// if needed - this can be exported
	// see commented code above
	const mainStyles = css`
		height: 100vh;
		width: 100vw;
		padding: 20px;
		box-sizing: border-box;
		color: ${theme.foreground};
		background-color: ${theme.background};
	`;

	return (
		<main css={mainStyles}>
			<MainInner>{children}</MainInner>
		</main>
	);
};

export default Main;
