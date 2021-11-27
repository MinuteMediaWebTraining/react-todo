import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import { ITodo } from '../models/ITodo';
import { ViewFilterMode } from '../models/ViewFilterMode';
import { createId } from '../utils/idGenerator';
import { useAppDispatch } from '../store/hooks';
import { add, toggleCompleted } from '../store/todoSlice';
import { useTodoCollection } from '../hooks/useTodoStatus';
import Loader from './Loader';

const TodoDashboard: React.FC = () => {
	const [viewFilter, setViewFilter] = useState(ViewFilterMode.All);
	const { todoCollection, isLoading, isError } = useTodoCollection();
	const dispatch = useAppDispatch();

	const onAdd = (value: string) => {
		const newTodo = { id: createId(), text: value, completed: false };
		dispatch(add(newTodo));
	};

	const getFilteredTodoList = () => {
		let todoList = todoCollection;

		switch (viewFilter) {
			case ViewFilterMode.All:
				break;

			case ViewFilterMode.Completed:
				todoList = todoCollection.filter((todo: ITodo) => todo.completed);
				break;

			default:
				break;
		}
		return todoList;
	};

	const onCompletedToggle = (id: string) => {
		dispatch(toggleCompleted(id));
	};

	return (
		<>
			<Header
				onAdd={onAdd}
				viewFilter={viewFilter}
				onViewFilterChange={setViewFilter}
			/>
			{isLoading && todoCollection.length === 0 && <Loader />}
			{isError && <p>Something is wrong - Try again later</p>}
			{todoCollection && (
				<TodoList
					todoCollection={getFilteredTodoList()}
					onCompletedToggle={onCompletedToggle}
				/>
			)}
		</>
	);
};

export default TodoDashboard;
