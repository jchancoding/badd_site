import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import joePic from '../../assets/home/joe.png'
import './home.css'
class Home extends Component {
    
    render() {
      const { classes } = this.props;
        return (
            <div>
              <div classes="alignCenter jumbotron" className="jumbotron">
                  {/* <img src={joePic} alt="Honda Fit Image"/> */}
                  <Typography align="center" component="h1" variant="h3" color="inherit" gutterBottom>
                      Bay Area Discord Drivers
                  </Typography>
                  <Typography align="center"variant="h5" color="inherit" paragraph>
                      Welcome to the bay area car enthusiast hub!
                  </Typography>
              </div>
            </div>
        )
    }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Home;