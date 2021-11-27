import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiStatusEnum } from '../models/apiStatus';
import { ITodo } from '../models/ITodo';

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		items: new Array<ITodo>(),
		status: apiStatusEnum.idle,
	},
	reducers: {
		todoLoading: (state) => {
			state.status = apiStatusEnum.loading;
		},
		todoError: (state) => {
			state.status = apiStatusEnum.error;
		},
		todoLoaded: (state, action: PayloadAction<ITodo[]>) => {
			state.items = action.payload;
			state.status = apiStatusEnum.idle;
		},
		add: (state, action: PayloadAction<ITodo>) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.items.push(action.payload);
		},
		toggleCompleted: (state, action: PayloadAction<string>) => {
			const todo = state.items.find((item) => item.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
	},
});

export const { add, toggleCompleted, todoLoading, todoError, todoLoaded } =
	todoSlice.actions;

export default todoSlice.reducer;
