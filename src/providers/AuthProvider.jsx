import React, { Component, createContext } from 'react';

export const AuthContext = createContext({ user: null });

class AuthProvider extends Component {
  state = { user: null };

  login = (email, password) => {
    if (email === 'cristian@udea.edu.co' && password === '1234') {
      const user = { email, password };
      this.setState({ user });
    }
  };

  render() {
    const { user } = this.state;
    const login = this.login;
    const { children } = this.props;
    return (
      <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
