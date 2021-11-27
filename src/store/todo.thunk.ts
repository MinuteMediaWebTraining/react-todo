import { AppThunk } from '.';
import { todoError, todoLoaded, todoLoading } from './todoSlice';

const TODO_ENDPOINT = '/todo.json';

export const fetchTodoCollection = (): AppThunk => {
	return async (dispatch) => {
		dispatch(todoLoading());
		try {
			const response = await fetch(TODO_ENDPOINT);
			const items = await response.json();
			dispatch(todoLoaded(items));
		} catch (err) {
			dispatch(todoError());
			console.error(err);
		}
	};
};
