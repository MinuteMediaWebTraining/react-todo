import React from 'react';

interface IProps {
  id: string
  text: string
  completed: boolean,
  onCompletedToggle: Function
}

const Todo: React.FC<IProps> = ({id, text, completed, onCompletedToggle}) => {
  function onChange() {
    onCompletedToggle(id, !completed);
  }
  
  return (
    <div>
      <input checked={completed} type="checkbox" onChange={onChange}/>
      <span>
        {text}
      </span>
    </div>
  );
};

export default Todo;