import './App.css';
import React, {Component} from 'react';
import Navbar from './Components/Layout/Navbar';
import UserItem from './Components/Users/UserItems';

class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App">
        <Navbar /> 
        <UserItem/>
      </div>
    );

  }
}

export default App;
