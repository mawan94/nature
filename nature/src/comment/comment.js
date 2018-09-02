import React, {Component} from 'react'

import avatar1 from '../images/avater/avatar1.jpg'
import avatar2 from '../images/avater/avatar2.jpg'
import vip from '../images/vip.png'
import zan from '../images/zan.jpg'


export class Comment extends Component {
    render() {
        return (
            <div>
                {/*<div style={{borderTop: '1px solid #CCC'}}/>*/}
                <hr/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 12px',

                }}>
                    {/* avatar img */}
                    <img style={{
                        margin: '6px 0',
                        height: "36px",
                        width: "36px"
                    }} src={avatar1} className="img-circle"/>
                    {/* avatar name red cloor where if member*/}
                    <span style={{marginLeft:'12px'}}>风中的纸屑</span>
                    <span style={{fontSize:'12px',color:'#999',position:'absolute', right:'20px'}}>2018-08-08 17:52:53</span>
                </div>

                <div style={{padding: '0 12px'}}>
                    {/*Segmenting line*/}
                    <div style={{borderBottom: '1px solid #CCC'}}/>
                    {/*comment content*/}
                    <div style={{margin:'6px 0'}}>
                        <span>
                            wo是一个开会员的普通小朋友样式我是一个开会员的普通小朋友样式
                            wo是一个开会员的普通小朋友样式我是一个没会员的普通小朋友样式
                        </span>
                    </div>
                    {/*Segmenting line*/}
                    <div style={{borderTop: '1px solid #CCC'}}/>
                </div>

                {/* content img*/}
                <div style={{padding:'0 16px'}}>
                    {/*<img*/}
                        {/*src='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057'*/}
                        {/*style={{*/}
                            {/*width: '33.3%',*/}
                            {/*height: '108px',*/}
                            {/*padding: '10px 5px',*/}
                            {/*borderRadius: '18px'*/}
                        {/*}}/>*/}
                    {/*<img*/}
                        {/*src='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057'*/}
                        {/*style={{*/}
                            {/*width: '33.3%',*/}
                            {/*height: '108px',*/}
                            {/*padding: '10px 5px',*/}
                            {/*borderRadius: '18px'*/}
                        {/*}}/>*/}
                </div>

                {/*赞*/}
                <div style={{float:'right',margin:'5px 12px'}}>
                    <img style={{
                        opacity:'0.7',
                        paddingBottom:'3px',
                        margin:'0 10px',
                        height: "20px",
                        width: "20px"
                    }} src={zan}/>
                    <a>39</a>
                </div>
                <div style={{clear:'both'}}/>

                {/*----------------------------------------------------------------|*/}
                <hr/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 12px',
                }}>
                    {/* avatar img */}
                    <img style={{
                        margin: '6px 0',
                        height: "36px",
                        width: "36px"
                    }} src={avatar2} className="img-circle"/>
                    {/* avatar name red cloor where if member*/}
                    <span style={{color:'red',marginLeft:'12px'}}>南风</span>
                    <img src={vip} style={{
                        borderRadius:'2px',
                        marginLeft:'20px',
                        height: "18px",
                        width: "26px"
                    }}/>
                    <span style={{fontSize:'12px',color:'#999',position:'absolute', right:'20px'}}>2018-08-08 17:52:53</span>
                </div>

                <div style={{padding: '0 12px'}}>
                    {/*Segmenting line*/}
                    <div style={{borderBottom: '1px solid #CCC'}}/>
                    {/*comment content*/}
                    <div style={{margin:'6px 0'}}>
                        <span>
                            wo是一个开会员的普通小朋友样式我是一个开会员的普通小朋友样式
                            wo是一个开会员的普通小朋友样式我是一个没会员的普通小朋友样式
                        </span>
                    </div>
                    {/*Segmenting line*/}
                    <div style={{borderTop: '1px solid #CCC'}}/>
                </div>

                {/* content img*/}
                <div style={{padding:'0 16px'}}>
                    <img
                        src='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057'
                        style={{
                            width: '33.3%',
                            height: '108px',
                            padding: '10px 5px',
                            borderRadius: '18px'
                        }}/>
                    <img
                        src='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057'
                        style={{
                            width: '33.3%',
                            height: '108px',
                            padding: '10px 5px',
                            borderRadius: '18px'
                        }}/>
                    <img
                        src='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057'
                        style={{
                            width: '33.3%',
                            height: '108px',
                            padding: '10px 5px',
                            borderRadius: '18px'
                        }}/>
                    <img
                        src='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057'
                        style={{
                            width: '33.3%',
                            height: '108px',
                            padding: '10px 5px',
                            borderRadius: '18px'
                        }}/>
                    <img
                        src='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057'
                        style={{
                            width: '33.3%',
                            height: '108px',
                            padding: '10px 5px',
                            borderRadius: '18px'
                        }}/>
                    <img
                        src='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3032577091,2896969095&fm=173&app=25&f=JPEG?w=639&h=394&s=21FD768678A70E96858DA6720300D057'
                        style={{
                            width: '33.3%',
                            height: '108px',
                            padding: '10px 5px',
                            borderRadius: '18px'
                        }}/>
                </div>

                {/*赞*/}
                <div style={{float:'right',margin:'5px 12px'}}>
                    <img style={{
                        opacity:'0.7',
                        paddingBottom:'3px',
                        margin:'0 10px',
                        height: "20px",
                        width: "20px"
                    }} src={zan}/>
                    <a>28</a>
                </div>
                <div style={{clear:'both'}}/>
                {/* more comment */}
                <div onClick={()=>{alert('看你妹啊todo param:id')}} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <a>
                        <span style={{fontSize:'18px'}}>点击查看更多评论</span>
                    </a>
                </div>

            </div>
        )
    }
}