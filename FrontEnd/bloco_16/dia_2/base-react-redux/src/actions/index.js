export const ADD_TODO = 'ADD_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const SELECTED_TODO = 'SELECTED_TODO';
// export const REGISTER = 'REGISTER';

export const addTodo = (todo) => ({ type: ADD_TODO, todo });

export const completedTodo = (todo) => ({
  type: COMPLETED_TODO,
  completedTodo: todo,
});

export const selectedTodo = (selected) => ({ type: SELECTED_TODO, selected });
// export const register = (register) => ({ type: REGISTER, register });
