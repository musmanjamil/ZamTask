import { useEffect } from 'react'
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login"
import Profile from './components/Profile'
import Register from './components/Register'

import ProtectedRoutes from "./components/route/ProtectedRoutes"
import {loadUser} from "./actions/userActions"
import store from './store'


import './App.css';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  },[])

  return (
    <Router>
    <div className="App">
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <ProtectedRoutes path='/' component={Profile} />
    </div>
    </Router>

  );
}

export default App;
