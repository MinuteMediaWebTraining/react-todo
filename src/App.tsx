import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import {ITodo} from './models/ITodo';
import { createId } from './utils/idGenerator';

interface IState {
  todoCollection: Array<ITodo>
}



class App extends React.Component<{}, IState> {
  constructor(props = {}) {
    super(props);
    
    this.state = {
      todoCollection: [
        {id: createId(), text: 'Call Benny'},
        {id: createId(), text: 'Build react demo'},
        {id: createId(), text: 'Take rest'}
      ]
    };
  }
  
  onAdd = (value: string) => {
    console.log(value);
  };
  
  render () {
    return (
      <div className="App">
        <Header onAdd={this.onAdd}/>
        <TodoList todoCollection={this.state.todoCollection}/>
      </div>
    );
  }
}

export default App;
