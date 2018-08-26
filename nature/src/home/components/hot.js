import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import p1 from '../../images/product/1.png'
import p2 from '../../images/product/2.png'
import p3 from '../../images/product/3.png'
import p5 from '../../images/product/5.png'
import p6 from '../../images/product/6.png'
import p7 from '../../images/product/7.png'
import p8 from '../../images/product/8.png'
import p9 from '../../images/product/9.png'
require('../layout.css');


const styles = theme => ({
    root: {}
});
class Hot extends Component{
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render(){
        const {classes} = this.props;

        return (
            <div style={{padding: '1px', marginLeft: '3px'}} className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        {/*<img className='hot-img'*/}
                             {/*src='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057'/>*/}
                        <img onClick={()=>{console.log(111)}} className='hot-img' src={p1}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img className='hot-img' src={p2}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img className='hot-img' src={p5}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img className='hot-img' src={p6}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img className='hot-img' src={p8}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img className='hot-img' src={p9}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img className='hot-img' src={p3}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img className='hot-img' src={p7}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(Hot);