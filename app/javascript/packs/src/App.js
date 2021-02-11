import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <div id='entry'>
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
