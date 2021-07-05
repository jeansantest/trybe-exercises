import {
  ADD_TODO,
  COMPLETED_TODO,
  SELECTED_TODO,
  COMPLETED_ORGANIZE,
} from '../actions';

const INITIAL_STATE = {
  todo: [],
  organize: 'all',
};

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COMPLETED_ORGANIZE:
      return {
        ...state,
        todo: state.todo.filter((e) => e.completed),
        organize: 'completed',
      };
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
