import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

import head1 from '../../images/banner/head-1.png'
import head2 from '../../images/banner/head-2.png'
import head4 from '../../images/banner/head-4.png'

require('../layout.css');

export class Banner extends Component {

    render() {
        return (

            <ReactSwipe className="carousel banner-container"
                        swipeOptions={{continuous: true,auto:2600}}>
                <div className="item active">
                    <img className='banner-image' src={head4}/>
                </div>
                <div className="item">
                    <img className='banner-image' src={head2}/>
                </div>
                <div className="item">
                    <img className='banner-image' src={head1}/>
                </div>
            </ReactSwipe>
        )
    }
}