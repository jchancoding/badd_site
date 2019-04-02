import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css'

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Referrals from './components/Referrals/Referrals'
import Read from './components/Read/Read'


class App extends Component {
  render() {
    const pageBody = (
      <Router>
        <div>
          <Header />
        </div>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/referrals" component={Referrals} />
            <Route path="/reading" component={Read} />
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    )

    return (
      <div>
        {pageBody}
      </div>
    )
  }
}

export default App
