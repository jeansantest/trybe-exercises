export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';

export const login = (login) => ({ type: LOGIN, login });

export const register = (register) => ({ type: REGISTER, register });
