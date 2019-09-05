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
      newTask: "",
      items: [
        {text: "Water Plants", isDone: false},
        {text: "Feed Cats", isDone: true}
      ],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFinishedItem = this.toggleFinishedItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value
    })
  }

  handleSubmit() {
    if (this.state.newTask) {
      let newItem = {
        text: this.state.newTask,
        isDone: false
      }
      this.setState({
        items: this.state.items.concat(newItem)
      })
    }
  };

  toggleFinishedItem(indexToToggle) {
    console.log("Toggle: ", indexToToggle);
    let currentItems = [...this.state.items];
    currentItems[indexToToggle].isDone = !currentItems[indexToToggle].isDone;
  }

  handleDelete(indexToDelete){
    let currentItems = [...this.state.items];
    currentItems.splice(indexToDelete, 1);
    this.setState({
      items: currentItems
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Counter count={this.state.items.length} />
        <Controls handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <TodoList items={this.state.items} toggle={this.toggleFinishedItem} delete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
