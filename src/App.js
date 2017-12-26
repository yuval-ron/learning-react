import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodosList from './TodosList';
import Footer from './Footer';
import './App.css';

export default class App extends Component {
  componentWillMount() {
    const {getTodos} = this.props
    this.setState({ todos: getTodos(), mode: "all" })
  }

  addTodo = (todo) => {
    const {updateTodos} = this.props
    const {todos} = this.state

    const newTodo = {
      id: new Date().toJSON(),
      isDone: false,
      title: todo.title
    }

    todos[newTodo.id] = newTodo

    this.setState({ todos })
    updateTodos(todos)
  }

  updateTodo = (todoId, isDone) => {
    const {updateTodos} = this.props
    const {todos} = this.state

    todos[todoId].isDone = isDone

    this.setState({ todos })
    updateTodos(todos)
  }

  deleteTodo = (todoId) => {
    const {updateTodos} = this.props
    const {todos} = this.state

    delete todos[todoId]

    this.setState({ todos })
    updateTodos(todos)
  }

  changeTab = (activeTab) => {
    this.setState({ mode: activeTab })
  }

  renderTodosList() {
    const {todos, mode} = this.state

    if (this.state.todos) {
      return (
         <TodosList todos={todos} mode={mode} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
       )
    }
  }

  render() {
    const {todos, mode} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO List</h1>
        </header>
        <NewTodoForm addTodo={this.addTodo} />
        {this.renderTodosList()}
        <Footer todos={todos} mode={mode} changeTab={this.changeTab} />
      </div>
    );
  }
}

