import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import './App.css';
import SignUp from './SignUp'
import SignIn from './SignIn'


const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Link to={"/SignIn"}> Sign In</Link>
        <br/>
        <Link to={"/SignUp"}> Sign Up</Link>
        <Switch>
          <Route exact path="/SignIn" component={() => <SignIn/>}/>
          <Route exact path="/SignUp" component={() => <SignUp/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
