import React, {Component} from 'react'
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

require('./layout.css');

export class Cart extends Component {
    state = {
      color:'#fff'
    };

    handleClick = () => {
    };

    render() {
        return (
            <div style={{marginTop: '56px',height:'100%'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <span>我的购物车</span>
                </div>

                <div style={{display:'flex',flexDirection:'row',width:'100%',height:'102px',border:'1px solid red'}}>
                    <div style={{margin:'40px 5px 5px',opacity:'0.7',backgroundColor:'red',width:'20px',height:'20px',border:'1px solid gray',borderRadius:'5px'}}/>
                    <div className='product-img-wrapper'>
                        <img
                            src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057"
                            className="img-circle product-img"/>
                    </div>
                    <div className='product-name-wrapper' style={{backgroundColor:'#e7e7e7'}}>
                        <span style={{fontSize:'16px',fontWeight:'bold'}}>商品safsaf萨达asfa非官方的三国杀按时发名称商品名称商品名称aaad</span>
                    </div>
                    <div style={{width:'30%',height:'66px',border: '1px solid yellow'}}>
                        <div>
                            <span style={{margin:'0 5px',float:'right',fontSize:'16px',color:'red'}}>￥999.00</span>
                        </div>
                        <div>
                            <del style={{margin:'0 5px',float:'right'}}>￥1130.00</del>
                        </div>
                    </div>
                </div>



                {/*<FormControl component="fieldset">*/}
                    {/*/!*<FormLabel component="legend">Assign responsibility</FormLabel>*!/*/}
                    {/*<FormGroup style={{padding:'0 10px'}}>*/}
                        {/*<FormControlLabel*/}
                            {/*control={*/}
                                {/*<Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad"/>*/}
                            {/*}*/}
                            {/*label={*/}
                                {/*<div className='cart-item-wrapper'>*/}
                                    {/*<div className='product-img-wrapper'>*/}
                                        {/*<img*/}
                                            {/*src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057"*/}
                                            {/*className="img-circle product-img"/>*/}
                                    {/*</div>*/}

                                    {/*<div style={{height:'100px',border:'1px solid red',float: 'left'}}>*/}
                                            {/*<div style={{border:'1px solid green',width:'70%'}}>*/}
                                                {/*<span>商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题</span>*/}
                                            {/*</div>*/}
                                            {/*<div style={{border:'1px solid yellow',width:'20%'}}>*/}
                                                {/*<div><span>￥ 10.00</span></div>*/}
                                                {/*<div><del>￥ 30.00</del></div>*/}
                                            {/*</div>*/}
                                        {/*/!*<div>2</div>*!/*/}
                                        {/*/!*<div>3</div>*!/*/}
                                    {/*</div>*/}
                                    {/*/!*http://www.17sucai.com/pins/25650.html  样式地址*!/*/}
                                {/*</div>*/}
                            {/*}*/}
                        {/*/>*/}
                        {/*<FormControlLabel*/}
                            {/*control={*/}
                                {/*<Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason"/>*/}
                            {/*}*/}
                            {/*label={<div>product2</div>}*/}
                        {/*/>*/}
                        {/*<FormControlLabel*/}
                            {/*control={*/}
                                {/*<Checkbox*/}
                                    {/*checked={antoine}*/}
                                    {/*onChange={this.handleChange('antoine')}*/}
                                    {/*value="antoine"*/}
                                {/*/>*/}
                            {/*}*/}
                            {/*label={<div>product3</div>}*/}
                        {/*/>*/}
                    {/*</FormGroup>*/}
                {/*</FormControl>*/}
            </div>
        )
    }
}