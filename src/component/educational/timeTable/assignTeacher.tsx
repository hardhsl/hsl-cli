import React, { useState } from 'react';

import { AssignTeacherWrap } from './ui';
import { Col, Row, Select, Button } from 'antd';
const { Option } = Select 
const gradeData = [
    {id:'1',name:'高一年级一班'},
    {id:'2',name:'高一年级二班'},
    {id:'3',name:'高一年级三班'},
]
import {
    PageCardDIvWrap,
    PageCardDIvWrapHeader,
    FlexWrap,
    CardIconSpan
} from '@/baseUI/pageCard';
import {
    LessonLineTitleWrap,
    LessonLineListWrap,
    LessonLineListLi,
    LessonLineListLiEmpty,
} from '../classDetail/ui';
import { GradeClassStudentWrap } from './ui'
const couresListData : any[] = [
    {name:'第一节',list:[
        { lesson:'语文',teacher : '李老师' },
        {},
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },   
    {name:'第二节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第三节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第四节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第五节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第六节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第七节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
]
const AssignTeacher = (props:any) => {
    let [ gradeActive , setGradeActive ] = useState('1')
    return <div>
        <AssignTeacherWrap>
            <Row>
                <Col span={3} className="assTeacherLeft">
                    {
                        gradeData.map((item,index)=>{
                            return <div  key={index} className={ gradeActive == item.id ? 'activeGeade' : '' } onClick={()=>{
                                setGradeActive(item.id)
                            }}>
                                {item.name}
                            </div>
                        })
                    }
                </Col>
                {/* <Col span={21}  className="assTeacherRight">
                    <div className="assTeacherContent">
                        <div className="assTeacherDiv">
                            <h5>语文课</h5>
                            <div>
                                <span>任课老师</span>
                                <Select defaultValue='1' style={{ width: 190 }} className="select">
                                    <Option value="1">1节</Option>
                                    <Option value="2">2节</Option>
                                    <Option value="3">3节</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="assTeacherDiv">
                            <h5>语文课</h5>
                            <div>
                                <span>任课老师</span>
                                <Select defaultValue='1' style={{ width: 190 }} className="select">
                                    <Option value="1">1节</Option>
                                    <Option value="2">2节</Option>
                                    <Option value="3">3节</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </Col> */}
                <Col span={21} className="assTeacherRight">
                <PageCardDIvWrap>
                            <PageCardDIvWrapHeader>
                                <span></span>
                                <div style={{ float:'right',display:'flex',height:"100%",alignItems:'center' }}>
                                  <Button>重新排课</Button>
                                </div>
                            </PageCardDIvWrapHeader>
                            <GradeClassStudentWrap style={{ maxHeight: '675px',padding: '0 10px' }}>
                                
                                    <Row style={{ width:'100%' }}>
                                        <Col span={22} offset={2}>
                                            <LessonLineTitleWrap>
                                                <span>周一</span>
                                                <span>周二</span>
                                                <span>周三</span>
                                                <span>周四</span>
                                                <span>周五</span>
                                                <span>周六</span>
                                                <span>周日</span>
                                            </LessonLineTitleWrap>
                                        </Col>
                                        {
                                            couresListData.map((item: any,index: number)=>{
                                                return (
                                                    <Row style={{ width: '100%' }}>
                                                        <Col span={2} style={{lineHeight: '30px'}}>{item.name}</Col>
                                                        <Col span={22}>
                                                            <LessonLineListWrap>
                                                                {
                                                                    item.list && item.list.length > 0 && item.list.map((ite: { lesson: any; teacher: any; })=>{
                                                                        return(
                                                                            ite.lesson ? <LessonLineListLi>{ite.lesson} {ite.teacher}</LessonLineListLi> : <LessonLineListLiEmpty />
                                                                        )
                                                                    })  
                                                                }
                                                            </LessonLineListWrap>
                                                        </Col>
                                                    </Row>
                                                )
                                            })
                                        }
                                    </Row>
                            </GradeClassStudentWrap>
                            
                        </PageCardDIvWrap>

                </Col>
            </Row>
            <div className="flex-justify-end"><Button className="Green">上一步</Button><Button className="Green" style={{ margin: '0 15px' }}>排课</Button><Button className="Gray">取消</Button></div>
        </AssignTeacherWrap>
    </div>
}

export{
    AssignTeacher
}