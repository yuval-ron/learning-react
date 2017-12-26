import React, { Component } from 'react';
import './App.css';

export default class NewTodoForm extends Component {
  onClick = () => {
    const {addTodo} = this.props
    addTodo({
      title: this.refs.newTodoTitle.value
    })

    this.refs.newTodoTitle.value = ""
  }

  render() {
    return (
      <div className="new-todo-form">
        <input ref="newTodoTitle" className="todo-text" />
        <button className="todo-submit" onClick={this.onClick}>Add Todo</button>
      </div>
    );
  }
}

