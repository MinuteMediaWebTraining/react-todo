import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { ITodo } from './models/ITodo';
import { createId } from './utils/idGenerator';

interface IState {
	todoCollection: Array<ITodo>;
}

class App extends React.Component<{}, IState> {
	constructor(props = {}) {
		super(props);

		this.state = {
			todoCollection: [
				{ id: createId(), text: 'Call Benny', completed: true },
				{ id: createId(), text: 'Build react demo', completed: false },
				{ id: createId(), text: 'Take rest', completed: false },
			],
		};
	}

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

	render() {
		return (
			<div className='App'>
				<Header onAdd={this.onAdd} />
        <TodoList todoCollection={this.state.todoCollection} onCompletedToggle={this.onCompletedToggle}/>
			</div>
		);
	}
}

export default App;
