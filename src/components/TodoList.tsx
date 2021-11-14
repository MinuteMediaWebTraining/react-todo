import React from 'react';
import Todo from './Todo';
import {ITodo} from '../models/ITodo';

interface IProps  {
  todoCollection: any
}

const TodoList: React.FC<IProps> = ({todoCollection}) => {
  return (
    <ul>
      {todoCollection.map((todo: ITodo) =>
        <li key={todo.id}>
          <Todo text={todo.text}/>
        </li>
      )}
    </ul>
  );
};


export default TodoList;