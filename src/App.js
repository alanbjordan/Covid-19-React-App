import React from 'react';
import StateData from './components/StateData';
import AllStates from './components/AllStates';
import './App.css';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

const App = () => {
    
    // const dataUp = "covid19"
    return (
      <div>
        <h1>US Covid19 Current Data</h1>
        <Router>
          <Route exact path='/' component={AllStates} />
          <Route exact path='/states/:state?' component={StateData} />
        </Router>

      </div>
    );
  }

export default App;

