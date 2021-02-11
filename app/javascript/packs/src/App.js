import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';
import Book from './components/book/Book.js';
import Navbar from './components/home/Navbar';
import Author from './components/Author';

function App() {
  return (
    <div id='entry'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/books/:bookId'>
            <Book />
          </Route>
          <Route exact path='/authors/:authorId'>
            <Author />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
