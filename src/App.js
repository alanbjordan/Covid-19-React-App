import React from 'react';
import StateData from './components/StateData';
import AllStates from './components/AllStates';
import HomePage from './components/HomePage';
import AllCountries from './components/AllCountries';
import CountryData from './components/CountryData';
import './App.css';
import {
  Route, Link,
  BrowserRouter as Router
} from 'react-router-dom';

const App = () => {

    return (
      <div>
        <div>
            <nav>
              <a href="/">Global Data</a> <br></br>
              <a href="/country">Data By Country</a><br></br>    
              <a href="/states">Data By U.S. State</a>
            </nav>
        </div>
        <hr />
        <Router>
          <Route exact path='/'component={HomePage}/>
          <Route exact path='/country' component={AllCountries}/>
          <Route exact path='/country/:country?' component={CountryData} />
          <Route  exact path='/states'  component={AllStates} />
          <Route exact path='/states/:state?' component={StateData} />
        </Router>
      </div>
    );
  }

export default App;

