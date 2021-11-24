import React from 'react';
import { NavLink } from 'react-router-dom';
import './Todo.css';

interface IProps {
  id: string
  text: string
  completed: boolean,
  onCompletedToggle: Function
}

const Todo: React.FC<IProps> = ({id, text, completed, onCompletedToggle}) => {
  function onChange() {
    onCompletedToggle(id);
  }
  
  return (
    <div className="todo">
      <input checked={completed} type="checkbox" onChange={onChange}/>
      <span className="todo-content">
        {text}
      </span>
      <NavLink to={id}>details</NavLink>
    </div>
  );
};

export default Todo;