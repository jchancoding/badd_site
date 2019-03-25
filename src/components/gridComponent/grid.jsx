import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Push from '../../assets/images/push.png'
import Shirt from '../../assets/images/shirt.jpg'
import H9 from '../../assets/images/h9.png'
import Link from '@material-ui/core/Link';
import { withWidth } from '@material-ui/core';


const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 230,
    },
};

function FormRow(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={Push}
                            title="Push To Start"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h20" component="h2">
                                Push To Start
          </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="outlined" className={classes.button}><Link href={'https://www.instagram.com/pushtostartdesign/?hl=en'} className={classes.link}>
                            Visit
                            </Link></Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={Shirt}
                            title="Badd Shirts"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h20" component="h2">
                                Badd Merch
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="outlined" className={classes.button}><Link href={'https://teespring.com/b-a-d-d-hoodies-for-wildfire#pid=212&cid=5818&sid=front'} className={classes.link}>
                            Visit
                            </Link></Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={H9}
                            title="UpheavalDesigns"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h20" component="h2">
                                UpheavalDesigns
          </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="outlined" className={classes.button}><Link href={'https://upheavaldesigns.bigcartel.com/product/stage-9-track-decal'} className={classes.link}>
                            Visit
                            </Link></Button>
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
    );
}

FormRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

function NestedGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            
            <h1>Referrals</h1>
            <Grid container spacing={8}>
                <Grid container item xs={10} spacing={24}>
                    <FormRow classes={classes} />
                </Grid>
                <Grid container item xs={10} spacing={24}>
                </Grid>
                <Grid container item xs={10} spacing={24}>
                </Grid>
            </Grid>
        </div>
    );
}

NestedGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedGrid);