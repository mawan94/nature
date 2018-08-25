import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'

import {changePage} from './actions'
import {styles} from './layout'
import {Home} from '../home/container/home'
import {Me} from "../me/me";
import {Product} from '../product/product'
import {route} from "../common/common";


class Main extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        changePage: PropTypes.func.isRequired,
        currentPage: PropTypes.string.isRequired
    };


    handleChange = (event, value) => {
        this.props.changePage(value);
        this.props.history.push(route[value])
    };


    render() {
        const {classes, currentPage} = this.props;
        console.log(currentPage);
        return (
            <div>
                <div className={classes.root}>
                    <AppBar  position="fixed">
                        <Toolbar>
                            <Typography variant="title"  color="inherit" className={classes.flex}>
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>

                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/product' component={Product}/>
                        <Route path='/me' component={Me}/>
                    </Switch>
                </div>

                <div style={{
                    position: 'fixed',
                    width: '100%',
                    bottom: '0',
                }}>
                    <BottomNavigation
                        onChange={this.handleChange}
                        showLabels={true}
                        className={classes.root}
                    >
                        <BottomNavigationAction label="Home" icon={<RestoreIcon/>}/>
                        <BottomNavigationAction label="Favorites"  icon={<FavoriteIcon/>}/>
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
                    </BottomNavigation>

                </div>
            </div>
        );
    }
}

const main =  connect(
    (state) => ({currentPage: state.currentPage}),
    {changePage}
)(withStyles(styles)(Main));
export default withRouter(main);