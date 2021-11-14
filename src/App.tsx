import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import {ITodo} from './models/ITodo';

interface IState {
  todoCollection: Array<ITodo>
}

const createId = (): string => (
  Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
);

class App extends React.Component<{}, IState> {
  constructor() {
    super({});
    
    this.state = {
      todoCollection: [
        {id: createId(), text: 'Call Benny'},
        {id: createId(), text: 'Build react demo'},
        {id: createId(), text: 'Take rest'}
      ]
    }
  }
  
  render () {
    return (
      <div className="App">
        <Header/>
        <TodoList todoCollection={this.state.todoCollection}/>
      </div>
    );
  }
}

export default App;
