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
        {todo.isDone ?
          <div className="checkbox done" onClick={this.onChangeIsDone}></div>
          :
          <div className="checkbox" onClick={this.onChangeIsDone}></div>
        }
        <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
        <div className="delete" onClick={this.deleteTodo}>X</div>
      </li>
    )
  }
}
