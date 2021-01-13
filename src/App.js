import './App.css';
import React, {Component} from 'react';
import Navbar from './Components/Layout/Navbar';

class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App">
        <Navbar 
        title="Github Finder" 
        icon="fab fa-github"/> 
      </div>
    );

  }
}

export default App;
