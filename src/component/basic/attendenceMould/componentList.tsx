import React from 'react';
import { WorkRestListRightLessonWrap,
     WorkRestListRightSign, 
     WorkRestListRightText, 
     WorkRestListRightTextTop, 
     WorkRestListRightTextTwo, 
     WorkRestListRightTimeWrap,
     WorkRestListRightTimeImg, 
     WorkRestListRightTimeText } from '@/component/educational/gradeDetail/ui';
import { Click } from '@/assert/img/basic';
import {Row, Col } from 'antd';

const ListComponent = (props: any) => {
    return (
        <Row>{
        props.data.map((item: any,index: number)=>{
            return(
               <Col span={20} offset={2} style={{padding: '5px'}}>
                   <WorkRestListRightLessonWrap style={{ width:'100%' }}>
                       <WorkRestListRightSign style={index%3 == 0 ? { background:'#02CDDF' }: index%3==1 ? {background:'#F85EA3'} : {background:'#F8C68A'}}/>
                       <WorkRestListRightText>
                           <WorkRestListRightTextTop>{item.couresName}</WorkRestListRightTextTop>
                           <WorkRestListRightTextTwo>{item.couresEnglish}</WorkRestListRightTextTwo>
                       </WorkRestListRightText>
                       <WorkRestListRightTimeWrap>
                           <WorkRestListRightTimeImg src={ Click }></ WorkRestListRightTimeImg>
                           <WorkRestListRightTimeText>{item.couresNumber}课时</WorkRestListRightTimeText>
                       </WorkRestListRightTimeWrap>
                   </WorkRestListRightLessonWrap>
               </Col>
            )
        })
    }
    </Row>
    )
}

export{
    ListComponent
}