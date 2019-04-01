import React from 'react'
import Typography from '@material-ui/core/Typography';
import './Home.css'
import Grid from '@material-ui/core/Grid';

class Home extends React.PureComponent {
  render() {
    return (
      <Grid item xs={12}>
        <div classes="alignCenter jumbotron" className="jumbotron">
          <Typography className="welcome-text" align="center" component="h1" variant="h3" color="inherit" gutterBottom>
              Bay Area Discord Drivers
          </Typography>
          <Typography className="welcome-subtext" align="center"variant="h5" color="inherit" paragraph>
              Welcome to the bay area car enthusiast hub!
          </Typography>
        </div>
      </Grid>
    )
  }
}

Home.propTypes = {
};

export default Home;