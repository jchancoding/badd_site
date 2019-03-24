import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

class Header extends React.Component {
    state = {
        open: false
    };

    handleToggle = () => {
        this.setState(state => ({
            open: !state.open
        }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;
        const navBar = (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            BADD
                        </Typography>
                        <Button
                            color="inherit"
                            buttonRef={node => {
                            this.anchorEl = node;
                        }}
                            aria-owns={open
                            ? 'menu-list-grow'
                            : undefined}
                            aria-haspopup="true"
                            onClick={this.handleToggle}>
                            Pop Menu
                        </Button>
                        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                            {({TransitionProps, placement}) => (
                                <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{
                                    transformOrigin: placement === 'bottom'
                                        ? 'center top'
                                        : 'center bottom'
                                }}>
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleClose}>
                                            <MenuList>
                                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <Button color="inherit">Calendar</Button>
                        <Button color="inherit">Gallery</Button>
                        <Button color="inherit">Maps</Button>
                        <Button color="inherit">Reading</Button>
                        <Button color="inherit">Recs</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );

        return (
            <div>
                {navBar}
            </div>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);