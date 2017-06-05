import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

import './App.css';
import SignUp from './SignUp'
import SignIn from './SignIn'


const App = () => {
  return(
    <BrowserRouter>
      <div>
      <Route exact path="/" render ={() =>(
        <div>
        <Link to={"/SignIn"}> Sign In</Link>
        <br/>
        <Link to={"/SignUp"}> Sign Up</Link>
        </div>
      )}/>

          <Route exact path="/SignIn" component={() => <SignIn/>}/>
          <Route exact path="/SignUp" component={() => <SignUp/>}/>
      </div>
    </BrowserRouter>
  )
}

export default App
