import React, { Component } from 'react';
import Navbar from './components/Navbar';
import User from './components/User';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Navbar title = "User App 2"/>
      <hr/>
      <User
        name = "Alihan Bayrak"
        
        department = "Web developer"
      />
      <User
        name = "Yasin Talha Bayrak"
        salary = "0"
        department = "Student"
      />
      </div>
      
    );
  }
}

export default App;
