import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Client({ login, registers }) {
  if (!login.email && !login.password) {
    return (
      <div>
        <p>Login não efetuado</p>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/register">Registrar</Link>
        </p>
      </div>
    );
  }
  if (registers.length < 1) {
    return (
      <div>
        Sem clientes cadastrados <Link to="/register">Cadastre-se</Link>
      </div>
    );
  }
  return (
    <div>
      <Link to="/register">Cadastrar</Link>
      <div>
        {registers.map((register, index) => {
          return (
            <div key={register.email}>
              <p>ID de registro: {index}</p>
              <p>{register.email}</p>
              <p>{register.name}</p>
              <p>{register.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  login: state.loginReducer,
  registers: state.registerReducer,
});

export default connect(mapStateToProps)(Client);
