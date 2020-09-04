import React from 'react';
import { SetCourseWrap } from './ui'
import { GradeTable } from '@/assert/img/base'
import { Row, Col, Select } from 'antd';
const { Option } = Select;
const data = [
    {
        name:'语文课',
        grade:'高一年级',
        courseNum:'100',
        dayCourseNum: '2',
        weekCourseNum: '3'
    }
]
const SetCourse = (props:any) => {
    return <div>
        <SetCourseWrap>
            <Row style={{width:'100%'}}>
            {
                data.map((item,index)=>{
                   return <Col span={8} style={{ margin:'10px' }}><div className="setCourseLi" key={index}>
                        <div className="header">
                            <h5>{item.name}</h5>
                            <div><img src={GradeTable}/><span>{item.grade}</span></div>
                        </div>
                        <p>总课时：{item.courseNum}</p>
                        <div className="selectWrap">
                            <b>*</b>
                            <span>日课时</span>
                            <Select defaultValue={item.dayCourseNum} className="select" onChange={(value:string)=>{
                                item.dayCourseNum = value
                            }}>
                                <Option value="1">1节</Option>
                                <Option value="2">2节</Option>
                                <Option value="3">3节</Option>
                            </Select>
                        </div>
                        <div className="selectWrap">
                            <b>*</b>
                            <span>周课时</span>
                            <Select defaultValue={item.weekCourseNum} className="select" onChange={(value:string)=>{
                                item.weekCourseNum = value
                            }}>
                                <Option value="1">1节</Option>
                                <Option value="2">2节</Option>
                                <Option value="3">3节</Option>
                            </Select>
                        </div>
                    </div>
                    </Col>
                })
            }
            </Row>
        </SetCourseWrap>
    </div>
}

export{
    SetCourse
}