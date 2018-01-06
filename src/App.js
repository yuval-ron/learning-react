import React, { Component } from 'react';
import {connect} from 'react-redux'

import {changeActiveTab} from './store/actions/appActions'
import NewTodoForm from './NewTodoForm';
import TodosList from './TodosList';
import Footer from './Footer';
import './App.css';

class App extends Component {
  componentWillMount() {
    const {getTodos, mode} = this.props
    this.setState({ todos: getTodos(), mode })
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
    const {dispatch} = this.props
    dispatch(changeActiveTab(activeTab))
  }

  renderTodosList() {
    const {mode} = this.props
    const {todos} = this.state

    if (this.state.todos) {
      return (
         <TodosList todos={todos} mode={mode} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
       )
    }
  }

  render() {
    const {mode} = this.props
    const {todos} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">todos</div>
        </header>
        <NewTodoForm addTodo={this.addTodo} />
        {this.renderTodosList()}
        <Footer todos={todos} mode={mode} changeTab={this.changeTab} />
      </div>
    );
  }
}

export default connect((store) => {
  return {
    mode: store.app.mode,
    // todos: store.todos.collection
  }
})(App)
