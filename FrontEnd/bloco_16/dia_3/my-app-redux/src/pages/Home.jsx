import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <Link to="/login">Login</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
