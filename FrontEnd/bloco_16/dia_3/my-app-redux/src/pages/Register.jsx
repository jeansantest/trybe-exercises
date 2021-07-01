import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions';

const Register = (props) => {
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [name, setName] = React.useState('');
  if (!props.login) {
    return <div>Login não efetuado</div>;
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="Idade"
        onChange={({ target }) => setAge(target.value)}
        value={age}
      />
      <input
        type="text"
        placeholder="Senha"
        onChange={({ target }) => setName(target.value)}
        value={name}
      />
      <button
        onClick={() => {
          props.register({ email, age, name });
          setEmail('');
          setAge('');
          setName('');
        }}
      >
        Registrar
      </button>
      <Link to="/cliente">Clientes cadastrados</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  login: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  register: (e) => dispatch(register(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
