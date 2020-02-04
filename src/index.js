import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import UserProvider from './providers/UserProvider';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
