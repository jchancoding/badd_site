import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { 
  BrowserRouter as Router, 
  Route, 
  withRouter,
  Switch,
  Redirect 
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/homeComponent/home.jsx';

class App extends Component {
  render() {
      const pageBody = (
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
        </Router>
      );
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

  return (
      <div>
        { pageBody }
      </div>
    )
  }
}

export default App;
