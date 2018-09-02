import React, {Component} from 'react'
import {Banner} from "../home/components/banner";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Badge from '@material-ui/core/Badge';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tooltip from '@material-ui/core/Tooltip';
import DialogTitle from '@material-ui/core/DialogTitle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

import p1 from '../images/1.png'
import {Comment} from '../comment/comment'
require('./layout.css');


export class Detail extends Component {
    state = {
        open: false,
        value: 2,
        buyNum: 1,
        index: -1,
        fontColor: '#666',
        goodArgs:<Comment/>
    };


    handleClick = (index) => {
        console.log(index);
        this.setState({index})
    };


    decreamBuyNum = () => {
        let buyNum = this.state.buyNum - 1;
        if (buyNum === 0) {
            return
        }
        this.setState({buyNum})
    };

    increamBuyNum = () => {
        let buyNum = this.state.buyNum + 1;
        this.setState({buyNum})
    };

    handleByNumber = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    changeView = (value) => {
      switch (value){
          case 'explain':
              this.setState({goodArgs:'说明 todo'});
              break;
          case 'args':
              this.setState({goodArgs:'参数 todo'});
              break;
          case 'comment':
              this.setState({goodArgs:<Comment/>});
              break
      }
    };


    render() {
        const {classes} = this.props;
        const list = ['10*10*5', '10*10*5', '10*10*5', '10*10*5', '10*10*5', '10*10*5这是的地方', '10*10*5', '10*10*5'];
        const {index, fontColor} = this.state;
        return (
            <div className='detail-container'>
                <Banner/>
                <div className='detail-info-wrapper'>
                    <span className='detail-name'>商品名称商品名称</span>
                    <span className='detail-score'>购买可得<span style={{color: 'red', fontSize: '16px'}}>5</span>积分</span>
                </div>
                <div className='detail-money-wrapper'>
                    <del className='detail-old-money'>￥8</del>
                    &nbsp;&nbsp;
                    <span className='detail-now-money'>￥5</span>
                    {/*什么是积分 start*/}
                    <span className='detail-score-introduct' onClick={this.handleClickOpen}>什么是积分<HelpOutlineIcon
                        style={{color: '#999', paddingTop: '3px'}}/></span>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"积分是什么?"}</DialogTitle>
                        <DialogContent>
                            积分是你爸爸积分是你爸爸积分是你爸爸
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                确认
                            </Button>
                        </DialogActions>
                    </Dialog>
                    {/*什么是积分 end*/}
                    <hr/>
                    <div>
                        <span
                            style={{color: '#666'}}>赶快买 ！！！商品介绍这个东西好啊！商品介绍这个东西好啊！商品介绍这个东西好啊！商品介绍这个东西好啊！商品介绍这个东西好啊！</span>
                    </div>
                    <div style={{marginTop: '18px'}}>

                        <div style={{marginTop: '16px', marginBottom: '5px', marginLeft: '8px'}}>
                            {/*<hr/>*/}
                            <img src={p1} style={{height: '15%', width: '20%'}}/>
                            <span style={{marginLeft: '15px', color: 'red'}}>请 选 择 规 格</span>
                            <div style={{
                                position: 'relative',
                                bottom: '8px',
                                right: '8px',
                                borderTop: '1px solid #999',
                                zIndex: '-1'
                            }}/>
                        </div>

                        {/*width: 100px;*/}
                        {/*height: 45px;*/}
                        {/*display: inline-block; /*变成块才行*/}
                        {/*overflow : hidden;*/}
                        {/*text-overflow: ellipsis;*/}
                        {/*display: -webkit-box;*/}
                        {/*-webkit-line-clamp: 2;*/}
                        {/*-webkit-box-orient: vertical;*/}

                        <div>
                            {
                                list.map((el, i) => <div style={{
                                        height: '36px',
                                        borderRadius: '8px',
                                        border: '1px solid #DDD',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '6px 6px',
                                        float: 'left'
                                    }} key={i} className={index === i ? "click-style" : ""}
                                                         onClick={() => this.handleClick(i)}>
                                        <span className={index === i ? "click-font" : "default-font"}
                                              style={{margin: '5px 12px'}}>{el}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div style={{clear: 'both'}}/>

                    {/*<div>*/}
                        {/*<span style={{marginLeft:'5%',color:'red'}}>购 买 数 量:</span>*/}
                    {/*</div>*/}
                    <div style={{borderTop:'1px solid #999',margin:'10px'}}/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{marginLeft:'10px'}} className="btn-group" role="group" aria-label="...">
                            <button type="button" className="btn btn-default" onClick={() => this.decreamBuyNum()}>-
                            </button>
                            <button type="button" style={{zIndex:'0'}}  className="btn btn-default disabled">{this.state.buyNum}</button>
                            <button type="button" style={{zIndex:'0'}} className="btn btn-default" onClick={() => this.increamBuyNum()}>+
                            </button>
                        </div>
                        <span style={{
                            color: '#666',
                            fontSize: '15px',
                            marginLeft: '18px'
                        }}>库存: &nbsp;888件</span>
                    </div>

                    {/*规格选择 end*/}
                    {/*小计start*/}
                    <div style={{float: 'right', margin: '12px 10px'}}>
                        <span>小计：<span style={{color: "red", fontSize: '20px'}}>￥35</span></span>
                    </div>
                    {/*小计end*/}
                    {/* 产品说明 产品参数  评论 start*/}
                    <div style={{marginTop: '66px'}}>
                        <Tabs
                            value={this.state.value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.handleChange}
                        >
                            <Tab onClick={()=>this.changeView('explain')} className='detail-tab' label="产品说明"/>
                            <Tab onClick={()=>this.changeView('args')} className='detail-tab' label="规格参数"/>
                            <Tab onClick={()=>this.changeView('comment')} className='detail-tab' label={
                                <div>
                                    <span>评论</span>
                                    <Badge children={1} style={{marginLeft: '15px', marginBottom: '15px'}}
                                           color="secondary"
                                           badgeContent={'999+'}/>
                                </div>

                            }/>
                        </Tabs>
                    </div>
                    {/* todo ...*/}
                    <div>
                        {/*<Comment/>*/}
                        {this.state.goodArgs}
                    </div>
                    {/* 产品说明 产品参数  评论 end*/}
                </div>

                {/*加入购物车 start*/}
                <div style={{
                    position: 'fixed',
                    width: '100%',
                    bottom: '8.5%',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '1px',
                        height: '60px',
                        backgroundColor: '#ff6633',
                        width: '50%',
                        float: 'left',
                    }}>
                        <span style={{color: '#fff', fontSize: '18px'}}>加入购物车</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '1px',
                        height: '60px',
                        backgroundColor: '#ff3333',
                        width: '50%',
                        float: 'left'
                    }}>
                        <span style={{color: '#fff', fontSize: '18px'}}>立即购买</span>
                    </div>
                </div>
                {/*加入购物车 end*/}
                <div style={{clear: 'both'}}/>

                {/* 撑开容器 */}
                <div style={{marginTop: '160px'}}/>
            </div>
        )
    }
}
