import React, { Component } from 'react';
import './App.css';

export default class NewTodoForm extends Component {
  addTodo = () => {
    const {addTodo} = this.props
    addTodo({
      title: this.refs.newTodoTitle.value
    })

    this.refs.newTodoTitle.value = ""
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) { // Enter
      this.addTodo()
    }
  }

  render() {
    return (
      <div className="new-todo-form">
        <input
          ref="newTodoTitle"
          placeholder="What needs to be done?"
          className="todo-text"
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

