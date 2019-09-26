import todosReducer from "./todos_reducer";
import { combineReducers } from 'redux';

// export default function (state = {}, action) {

//   return {
//     todos: todosReducer(state.todos, action)
//   };
// }

export default combineReducers({
   todos: todosReducer, 
  });
