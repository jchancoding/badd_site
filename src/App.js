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

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import Home from './components/homeComponent/Home.jsx';
import Header from './components/headerComponent/header.jsx';
import Footer from './components/footerComponent/footer.jsx';
import Grid from './components/gridComponent/grid.jsx';
import Read from './components/readComponent/read.jsx';

const palette = {
  primary: { main: '#004D40' },
  secondary: { main: '#5D4037' }
};
const themeName = 'Aqua Deep Millbrook Dog';
const theme = createMuiTheme({ palette, themeName });
class App extends Component {
  render() {
      const pageBody = (
        <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header />
          </div>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/grid" component={Grid} />
              <Route path="/reading" component={Read} />
            </Switch>
          </div>
          <div>
            <Footer />
          </div>
        </Router>
        </MuiThemeProvider>
      );

  return (
      <div>
        { pageBody }
      </div>
    )
  }
}

export default App;
