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

require('./layout.css');


export class Detail extends Component {
    state = {
        open: false,
        value: 2,
        buyNum: '',
        SKUStyle: []
    };

    componentDidMount() {
        this.setState({
            SKUStyle: [{'1': 'default'}, {'2': 'default'}, {'3': 'default'}, {'4': 'default'}]
        })
    }

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

    handleStyle = (value) => {
        console.log(value)
    }


    render() {
        const {classes} = this.props;
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
                            style={{color: '#999'}}>赶快买 ！！！商品介绍这个东西好啊！商品介绍这个东西好啊！商品介绍这个东西好啊！商品介绍这个东西好啊！商品介绍这个东西好啊！</span>
                    </div>
                    {/* 加入购物车 start */}
                    <div className='detail-add-cart'>
                        <Tooltip title="Add">
                            <Button variant="fab" aria-label="Add">
                                <AddShoppingCartIcon/>
                            </Button>
                        </Tooltip>
                    </div>
                    {/* 加入购物车 end */}
                    {/*规格选择 start*/}
                    <div style={{marginTop: '28px'}}>
                        <div style={{marginTop: '36px', marginLeft: '8px'}}>
                            <span style={{color: '#666'}}>规格参数选择</span>
                            <hr/>
                        </div>

                        {/*width: 100px;*/}
                        {/*height: 45px;*/}
                        {/*display: inline-block; /*变成块才行*/}
                        {/*overflow : hidden;*/}
                        {/*text-overflow: ellipsis;*/}
                        {/*display: -webkit-box;*/}
                        {/*-webkit-line-clamp: 2;*/}
                        {/*-webkit-box-orient: vertical;*/}

                        {/*class Index extends Component {*/}

                        {/*state = {*/}
                            {/*index: -1*/}
                        {/*};*/}

                        {/*handleClick = (index) => {*/}
                        {/*console.log(index)*/}
                        {/*this.setState({index})*/}
                    {/*};*/}

                        {/*render() {*/}
                        {/*const list = [0, 1, 2, 3, 4, 5, 6, 7, 8];*/}
                        {/*const {index} = this.state;*/}
                        {/*return (*/}
                        {/*list.map((el, i) => {*/}
                        {/*return <div className={index === i ? "current" : ""} onClick={() => this.handleClick(i)}>{el}</div>*/}
                    {/*})*/}
                        {/*)*/}
                    {/*}*/}
                    {/*}*/}

                        <button type="button" className="btn btn-default styleBTN dropdown-toggle">10-12 cm</button>
                        <button type="button" className="btn btn-default styleBTN dropdown-toggle">12-15 cm</button>
                        <button type="button" className="btn btn-default styleBTN dropdown-toggle">15-20 cm</button>
                        <button type="button" className="btn btn-default styleBTN dropdown-toggle">20-25 cm</button>
                        <button type="button" className="btn btn-default styleBTN dropdown-toggle">25-30 87 88 cm
                        </button>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <TextField style={{marginLeft: '10px'}}
                                   label='购买数量'
                                   placeholder="请输入购买数量"
                                   id="number"
                                   value={this.state.buyNum}
                                   onChange={this.handleByNumber('buyNum')}
                                   type="number"
                        />
                        <span style={{
                            marginTop: '26px',
                            color: '#999',
                            fontSize: '12px',
                            marginLeft: '18px'
                        }}>库存: &nbsp;888件</span>
                    </div>
                    {/*规格选择 end*/}
                    {/*小计start*/}
                    <div style={{float: 'right', margin: '12px 10px'}}>
                        <span>小计：￥<span style={{color: "red", fontSize: '20px'}}>35</span></span>
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
                            <Tab className='detail-tab' label="产品说明"/>
                            <Tab className='detail-tab' label="规格参数"/>
                            <Tab className='detail-tab' label={
                                <div>
                                    <span>评论</span>
                                    <Badge children={1} style={{marginLeft: '15px', marginBottom: '15px'}}
                                           color="secondary"
                                           badgeContent={'999+'}/>
                                </div>

                            }/>
                        </Tabs>
                    </div>
                    {/* 产品说明 产品参数  评论 end*/}
                </div>

                {/* 撑开容器 */}
                <div style={{marginTop: '108px'}}/>
            </div>
        )
    }
}
