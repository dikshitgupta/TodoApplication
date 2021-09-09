import './App.css';
import Header from './MyComponents/Header.jsx'
import { Todos } from './MyComponents/Todos.jsx'
import { Footer } from './MyComponents/Footer.jsx'
import React, { useState, useEffect } from 'react';
import { About } from './MyComponents/About.jsx'
import { Login } from './MyComponents/Login.jsx';
import { Error } from './MyComponents/Error.jsx';
import { Logout } from './MyComponents/Logout.jsx';
import { AuthenticatedRoute } from './MyComponents/AuthenticatedRoute'
import Hello from './FirstComponent/Hello.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        {/* <Header title="Todos List" /> */}

        <Switch>
          <Route exact path="/">
            <Header title="Todos List" />
            <Login />
          </Route>

          <AuthenticatedRoute exact path="/home/:username" render={() => {
            return (
              <>
                 <Header title="Todos List" />
                <Todos/>
              </>
            )
          }}>
          </AuthenticatedRoute>

          <Route exact path="/about">
              <Header title="Todos List" />
               <About />
          </Route>

          <Route exact path="/hello" component={Hello} />

          <Route exact path="/logout">
            <Header title="Todos List" />
            <logout/>
          </Route> 

          <Route path="/" component={Error} />

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;


