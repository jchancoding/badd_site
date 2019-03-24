import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>We HOME</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}
