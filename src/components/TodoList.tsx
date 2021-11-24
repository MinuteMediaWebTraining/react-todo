import React from 'react';
import Todo from './Todo';
import {ITodo} from '../models/ITodo';

interface IProps  {
  todoCollection: ITodo[];
  onCompletedToggle: (id: string) => void;
}

const TodoList: React.FC<IProps> = ({todoCollection, onCompletedToggle}) => {
  return (
    <ul>
      {todoCollection.map((todo: ITodo) =>
        <li key={todo.id}>
          <Todo id={todo.id} text={todo.text} completed={todo.completed} onCompletedToggle={onCompletedToggle}/>
        </li>
      )}
    </ul>
  );
};


export default TodoList;