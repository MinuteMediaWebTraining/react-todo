import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { ITodo } from './models/ITodo';
import { ViewFilterMode } from './models/ViewFilterMode';
import { createId } from './utils/idGenerator';

interface IState {
	viewFilter: ViewFilterMode;
	loaded: boolean;
	todoCollection: Array<ITodo>;
}

class App extends React.Component<{}, IState> {
	constructor(props = {}) {
		super(props);

		this.state = {
			viewFilter: ViewFilterMode.All,
			loaded: false,
			todoCollection: [],
		};
	}

	componentDidMount() {
		const getPosts = async() => {
			const response = await fetch('todo.json')
			const items = await response.json();
			this.setState({
				todoCollection: items,
				loaded: true,
			});
		}
		getPosts();
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
		const { loaded } = this.state;
		let content = <div>Loading...</div>
		if(loaded) {
			content = (
				<TodoList
					todoCollection={this.getFilteredTodoList()}
					onCompletedToggle={this.onCompletedToggle}
				/>
			);
		}

		return (
			<div className="App">
				<Header
					onAdd={this.onAdd}
					onViewFilterChange={this.onViewFilterChange}
				/>
				{content}
			</div>
		);
	}
}

export default App;
