import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';

export const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={({ target }) => setPassword(target.value)}
        value={password}
      />
      <Link to="/cliente" onClick={() => props.login({ email, password })}>
        Entrar
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(login(e)),
});

export default connect(null, mapDispatchToProps)(Login);
