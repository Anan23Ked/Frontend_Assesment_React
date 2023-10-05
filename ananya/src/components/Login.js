import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Home from './Home';

const Login = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ username: '', password: '' });
  const [authenticated, setAuthenticated] = useState(false);


  const adminUser = {
    username: 'user',
    password: 'pass'
  };

  const [error, setError] = useState('');


  const submitForm = (e) => {
    e.preventDefault();
    console.log(details);
    if (details.username === adminUser.username && details.password === adminUser.password) {
      navigate('/home');
      setAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
    } else {
      console.log('Incorrect Details');
      setError('Incorrect Details');
    }
  };

  const handleTryAgain = () => {
    setError('');
    setDetails({ username: '', password: '' });
  };

  return (
    <div className="box">
      <div className="form">
        <form onSubmit={submitForm}>
          <h2>Login</h2>
          {error !== '' && (
            <div className="error">
              {error}
              <button type="button" onClick={handleTryAgain}>Try Again?</button>
            </div>
          )}
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="off"
              onChange={(e) => setDetails({ ...details, username: e.target.value })}
              value={details.username}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
              value={details.password}
            />
          </div>
          <div className="submitbtn">
            <input type="submit" />
          </div>
          <p className="link">
            <button id='link'>Forgot password ? </button>Or<button id='link'>Sign Up</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
