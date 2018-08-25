import React,{Component} from 'react'

import {Banner} from '../components/banner'
import Conetnt from '../components/content'
import Hot from '../components/hot'

export class Home extends Component{
    render(){
        return (
            <div>
               <Banner/>
                <div style={{margin:'6px 0px',fontSize:'16px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <span style={{color:'#C79B7C',fontWeight:'bold'}}>精选主题</span>
                </div>
                <Conetnt/>
                <div style={{margin:'6px 0px',fontSize:'16px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <span style={{color:'#C79B7C',fontWeight:'bold'}}>热卖推荐</span>
                </div>
                <Hot/>
                {/* 撑开底部菜单占用的高度 */}
                <div style={{height:'80px'}}/>
            </div>
        )
    }
}