import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography';
import './Home.css'

class Home extends Component {
  render() {
    return (
        <div>
          <div classes="alignCenter jumbotron" className="jumbotron">
            <Typography className="welcome-text" align="center" component="h1" variant="h3" color="inherit" gutterBottom>
                Bay Area Discord Drivers
            </Typography>
            <Typography className="welcome-subtext" align="center"variant="h5" color="inherit" paragraph>
                Welcome to the bay area car enthusiast hub!
            </Typography>
          </div>
        </div>
    )
  }
}

Home.propTypes = {
};

export default Home;