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
                            <Card  className='card'>
                                <CardMedia
                                    className='card-img'
                                    image="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057"
                                    title="Contemplative Reptile"
                                />
                                <div className='card-title-container'>
                                    <span className='card-title-text'>title</span>
                                </div>
                                <p className='card-content'>是科技博客看看见珂珂珂珂珂珂珂珂珂珂觉得换个说法的否给市公司是德国时代和肉</p>
                                {/*<p className='card-content'>是VSj都会ffffffffffffffffffffffffffff觉得换个说法的否给市公司是德国时代和肉...</p>*/}
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className='card'>
                                <CardMedia
                                    className='card-img'
                                    image="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057"
                                    title="Contemplative Reptile"
                                />
                                <div className='card-title-container'>
                                    <span className='card-title-text'>title</span>
                                </div>
                                <p className='card-content'>是VSj都会觉得换oij个说法的否给市公司是德国时代和肉igiigy</p>
                            </Card>
                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }
}

export default Products;