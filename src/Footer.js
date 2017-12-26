import React, { Component } from 'react';

export default class Footer extends Component {
  renderMessage() {
    const {todos} = this.props
    const activeTodosLength = Object.values(todos).filter(todo => !todo.isDone).length

     return <div className="message">{activeTodosLength} items left</div>
  }

   onChangeֿTab = (e) => {
    const {changeTab} = this.props
    const activeTab = e.target.id

    changeTab(activeTab)
  }
  render() {
    const {mode} = this.props

    return (
      <div>
        <footer className="footer">
          {this.renderMessage()}
          <ul className="filters">
            <li id="all" className={`tab ${mode === "all" ? 'active' : ''}`} onClick={this.onChangeֿTab}>All</li>
            <li id="active" className={`tab ${mode === "active" ? 'active' : ''}`} onClick={this.onChangeֿTab}>Active</li>
            <li id="completed" className={`tab ${mode === "completed" ? 'active' : ''}`} onClick={this.onChangeֿTab}>Completed</li>
          </ul>
        </footer>
      </div>
    )
  }
}
