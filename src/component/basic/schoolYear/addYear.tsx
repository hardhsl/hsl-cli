import React, { useState } from "react";
import { Steps, Col, Row, Button } from 'antd';
import { AddSchoolYearWrap } from './ui';
import { FormYearComponent } from './formYear';
import { FormTermComponent } from './formTerm';
import { WorkRestList } from '@/component/workRestList';
import { useMappedState } from "redux-react-hook";
const { Step } = Steps;
import { IState } from '@/store';
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
const AddYearComponent = () => {
    let [ current, setCurrent] = useState(0)
    const mapState = (state: IState): {
      addSchoolYearObj: any
    } => {
        return {
          addSchoolYearObj: state.BasicSchoolYear.addSchoolYearObj,    
        };
    };
    const {
      addSchoolYearObj,
    } = useMappedState(mapState);
    
    const stepsNextSet = (): void=>{
      setCurrent(++current)
    }
    const stepsBackSet = (): void=>{
      setCurrent(current--)
    }
    return (
        <div>
          <AddSchoolYearWrap style={{'padding':'20px'}}>
            <Steps current={current}>
              <Step title="学年信息"  />
              <Step title="学期信息"  />
              <Step title="作息确认"  />
            </Steps>
            { current == 0 ? <FormYearComponent stepsNextSet={stepsNextSet} /> : null }
            { current == 1 ? <FormTermComponent stepsNextSet={stepsNextSet} stepsBackSet={stepsBackSet} /> : null }
            { current == 2 && addSchoolYearObj.schoolYearType == '1' && <Row style={{ padding:'20px' }}>
              <Col span={24}><Button type="primary" style={{ marginRight: '15px' }}>上学期</Button><Button type="primary">下学期</Button></Col>
              <Col span={24}><WorkRestList data={data}/></Col>
            </Row>   }
            { current == 2 && addSchoolYearObj.schoolYearType == '2' && <WorkRestList data={data}/> }
          </AddSchoolYearWrap>
         
        </div>
    );
};

export {
  AddYearComponent
};