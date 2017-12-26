import React, { Component } from 'react';

export default class Todo extends Component {
  onChangeIsDone = () => {
    const {todo, updateTodo} = this.props
    updateTodo(todo.id, !todo.isDone)
  }

  deleteTodo = () => {
    const {todo, deleteTodo} = this.props
    deleteTodo(todo.id)
  }

  render() {
    const {todo} = this.props

    return (
      <li className="todo">
        <input type="checkbox" checked={todo.isDone} onChange={this.onChangeIsDone} />
        <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
        <button className="delete" onClick={this.deleteTodo}>X</button>
      </li>
    )
  }
}
