import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import head1 from '../../images/subject/yu.png'
import head2 from '../../images/subject/deng.png'
import head3 from '../../images/subject/yugang.png'

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
                    <img style={{width:'98%',height:'160px'}} src={head1}/>
                </Grid>
                <Grid item xs={6}>
                    <img style={{width:'98%',height:'160px'}} src={head2}/>
                </Grid>
                <Grid item xs={12}>
                    <img style={{width:'99.2%',marginTop:'3px',height:'180px'}} src={head3}/>
                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);