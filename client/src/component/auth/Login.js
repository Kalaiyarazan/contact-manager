import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearError, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearError();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter valid email and password', 'danger');
    } else {
      login({ email, password });
    }
  };

  return (
    <div className='form-container'>
      <h1> Login Account</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>

        <input type='submit' value='Login' className='btn bg-primary' />
      </form>
    </div>
  );
};

export default Login;
