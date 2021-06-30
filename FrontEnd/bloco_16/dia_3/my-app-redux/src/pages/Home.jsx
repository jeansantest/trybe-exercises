import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      Sistema de cadastramento:
      <p>
        <Link to="/login">Login</Link>
      </p>
      <p>
        <Link to="/register">Registrar</Link>
      </p>
    </div>
  );
};

export default Home;
