import React, {Component} from 'react'
import {Switch, Route,Redirect,NavLink} from 'react-router-dom'

import Products from '../components/products'
import {My} from '../../my/my'

require('../layout.css');

class Product extends Component {

    render() {

        return (
            <div>
                <div className="category-container">

                    <ul className="nav nav-pills nav-stacked">
                        <li role="presentation">
                            <NavLink to='/product/1'>鱼缸</NavLink>
                        </li>
                        <li role="presentation">
                            <NavLink to='/product/2'>器材</NavLink>
                        </li>
                        <li role="presentation"><a href="javascript:void(0)">热带鱼</a></li>
                        <li role="presentation"><a href="javascript:void(0)">水草</a></li>
                        <li role="presentation"><a href="javascript:void(0)">布景装饰</a></li>
                        <li role="presentation"><a href="javascript:void(0)">鱼食</a></li>
                        <li role="presentation"><a href="javascript:void(0)">套餐推荐</a></li>
                    </ul>

                </div>
                <div>
                    <Switch>
                        <Route exact path='/product/1' component={Products}/>
                        <Route exact path='/product/2' component={My}/>
                        <Redirect to='/product/1'/>
                    </Switch>
                </div>
            </div>

        )
    }
}
export default Product;
