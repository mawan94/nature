import React,{Component} from 'react'

import {Banner} from '../components/banner'
import Recommend from '../components/recommend'
import Hot from '../components/hot'
require('../layout.css');

export class Home extends Component{
    render(){
        return (
            <div>
               <Banner/>
                <div className='subject-container'>
                    <span className='subject-font'>精选主题</span>
                </div>
                <Recommend/>
                <div className='subject-container'>
                    <span className='subject-font'>热卖推荐</span>
                </div>
                <Hot/>
                {/* 撑开底部菜单占用的高度 */}
                <div style={{height:'80px'}}/>
            </div>
        )
    }
}