import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { ITodo } from './models/ITodo';
import { ViewFilterMode } from './models/ViewFilterMode';
import { createId } from './utils/idGenerator';

const App: React.FC = () => {
	const [viewFilter, setViewFilter] = useState(ViewFilterMode.All);
	const [todoCollection, setTodoCollection] = useState<Array<ITodo>>([]);

	useEffect(() => {
		fetch('todo.json')
			.then((response) => response.json())
			.then((items) => {
				setTodoCollection(items);
			});
	}, []);

	const onAdd = (value: string) => {
		const newTodo = { id: createId(), text: value, completed: false };
		setTodoCollection([...todoCollection, newTodo]);
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

	const onCompletedToggle = (id: string, completed: boolean) => {
		const todo = todoCollection.find((todo: ITodo) => todo.id === id);
		if (todo) {
			todo.completed = completed;
		} else {
			throw new Error('onCompletedToggle: todo id invalid');
		}
		setTodoCollection([...todoCollection]);
	};

	return (
		<div className="App">
			<Header
				onAdd={onAdd}
				viewFilter={viewFilter}
				onViewFilterChange={setViewFilter}
			/>
			<TodoList
				todoCollection={getFilteredTodoList()}
				onCompletedToggle={onCompletedToggle}
			/>
		</div>
	);
};

export default App;
