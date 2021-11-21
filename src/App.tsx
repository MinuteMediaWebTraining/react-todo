import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { ITodo } from './models/ITodo';
import { ViewFilterMode } from './models/ViewFilterMode';
import { createId } from './utils/idGenerator';

interface IState {
	viewFilter: ViewFilterMode;
	todoCollection: Array<ITodo>;
}

class App extends React.Component<{}, IState> {
	constructor(props = {}) {
		super(props);

		this.state = {
			viewFilter: ViewFilterMode.All,
			todoCollection: [],
		};
	}

	componentDidMount() {
		fetch('todo.json')
			.then((response) => response.json())
			.then((items) => {
				this.setState({
					todoCollection: items,
				});
			});
	}

	onViewFilterChange = (newValue: ViewFilterMode) => {
		this.setState({
			viewFilter: newValue,
		});
	};

	onAdd = (value: string) => {
		const newTodo = { id: createId(), text: value, completed: false };
		this.setState({
			todoCollection: [...this.state.todoCollection, newTodo],
		});
	};

	onCompletedToggle = (id: string, completed: boolean) => {
		const todo = this.state.todoCollection.find(
			(todo: ITodo) => todo.id === id
		);

		if (todo) {
			todo.completed = completed;
		} else {
			throw new Error('onCompletedToggle: todo id invalid');
		}

		this.setState({
			todoCollection: [...this.state.todoCollection],
		});
	};

	getFilteredTodoList(): Array<ITodo> {
		let todoList = this.state.todoCollection;

		switch (this.state.viewFilter) {
			case ViewFilterMode.All:
				break;

			case ViewFilterMode.Completed:
				todoList = this.state.todoCollection.filter(
					(todo: ITodo) => todo.completed
				);
				break;

			default:
				break;
		}
		return todoList;
	}

	render() {
		return (
			<div className="App">
				<Header
					onAdd={this.onAdd}
					onViewFilterChange={this.onViewFilterChange}
				/>
				<TodoList
					todoCollection={this.getFilteredTodoList()}
					onCompletedToggle={this.onCompletedToggle}
				/>
			</div>
		);
	}
}

export default App;
