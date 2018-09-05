import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StoreIcon from '@material-ui/icons/Store';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'

import {styles} from './layout'
import {Home} from '../home/container/home'
import {My} from "../my/my";
import {Cart} from "../cart/cart";
import Product from '../product/container/product.js'
import {route} from "../common/common";
import {Detail} from "../detail/detail";


class Main extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };


    handleChange = (event, value) => {
        this.props.history.push(route[value])
    };


    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.root}>
                    <AppBar  position="fixed">
                        <Toolbar>
                            <Typography variant="title"  color="inherit" className={classes.flex}>
                                大自然生态水族
                            </Typography>
                            <Button onClick={()=>alert('todo')} color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>

                <div style={{backgroundColor:'#F7F7F7'}}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/product' component={Product}/>
                        <Route path='/cart' component={Cart}/>
                        <Route path='/my' component={My}/>
                        <Route path='/detail/productid' component={Detail}/>
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
                        <BottomNavigationAction label="主页" icon={<HomeIcon/>}/>
                        <BottomNavigationAction label="商城"  icon={<StoreIcon/>}/>
                        <BottomNavigationAction label="购物车" icon={<ShoppingCartIcon/>}/>
                        <BottomNavigationAction label="我" icon={<AccountCircleIcon/>}/>
                    </BottomNavigation>

                </div>
            </div>
        );
    }
}

const main =  connect(
    (state) => ({currentPage: state.currentPage}),
    {}
)(withStyles(styles)(Main));
export default withRouter(main);