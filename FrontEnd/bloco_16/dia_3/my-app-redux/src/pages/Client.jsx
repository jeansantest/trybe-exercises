import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Client({ login }) {
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
  return <div>Passou</div>;
}

const mapStateToProps = (state) => ({
  login: state.loginReducer,
});

export default connect(mapStateToProps)(Client);
