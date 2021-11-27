import { Middleware } from '@reduxjs/toolkit';

export const logger: Middleware = ({ getState }) => {
	return (next) => (action) => {
		console.log('will dispatch', action);

		// Call the next dispatch method in the middleware chain.
		const returnValue = next(action);

		console.log('state after dispatch', getState());

		return returnValue;
	};
};

