import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		items: [
			{ id: '123', text: 'Call Benny', completed: true },
			{ id: '124', text: 'Complete Demo', completed: false },
		],
	},
	reducers: {
		add: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.items.push(action.payload);
		},
    toggleCompleted: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if(todo) {
        todo.completed = !todo.completed;
      }
    }
	},
});

export const { add, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
