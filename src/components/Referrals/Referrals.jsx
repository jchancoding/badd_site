import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Push from '../../assets/images/push.png'
import Shirt from '../../assets/images/shirt.jpg'
import H9 from '../../assets/images/h9.png'
import Link from '@material-ui/core/Link'
import { withWidth } from '@material-ui/core'


const styles = {
  media: {
    height: 230,
  },
}

class Referrals extends React.PureComponent {
  renderCards = () => {
    const { classes } = this.props
    const referrals = [
      {
        title: 'Push To Start',
        image: Push,
        link: ''
      },
      {
        title: 'Badd Shirts',
        image: Shirt,
        link: ''
      },
      {
        title: 'UpheavalDesigns',
        image: H9,
        link: ''
      }
    ]

    let referralCards = [];

    referrals.forEach((referral) => {
      referralCards.push(
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={referral.image}
                title={referral.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h4">
                  {referral.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )
    })

    return referralCards
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <h1>Referrals</h1>
        <Grid container spacing={40} justify="center" className={classes.referralCardsContainer}>
          {this.renderCards()}
        </Grid>
      </div>
    )
  }
}

Referrals.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Referrals)