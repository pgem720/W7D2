
export default function allTodos(state) {
  const todos = Object.keys(state.todos).map(key => {
    return state.todos[key];
  })
  return todos;
}