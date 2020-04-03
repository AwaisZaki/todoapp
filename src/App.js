import React from 'react';
import './App.css';
import Todo from './Components/Todo/Todo'
import { CssBaseline } from '@material-ui/core'
import Home from './Home'
import Login from './Components/Login/Login'
import Signup from './Components/Singup/Signup'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
   return (
    <>
      <CssBaseline />
      <BrowserRouter >
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/todo' component={Todo} />
        </Switch>
      </BrowserRouter>
      </>
      );
}
export default App;
