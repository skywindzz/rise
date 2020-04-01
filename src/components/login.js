import React from 'react';
import Auth from '../utils/auth';

const Login = () => {
  const auth = new Auth();
  const { isAuthenticated } = auth;

  if (isAuthenticated()) {
    return (
      <button className='loginStyle' onClick={auth.logout}>
        Logout
      </button>
    );
  } else {
    return (
      <button className='loginStyle' onClick={auth.login}>
        Login
      </button>
    );
  }
};

export default Login;
