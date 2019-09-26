import React from "react";
import TodoForm from "../todo_list/todo_form";

const TodoList = ( { todos = [], receiveTodo}) => {
  const todoitems = todos.map(todo => {
      return (<li key={todo.id}>
        {todo.title}
        <div>{todo.body}</div>
      </li>
    )})
  
  return (
    <div>
      <h4>ToDos</h4>
      <ul>
        {todoitems}
      </ul>
      <TodoForm />
    </div>
  )
}

export default TodoList;