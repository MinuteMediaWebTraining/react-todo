import React from 'react';
import { useParams } from 'react-router';
import { useTodoCollection } from '../hooks/useTodoStatus';
import Loader from './Loader';

const TodoDetails: React.FC = () => {
	const params = useParams();
	const { todoCollection, isLoading, isError } = useTodoCollection();

	const todo = todoCollection.find((todo) => todo.id === params.id);

	if (!isLoading && !isError && !todo) {
		return <p>Item {params.id} not found!</p>;
	}

	return (
		<div>
			<h1>Todo Details</h1>
			{isLoading && todoCollection.length === 0 && <Loader />}
			{isError && <p>Something is wrong - Try again later</p>}
			{todo && (
				<>
					<span>{todo.text}</span>
					<span>
						(id : {todo.id}, {todo.completed ? 'completed' : 'active'})
					</span>
				</>
			)}
		</div>
	);
};

export default TodoDetails;
