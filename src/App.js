import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Counter from './Components/Counter';
import Controls from './Components/Controls';

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
        <Counter />
        <Controls />
      </div>
    );
  }
}

export default App;
