import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Read.css'

class Read extends Component {
  render() {  
    return (
      <Paper square="true">
          <Grid container justify="center">
              <Grid item md={12}>
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vRs6qTSfHxZBbIEX79VVxY-kXCI9PXxA3OB9Fys996l00I4dcD1d6cMZXY6UJHW5GEVTMg89IQ1rDZf/pub?embedded=true"></iframe>
              </Grid>
          </Grid>
      </Paper>
    )
  }
}

Read.propTypes = {

};

export default Read;