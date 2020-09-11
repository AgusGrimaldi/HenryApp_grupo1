import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import {Route} from 'react-router-dom';
import Register from './components/Landing/Register.js'
// import {Redirect} from 'react-router';
import Landing from './components/Landing/Landing.js';
function App() {
  return (
    <div className="App">
      <Route  exact path='/'component={Landing} />
      <Route exact path = '/register' component={Register}/>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    algo: state.algo
  }
}


export default connect(mapStateToProps, null)(App);
