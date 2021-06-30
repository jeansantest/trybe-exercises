import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      Faça seu login: <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
