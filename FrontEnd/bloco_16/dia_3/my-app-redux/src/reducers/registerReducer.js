import { REGISTER } from '../actions';

const INITIAL_STATE = [];

function registerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER:
      return [...state, action.register];
    default:
      return state;
  }
}

export default registerReducer;
