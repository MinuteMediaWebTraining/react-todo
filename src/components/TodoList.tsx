import React from 'react';
import Todo from './Todo';

const TodoList: React.FC = () => {
  const todoList = ['Call Benny', 'Build react demo', 'Take rest'];
  return (
    <ul>
      {todoList.map((text, index) =>
        <li key={index}>
          <Todo text={text}/>
        </li>
      )}
    </ul>
  );
};


export default TodoList;