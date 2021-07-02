import { ADD_TODO, COMPLETED_TODO, SELECTED_TODO } from '../actions';

const INITIAL_STATE = {
  todo: [],
};

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          { text: action.todo, selected: false, completed: false },
        ],
      };
    case SELECTED_TODO:
      return {
        ...state,
        todo: state.todo.map((e) =>
          e.text === action.selected
            ? { ...e, selected: true }
            : e && e.text !== action.selected && { ...e, selected: false }
        ),
      };
    case COMPLETED_TODO:
      return {
        ...state,
        todo: state.todo.map((e) =>
          e.selected ? { ...e, completed: !e.completed } : e
        ),
      };
    default:
      return state;
  }
}

export default todoReducer;
