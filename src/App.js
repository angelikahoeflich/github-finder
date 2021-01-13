import './App.css';
import React, {Component} from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';

class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App">
        <Navbar /> 
        <div className="container"> 
        <Users/></div>
       
      </div>
    );

  }
}

export default App;
