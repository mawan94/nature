import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import p1 from '../../images/product/1.png'
import p2 from '../../images/product/2.png'
import p3 from '../../images/product/3.png'
import p4 from '../../images/product/4.png'
import p5 from '../../images/product/5.png'
import p6 from '../../images/product/6.png'
import p7 from '../../images/product/7.png'
import p8 from '../../images/product/8.png'
import p9 from '../../images/product/9.png'
import p10 from '../../images/product/10.png'

const styles = theme => ({
    root: {
    }
});

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div style={{padding:'1px',marginLeft:'3px'}} className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <img style={{width:'98%',height:'160px',marginTop:'2px'}} src={p1}/>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:'98%',height:'160px',marginTop:'2px'}} src={p2}/>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:'98%',height:'160px',marginTop:'2px'}} src={p5}/>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:'98%',height:'160px',marginTop:'2px'}} src={p6}/>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:'98%',height:'160px',marginTop:'2px'}} src={p8}/>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:'98%',height:'160px',marginTop:'2px'}} src={p9}/>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:'98%',height:'160px',marginTop:'2px'}} src={p3}/>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:'98%',height:'160px',marginTop:'2px'}} src={p7}/>
                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);