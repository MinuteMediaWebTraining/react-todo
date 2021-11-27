import React, { useEffect, useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import { ITodo } from '../models/ITodo';
import { ViewFilterMode } from '../models/ViewFilterMode';
import { createId } from '../utils/idGenerator';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { add, toggleCompleted } from '../store/todoSlice';
import { fetchTodoCollection } from '../store/middleware.api';


const TodoDashboard: React.FC = () => {
	const [viewFilter, setViewFilter] = useState(ViewFilterMode.All);
	const todoCollection = useAppSelector((state) => state.todo.items);
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchTodoCollection());
	// 	fetch('todo.json')
	// 		.then((response) => response.json())
	// 		.then((items) => {
	// 			setTodoCollection(items);
	// 		});
	}, [dispatch]);

	const onAdd = (value: string) => {
		const newTodo = { id: createId(), text: value, completed: false };
		dispatch(add(newTodo))
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
		dispatch(toggleCompleted(id))
	};

	return (
		<>
			<Header
				onAdd={onAdd}
				viewFilter={viewFilter}
				onViewFilterChange={setViewFilter}
			/>
			<TodoList
				todoCollection={getFilteredTodoList()}
				onCompletedToggle={onCompletedToggle}
			/>
		</>
	);
};

export default TodoDashboard;
