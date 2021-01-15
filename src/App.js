import './App.css';
import React, {useState, Fragment} from 'react';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import Alert from './Components/Layout/Alert';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/Pages/About';
import GitHubState from './context/github/GithubState';


const App = () =>  {
  const [alert, setAlert] = useState(null);


  // Set alert
 const showAlert = (msg, type) => {
    setAlert({msg, type})
    setTimeout(() => setAlert(null), 5000)
  }


    return (
      <GitHubState>
      <Router>
      <div className="App">
        <Navbar /> 
        <div className="container"> 
          <Alert alert={alert}/>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                  <Search 
          setAlert={showAlert}
          />
          <Users />
              </Fragment>
            )}/>

          <Route exact path='/about' component={About}/>

          <Route exact path='/user/:login' component={User} />
          </Switch>
        
        </div>
       
      </div>
      </Router>
      </GitHubState>
    );

  
}

export default App;
