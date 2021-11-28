import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiStatusEnum } from '../models/apiStatus';
import { ITodo } from '../models/ITodo';

const TODO_ENDPOINT = '/todo.json';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchTodoCollectionAsync())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchTodoCollectionAsync = createAsyncThunk(
	'todo/fetchCollection',
	async () => {
		const response = await fetch(TODO_ENDPOINT);
		return await response.json();
	}
);

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		items: new Array<ITodo>(),
		status: apiStatusEnum.idle,
	},
	reducers: {
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
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodoCollectionAsync.pending, (state) => {
				state.status = apiStatusEnum.loading;
			})
			.addCase(fetchTodoCollectionAsync.rejected, (state) => {
				state.status = apiStatusEnum.error;
			})
			.addCase(
				fetchTodoCollectionAsync.fulfilled,
				(state, action: PayloadAction<ITodo[]>) => {
					state.items = action.payload;
					state.status = apiStatusEnum.idle;
				}
			);
	},
});

export const { add, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
