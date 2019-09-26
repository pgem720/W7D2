import React from "react";
import TodoListContainer from "./todos/todo_list_container";

const App = () => {
  return (
    <TodoListContainer store={store}>
      <main className="app">
        <h1>Todo List</h1>
      </main>
    </TodoListContainer>
  );
};

export default App;