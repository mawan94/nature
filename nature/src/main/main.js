import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

import {changePage} from './actions'
import {styles} from './layout'

class Main extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        changePage: PropTypes.func.isRequired
    };
//https://www.npmjs.com/package/reactjs-swiper
    handleChange = (event, value) => {
        this.props.changePage(value);
    };

    render() {
        const { classes,page } = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <div style={{marginTop:'80px'}}>body....</div>
                <div style={{marginTop:'80px'}}>body....</div>
                <div style={{marginTop:'80px'}}>body1....</div>
                <div style={{marginTop:'80px'}}>body.2...</div>
                <div style={{marginTop:'80px'}}>body.3...</div>
                <div style={{marginTop:'80px'}}>body..5..</div>
                <div style={{marginTop:'80px'}}>body..5..</div>
                <div style={{marginTop:'80px'}}>body..5..</div>
                <div style={{marginTop:'80px'}}>body..5..</div>
                <div style={{marginTop:'80px'}}>body..124.</div>
                <div style={{marginTop:'80px'}}>body..5..</div>
                <div style={{marginTop:'80px'}}>body..213.</div>
                <div style={{marginTop:'80px'}}>body..5..</div>

                <div style={{position: 'fixed', width: '100%',border: '1px solid red', bottom: '0', boxSizing: 'border-box'}}>
                    <BottomNavigation
                        value={page}
                        onChange={this.handleChange}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </div>
            </div>
        );
    }
}
export default connect(
    (state) => ({state : state.page}),
    {changePage}
)(withStyles(styles)(Main));
