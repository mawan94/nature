import React,{Component} from 'react'
import ReactSwiper from 'reactjs-swiper';

export class Banner extends Component{

    render(){
        const items = [{
            image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci1.jpg',
            title: '图片1',
            link: 'http://jd.com'
        }, {
            image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci2.jpg',
            title: '图片2',
        }, {
            image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci3.jpg',
            title: '图片3',
            link: 'http://jd.com'
        }, {
            image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci4.jpg',
            title: '图片4',
        }];
        const swiperOptions = {
            preloadImages: true,
            autoplay: 1000,
            autoplayDisableOnInteraction: false
        };
        return (
            <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}/>
        )
    }
}