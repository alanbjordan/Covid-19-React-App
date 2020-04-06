import React from 'react';
import StateData from './components/StateData';
import AllStates from './components/AllStates';
import HomePage from './components/HomePage';
import AllCountries from './components/AllCountries';
import './App.css';
import {
  Route, Link,
  BrowserRouter as Router
} from 'react-router-dom';

const App = () => {
    
    // const dataUp = "covid19"
    return (
      <div>
          <nav>
            <a href="/">Home</a> <br></br>
            <a href="/states">Data By U.S. State</a><br></br>
            <a href="/country">Data By Country</a>              
          </nav>
        <h1>COVID-19 Data</h1>
        <Router>
          <Route exact path='/'component={HomePage}/>
          <Route exact path='/country' component={AllCountries}/>
          <Route  exact path='/states'  component={AllStates} />
          <Route exact path='/states/:state?' component={StateData} />
        </Router>
      </div>
    );
  }

export default App;

