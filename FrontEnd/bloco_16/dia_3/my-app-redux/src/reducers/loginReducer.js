import { LOGIN } from '../actions';

const INITIAL_STATE = {};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return action.login;
    default:
      return state;
  }
}

export default loginReducer;
