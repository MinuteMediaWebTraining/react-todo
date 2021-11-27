import { Middleware } from '@reduxjs/toolkit';
import { todoError, todoLoaded, todoLoading } from './todoSlice';

const TODO_ENDPOINT = '/todo.json';

export const fetchTodoCollection = () => {
	return {
		type: 'todo/fetchTodoCollection',
	};
};

export const todoApi: Middleware = ({ dispatch }) => {
	return (next) => async (action) => {
		const returnValue = next(action);

		if (action.type === 'todo/fetchTodoCollection') {
			dispatch(todoLoading());
			try {
				const response = await fetch(TODO_ENDPOINT);
				const items = await response.json();
				dispatch(todoLoaded(items));
			} catch (err) {
				dispatch(todoError());
				console.error(err);
			}
		}

		return returnValue;
	};
};
