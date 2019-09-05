import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Counter from './Components/Counter';
import Controls from './Components/Controls';
import TodoList from './Components/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {text: "Water Plants", isDone: false},
        {text: "Feed Cats", isDone: true}
      ],
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Counter count={this.state.items.length}/>
        <Controls />
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
