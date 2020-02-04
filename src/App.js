import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Header />
        </Route>
        <Route to="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
