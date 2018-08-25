import React, {Component} from 'react'

import head1 from '../../images/banner/head-1.png'
import head2 from '../../images/banner/head-2.png'
import head3 from '../../images/banner/head-3.png'
import head4 from '../../images/banner/head-4.png'

export class Banner extends Component {

    render() {

        return (
            <div style={{marginTop:'55px'}} id="carousel-example-generic" className="carousel slide"
                 data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>


                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img style={{width:'100%',height:'180px'}} src={head4} alt="..."/>
                        <div className="carousel-caption">
                            ....
                        </div>
                    </div>
                    <div className="item">
                        <img style={{width:'100%',height:'180px'}} src={head2}/>
                        <div className="carousel-caption">
                            ....
                        </div>
                    </div>
                    <div className="item">
                        <img style={{width:'100%',height:'180px'}} src={head1}/>
                        <div className="carousel-caption">
                            ....
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}