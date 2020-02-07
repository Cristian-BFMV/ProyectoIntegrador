import React, { useState, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleChange = (event, setValue) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div className="form-container">
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={event => handleChange(event, setEmail)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={event => handleChange(event, setPassword)}
          />
        </label>
        <button className="signin-btn">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
