import React from "react";
import {useMappedState} from 'redux-react-hook';
import { Headers } from './headers';
import {IState} from '@/store';
import { FormWorkRestComponent } from './form';
import { WorkRestList } from '@/component/workRestList';
const basicSchoolData = (state: IState) => {
    return {
        workRestShow: state.BasicSchoolYear.workRestShow
    };
};

const WorkRestTimeMain = () => {
    const {
        workRestShow
    } = useMappedState(basicSchoolData);
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
    return (
      <div>
		<Headers /> 
        <WorkRestList data={data} />     
        { workRestShow ?  <FormWorkRestComponent /> : null}
	 </div>
    );
};

export {
    WorkRestTimeMain
};