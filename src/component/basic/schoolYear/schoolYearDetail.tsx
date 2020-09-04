import React from 'react';
import {
    SchoolYearDetailWrap,
    SchoolYearDetailTitle,
    SchoolYearDetailLine,
    SchoolYearDetailText
} from './ui'
import { Button } from 'antd';
import { WorkRestList } from '@/component/workRestList'
const data = [
    {
         name: '中学作息',
         forenone: [
                 {color:'colorA',name:'课节一',Ename:'Lesson one',startTime:'07:00',endTIme:'08:00'},
                 {color:'colorB',name:'课节二',Ename:'Lesson two',startTime:'07:00',endTIme:'08:00'},
                 {color:'colorC',name:'课节三',Ename:'Lesson three',startTime:'07:00',endTIme:'08:00'},
                 {color:'colorD',name:'课节四',Ename:'Lesson four',startTime:'07:00',endTIme:'08:00'},
                 ],
         afternoon: [
             {color:'colorA',name:'课节一',Ename:'Lesson one',startTime:'07:00',endTIme:'08:00'},
             {color:'colorB',name:'课节二',Ename:'Lesson two',startTime:'07:00',endTIme:'08:00'},
             {color:'colorC',name:'课节三',Ename:'Lesson three',startTime:'07:00',endTIme:'08:00'},
             {color:'colorD',name:'课节四',Ename:'Lesson four',startTime:'07:00',endTIme:'08:00'},
             ],
         evening: [
             {color:'colorA',name:'课节一',Ename:'Lesson one',startTime:'07:00',endTIme:'08:00'},
             {color:'colorB',name:'课节二',Ename:'Lesson two',startTime:'07:00',endTIme:'08:00'},
             ],
    }
 ]
const SchoolYearDetail = () => {
    return (
        <SchoolYearDetailWrap>
            <SchoolYearDetailTitle>2019-2020 学年</SchoolYearDetailTitle>
            <SchoolYearDetailLine>
                <div><SchoolYearDetailText>起止日期： 2018年08月27日 至 2019年07月13日</SchoolYearDetailText><SchoolYearDetailText>学期数量：2 学期</SchoolYearDetailText></div>
                <div><Button type="primary">上学期</Button><Button type="default" style={{ margin: '0 15px 0 10px' }}>下学期</Button></div>
            </SchoolYearDetailLine>
            <WorkRestList data={data} />
        </SchoolYearDetailWrap>
    )
}
export {
    SchoolYearDetail
}