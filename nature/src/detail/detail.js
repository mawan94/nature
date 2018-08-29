import React,{Component} from 'react'
import {Banner} from "../home/components/banner";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

require('./layout.css');
export class Detail extends Component{
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render(){
        return (
            <div>
                <Banner/>
                <div className='detail-info-wrapper'>
                    <span className='detail-name'>商品名称商品名称商品名称</span>
                    <span className='detail-score'>购买可得<span style={{color:'red',fontSize:'16px'}}>3</span>积分</span>
                </div>
                <div className='detail-money-wrapper'>
                    <del className='detail-old-money'>￥8</del>&nbsp;&nbsp;
                    <span className='detail-now-money'>￥5</span>
                    {/*什么是积分 start*/}

                    <span className='detail-score-introduct' onClick={this.handleClickOpen}>什么是积分<HelpOutlineIcon style={{color:'#999',marginTop:'5px'}}/></span>
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
                </div>
            </div>
        )
    }
}