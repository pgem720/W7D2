import React from "react";
import { connect } from 'react-redux';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: ""};
  }
  
  render () {
    return (< li > {this.props.todo.title}</li >)
  }
}

export default TodoListItem;