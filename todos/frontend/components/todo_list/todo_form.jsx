import React from 'react';
import {connect} from 'react-redux';
import {receiveTodo} from '../../actions/todo_actions';
import UniqueID from "../../util/unique_id";
import TodoList from "../todos/todo_list";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", id: UniqueID() };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const {title, body} = this.state;
    this.props.receiveTodo(this.state);
    this.setState({
      title: "",
      body: "",
      id: UniqueID()
    });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input 
            type="textarea" 
            onChange={this.update('title')}
            value={this.state.title}
            />
        </label>
        <br/>
        <label>
          Description
          <input 
          type="textarea" cols="4" rows="8" 
          onChange={this.update('body')}
          value={this.state.body}
          />
        </label>
        <br/>
        <input type="submit" value="Add New Todo"/>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
  }
};

export default connect(null, mapDispatchToProps)(TodoForm);