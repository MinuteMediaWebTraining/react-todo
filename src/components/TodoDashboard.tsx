import React, { useEffect, useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import { ITodo } from '../models/ITodo';
import { ViewFilterMode } from '../models/ViewFilterMode';
import { createId } from '../utils/idGenerator';

// temp solution for passing data
// cannot share data effectively (no loading flag, use for read only)
interface IGlobals {
  tempTodoHolder: Array<ITodo>
}

export const globals:IGlobals =  {
  tempTodoHolder: []
}

const TodoDashboard: React.FC = () => {
	const [viewFilter, setViewFilter] = useState(ViewFilterMode.All);
	const [todoCollection, setTodoCollection] = useState<Array<ITodo>>([]);
  globals.tempTodoHolder = todoCollection;

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
