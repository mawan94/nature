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
        gilad: true,
        jason: false,
        antoine: false,
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };

    render() {
        const {gilad, jason, antoine} = this.state;
        const error = Object.values(this.state).filter(v => v).length !== 2;
        return (
            <div style={{marginTop: '56px',height:'100%'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <span>我的购物车</span>
                </div>
                <FormControl component="fieldset">
                    {/*<FormLabel component="legend">Assign responsibility</FormLabel>*/}
                    <FormGroup style={{padding:'0 10px'}}>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad"/>
                            }
                            label={
                                <div className='cart-item-wrapper'>
                                    <div className='product-img-wrapper'>
                                        <img
                                            src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057"
                                            className="img-circle product-img"/>
                                    </div>
                                    <div style={{border:'1px solid red',float: 'left'}}>
                                        <div style={{clear:'both'}}/>
                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>
                                    </div>
                                    {/*http://www.17sucai.com/pins/25650.html  样式地址*/}
                                </div>
                            }
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason"/>
                            }
                            label={<div>product2</div>}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={antoine}
                                    onChange={this.handleChange('antoine')}
                                    value="antoine"
                                />
                            }
                            label={<div>product3</div>}
                        />
                    </FormGroup>
                </FormControl>
            </div>
        )
    }
}