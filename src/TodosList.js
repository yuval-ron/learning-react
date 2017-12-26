import React, { Component } from 'react';
import Todo from './Todo'

export default class TodosList extends Component {
  renderTodos() {
    const {todos, mode, updateTodo, deleteTodo} = this.props

    return Object.values(todos).map((todo, index) => {
      if (mode === "completed" && !todo.isDone)
        return null
      if (mode === "active" && todo.isDone)
        return null
      else
        return <Todo key={index} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    })
  }

  render() {
    return (
      <ul className="todos-list">
        {this.renderTodos()}
      </ul>
    )
  }
}
