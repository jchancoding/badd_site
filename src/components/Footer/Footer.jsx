import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    appBar: {
      position: 'relative',
    },
    toolbarTitle: {
      flex: 1,
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    footer: {
      marginTop: theme.spacing.unit * 8,
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit * 6}px 0`,
    },
  });

const footerColumns = [
    {
      title: 'Badd Info',
      description: ['FAQ', 'About us', 'Recommendations'],
    },
    {
      title: 'Media',
      description: ['Gallery'],
    },
    {
      title: 'Other',
      description: ['Maps', 'Calendar'],
    },
    {
      title: 'Rules',
      description: ['Guidelines'],
    },
  ];

class Footer extends React.PureComponent {
  
  render() {
    const { classes } = this.props;
    
    return (
      <div className="footer-container">
        <footer className={classNames(classes.footer, classes.layout)}>
          <Grid container spacing={32} justify="space-evenly">
            {footerColumns.map(footer => (
              <Grid item xs key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                {footer.description.map(item => (
                  <Typography key={item} variant="subtitle1" color="textSecondary">
                    {item}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);