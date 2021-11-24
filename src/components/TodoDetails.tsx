import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../store/hooks';
// import { globals } from './TodoDashboard';

const TodoDetails: React.FC = () => {
	const params = useParams();
	const todoCollection = useAppSelector((state) => state.todo.items);
	const todo = todoCollection.find((todo) => todo.id === params.id);

	if (!todo) {
		return <p>Item {params.id} not found!</p>;
	}
	const status = todo.completed ? 'completed' : 'active';

	return (
		<div>
			<h1>Todo Details</h1>
			<span>{todo.text}</span>
			<span>
				(id : {todo.id}, {status})
			</span>
		</div>
	);
};

export default TodoDetails;
