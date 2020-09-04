import React, { useEffect, useState, useRef } from 'react';
import { DoubleRightOutlined } from '@ant-design/icons';
import { Row, Col, Carousel } from 'antd';
import { CarouselImgSize,ScrollRight } from './ui';
import './style.scss';
import { ToastComponent } from './toast'
const data = [
    { img:'http://pic1.sc.chinaz.com/Files/pic/pic9/202007/apic26797_s.jpg',title:'tupian' },
    { img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3942119087,3484543667&fm=26&gp=0.jpg',title:'tupian' },
    { img:'https://t9.baidu.com/it/u=2175293053,3350360003&fm=193',title:'tupian' },
    { img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1390601914,2082163080&fm=26&gp=0.jpg',title:'tupian' },
    { img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3035867912,1765247146&fm=26&gp=0.jpg',title:'tupian' },
    { img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1484640601,2225983347&fm=15&gp=0.jpg',title:'tupian' },
    { img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3942119087,3484543667&fm=26&gp=0.jpg',title:'tupian' },
    { img:'https://t9.baidu.com/it/u=2175293053,3350360003&fm=193',title:'tupian' },
    { img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1390601914,2082163080&fm=26&gp=0.jpg',title:'tupian' },
    
]
import {IState} from '@/store';
import { useMappedState, useDispatch } from 'redux-react-hook';
const ControlHomeState = (state: IState) => {
    return {
        bannerDetailToast: state.ControlBoardHome.bannerDetailToast
    };
};

const BannerComponent = () => {
    const {
        bannerDetailToast
    } = useMappedState(ControlHomeState);
    const dispatch = useDispatch();
    const CarouselEle = useRef<any>(null);
    const ScrollEle = useRef<any>(null);
    let [ activeDrop,setActiveDrop ] =  useState(0);
    let [ clickDetail,setClickDetail] = useState({
        title:'',
        img:''
    })
    const changeCurrent = (index: number,type?:number) =>{
        setActiveDrop(index)
        if(type == 1){
            CarouselEle.current.slick.slickGoTo(index)
        }
        if(index == 0){
            let timer = setInterval(() => {
                ScrollEle.current.scrollTop -= ScrollEle.current.scrollTop/8
                if(ScrollEle.current.scrollTop <= 0){
                    clearInterval(timer)
                }
            },40)
        }
        if(ScrollEle.current.children[index].offsetTop - ScrollEle.current.scrollTop < 95){
            //ScrollEle.current.scrollTop -= 100
            let height =  ScrollEle.current.scrollTop - 100
            let count = 0
            let timer = setInterval(()=>{
                
                ScrollEle.current.scrollTop -= 8
                if(ScrollEle.current.scrollTop <= height || ScrollEle.current.scrollTop <= 1){
                    clearInterval(timer)
                }
                if(count > 15){
                    clearInterval(timer)
                    count = 0
                }
            },40)
        }
        if(ScrollEle.current.children[index].offsetTop - ScrollEle.current.scrollTop > 360){
            //ScrollEle.current.scrollTop += 100
            let height =  ScrollEle.current.scrollTop + 100
            let count = 0
            let time = setInterval(()=>{
                count += 1
                ScrollEle.current.scrollTop += 8
                if(ScrollEle.current.scrollTop >= height){
                    clearInterval(time)
                }
                if(count > 15){
                    clearInterval(time)
                    count = 0
                }
            },40)
        }
    }
    return (
        <div style={{ width:'100%' }}>
            <Row>
                <Col span={19} style={{paddingRight:'15px',height:'444px',overflow:'hidden'}}>
                <Carousel autoplay ref={CarouselEle} dots={false} afterChange={(current)=>{
                   changeCurrent(current)
                }}>
                    {
                      data.map((item,index) => {
                          return (
                              <div key={index} className="carouselItem">
                                    <CarouselImgSize src={item.img} />
                                    <div onClick={ ()=>{
                                        setClickDetail(data[activeDrop])
                                        dispatch({
                                            type:'change bannerDetailToast show'
                                        })
                                    }
                                    }>
                                        <h5>大胆质疑，大胆发表自己的见解，敢于发问，才有大的进步。</h5>
                                        <h5><span>详情</span><DoubleRightOutlined /></h5>
                                    </div>
                                  </div>
                          );
                      })  
                    }
                </Carousel>
               

                </Col>
                <Col span={5}>
                    <ScrollRight ref={ScrollEle}>
                        {
                                data.map((item,index) => {
                                    return <div key={index} style={activeDrop == index ? { borderColor:'#1EB6AE'} : {}} onClick={() => changeCurrent(index,1)}><img src={item.img} /></div>
                                }) 
                        }
                    </ScrollRight>
                </Col>
            </Row>
            { bannerDetailToast && <ToastComponent data={clickDetail} /> }
        </div>
    );
}

export {
    BannerComponent
}