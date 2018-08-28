import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';


require('../layout.css');

class Products extends Component {

    render() {
        return (
            <div className='products-content-container'>
                <div className='head-img-container'>
                    <img className='head-img'  src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057"/>
                </div>
                <div className="product-container">
                    <Grid container spacing={0}>
                        <Grid onClick={()=>console.log(123)} item xs={6}>
                            <div className='product-item-container'>
                                <div className='product-img-wrapper'>
                                    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057"
                                         className="img-circle product-img"/>
                                </div>
                                <div style={{marginTop:'10px'}}>
                                    <span style={{fontSize:'14px'}}>商品标题简介啊啊</span>
                                </div>
                                <div style={{marginTop:'6px'}}>
                                    <span style={{color:'red'}}>￥123</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid onClick={()=>console.log(123)} item xs={6}>
                            <div className='product-item-container'>
                                <div className='product-img-wrapper'>
                                    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057"
                                         className="img-circle product-img"/>
                                </div>
                                <div style={{marginTop:'10px'}}>
                                    <span style={{fontSize:'14px'}}>商品标题简介啊啊</span>
                                </div>
                                <div style={{marginTop:'6px'}}>
                                    <span style={{color:'red'}}>￥123</span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }
}

export default Products;
