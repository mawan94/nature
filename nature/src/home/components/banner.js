import React, {Component} from 'react'

import head1 from '../../images/banner/head-1.png'
import head2 from '../../images/banner/head-2.png'
import head4 from '../../images/banner/head-4.png'
require('../layout.css');

export class Banner extends Component {

    render() {

        return (
            <div id="carousel-example-generic" className="carousel slide"
                 data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"/>
                    <li data-target="#carousel-example-generic" data-slide-to="1"/>
                    <li data-target="#carousel-example-generic" data-slide-to="2"/>
                </ol>

                <div className="carousel-inner  banner-container" role="listbox">
                    <div className="item active">
                        <img className='banner-image' src={head4}/>
                    </div>
                    <div className="item">
                        <img className='banner-image' src={head2}/>
                    </div>
                    <div className="item">
                        <img className='banner-image' src={head1}/>
                    </div>
                </div>
            </div>
        )
    }
}