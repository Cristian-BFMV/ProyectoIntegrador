import React, { Component, createContext } from 'react';
import { AuthContext } from './AuthProvider';

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  render() {
    const { children } = this.props;
    return (
      <AuthContext.Consumer>
        {({ user }) => (
          <UserContext.Provider value={user}>{children}</UserContext.Provider>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default UserProvider;
