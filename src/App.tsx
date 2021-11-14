import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

interface IState {
  todoCollection: Array<string>
}

class App extends React.Component<{}, IState> {
  constructor() {
    super({});
    
    this.state = {
      todoCollection: []
    }
  }
  
  render () {
    return (
      <div className="App">
        <Header/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
