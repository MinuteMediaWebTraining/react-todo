import React from 'react';

interface IProps {
  text: string
}

const Todo: React.FC<IProps> = ({text}) => (
  <span>
    {text}
  </span>
);

export default Todo;