import React, { Component } from 'react';

export default class Footer extends Component {
  renderMessage() {
    const {todos} = this.props
    const activeTodosLength = Object.values(todos).filter(todo => !todo.isDone).length

     return <div>{activeTodosLength} items left</div>
  }

   onChangeֿTab = (e) => {
    const {changeTab} = this.props
    const activeTab = e.target.className

    changeTab(activeTab)
  }
  render() {
    const {mode} = this.props
    return (
      <div>
        <footer className="footer">
          {this.renderMessage()}
          <ul className="filters">
            <li className="all" onClick={this.onChangeֿTab.bind(this)}>All</li>
            <li className="active" onClick={this.onChangeֿTab.bind(this)}>Active</li>
            <li className="completed" onClick={this.onChangeֿTab.bind(this)}>Completed</li>
           </ul>
        </footer>
      </div>
    )
  }
}
//<li className={`all ${mode === "all" ? 'activeTab' : ''}`} onClick={this.onChangeֿTab.bind(this)}>All</li>
          //  <li className={`active ${mode === "active" ? 'activeTab' : ''}`} onClick={this.onChangeֿTab.bind(this)}>Active</li>
            //<li className={`completed ${mode === "completed" ? 'activeTab' : ''}`} onClick={this.onChangeֿTab.bind(this)}>Completed</li>
