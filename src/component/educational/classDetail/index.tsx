import React, { useState } from "react";
import {useDispatch,useMappedState} from 'redux-react-hook';

import {
    DeleteFilled,
    DeleteOutlined,
    EditFilled,
    EyeFilled,
    HddOutlined,
    PlusOutlined,
} from '@ant-design/icons';

import { Row, Col, Modal } from 'antd';
import { withRouter } from 'react-router-dom';
const { confirm } = Modal;
import {IState} from '@/store';
import {
	CardWrap,
	CardTextTitle,
	CardTextContent,
	CardIconBottom,
	CardIconSpan,
    CardHeaderWrap,
    PageCardDIvWrap,
    PageCardDIvWrapHeader,
    FlexWrap
} from '@/baseUI/pageCard';
import {
    TeacherEmpty,
    ClassStudentEmpty,
    EquEmpty,
    Attendance,
    ScheduleEmpty
} from '@/assert/img/educational/index';
import {
    Emblem
} from '@/assert/img/base/index';
import {
    GradeClassStudentWrap,
    GradeClassStudentListLi,
    GradeClassStudentImg,
    GradeClassStudentText,
    GradeClassStudentSpan,
    GradeClassStudentRightArea,
    TeacherTag,
    EmptyText
} from '../gradeDetail/ui';
import {
    LessonLineTitleWrap,
    LessonLineListWrap,
    LessonLineListLi,
    LessonLineListLiEmpty
} from './ui';
import { CheckWorkEcharts } from './echarts';
import { EquipTableMain } from './table';
import { FormGradeBindComponent } from '../gradeDetail/from'
const gradeDetailData = (state: IState) => {
    return {
        gradeDetailBindFromShow : state.EducationGradeManage.gradeDetailBindFromShow
    };
};
const ClassDetailMainRouter = () => {
    const dispatch = useDispatch();
    const {
        gradeDetailBindFromShow
    } = useMappedState(gradeDetailData);
  
	const data: any[] = [
		{ gradeType:'高一年级',gradeName:'2018年8月27日至2019年7月13日',num:2,classNum:18 ,location:'紫东楼'},
		{ gradeType:'高二年级',gradeName:'2018年8月27日至2019年7月13日',num:2,classNum:18 },
		{ gradeType:'高三年级',gradeName:'2018年8月27日至2019年7月13日',num:2,classNum:18 },
        { gradeType:'高四年级',gradeName:'2018年8月27日至2019年7月13日',num:2,classNum:18 },
        { gradeType:'高四年级',gradeName:'2018年8月27日至2019年7月13日',num:2,classNum:18 },
    ]
    const studentData: any[] = [
        { emblem: Emblem, className:'一年五班' ,studentNumber:'42'},
        { emblem: Emblem, className:'一年五班' ,studentNumber:'42'},
        { emblem: Emblem, className:'一年五班' ,studentNumber:'42'},
        { emblem: Emblem, className:'一年五班' ,studentNumber:'42'},
        { emblem: Emblem, className:'一年五班' ,studentNumber:'42'},
        { emblem: Emblem, className:'一年五班' ,studentNumber:'42'},
        { emblem: Emblem, className:'一年五班' ,studentNumber:'42'},
    ]
    const teacherListData: any[] = [
        { teacherName:'马老师',teachCoures:'语文课',tag:'班主任'},
        { teacherName:'马老师',teachCoures:'语文课',},
        { teacherName:'马老师',teachCoures:'语文课',},
    ]
    const styles = {
        defaultBg: {
            background: 'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))' ,
            height: '166px'
        },
        activeBg: {
            background: 'linear-gradient(90deg,rgba(146,113,252,1),rgba(248,94,163,1))',
            boxShadow: '0px 1px 16px 2px rgba(167,109,234,0.74)',
            height: '166px'
        },
        topWrapScroll:{
            display: 'flex',
            overflow: 'auto'
        },
        padding: '0 10px'
    }
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
            {},
            { lesson:'语文',teacher : '老师' },
            { lesson:'语文',teacher : '欧阳老师' },
            { lesson:'语文',teacher : '欧阳老师' },
            ]
        }
    ]
    const gradeBindDataShow = ()=>{
        dispatch({
            type: 'change GradeDetailBindFrom show',
            data: ''
        })
    }
    return (
        <div>
			<Row>
                <div style={styles.topWrapScroll}>
				{
					data.map((item: any,index: number)=>{
						return (
                            <Col span={6} style={{ padding:'0 8px'}} key={index}>
								<CardWrap style={ index == 1 ? styles.activeBg : styles.defaultBg }>
									<CardHeaderWrap>
										<CardTextTitle>{ item.gradeType } </CardTextTitle>
										<EyeFilled />
									</CardHeaderWrap>
									
                                    <CardTextContent><span style={{ marginRight: '30px' }}>班级数量：{ item.classNum ? item.classNum + '个' : '未添加' }</span><span>位置：{item.location ? item.location : '未添加'}</span></CardTextContent>
									<CardTextContent>学生人数：{ item.num ? item.num : '未添加' }</CardTextContent>
									<CardIconBottom>
										<CardIconSpan><EditFilled
                                            onClick={()=>{
                                                dispatch({
                                                    type: 'grade EducationGradeFromData change',
                                                    data: item
                                                })
                                            }} /></CardIconSpan>
										<CardIconSpan><DeleteFilled
                                            onClick={(index: any)=>{
                                                confirm({
                                                    content: '此操作将从列表中删除信息，是否继续？',
                                                    icon: <DeleteOutlined />,
                                                    onCancel() {},
                                                    onOk(e) {
                                                      return new Promise((resolve, reject) => {
                                                          console.log(e)
                                                        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                                                      }).catch(() => console.log('Oops errors!'));
                                                    },
                                                    
                                                  })
                                                }
                                            } /></CardIconSpan>
									</CardIconBottom>
								</CardWrap>
							</Col>
                        );
					})
				}
                </div>
			</Row>
            <Row style={{ margin: '20px 0 0 0'}}>
                <Col span={6} style={{paddingRight: '20px'}}>
                    <PageCardDIvWrap >
                        <PageCardDIvWrapHeader>
                            <span>班级学生</span>
                        </PageCardDIvWrapHeader>
                        {
                            studentData && studentData.length > 0  ? 
                            <GradeClassStudentWrap style={{ height: '323px' }}>
                                {studentData.map((item)=>{
                                    return (
                                        <GradeClassStudentListLi style={{ width:'150px' }}>
                                            <GradeClassStudentImg src={ item.emblem} />
                                            <GradeClassStudentText>
                                                <GradeClassStudentSpan>{item.className}</GradeClassStudentSpan>
                                                <GradeClassStudentSpan>{item.studentNumber}人</GradeClassStudentSpan>
                                            </GradeClassStudentText>
                                            <GradeClassStudentRightArea>
                                                <HddOutlined style={{color:'#1FB4B9'}} />
                                            </GradeClassStudentRightArea>
                                        </GradeClassStudentListLi>
                                    );
                                })}
                            </GradeClassStudentWrap>
                            : <FlexWrap>
                            <img src={ClassStudentEmpty} />
                            <EmptyText>暂无学生信息，请导入学生或进行分班</EmptyText>
                        </FlexWrap>
                        }
                    </PageCardDIvWrap>
                    <Row style={{ marginTop:'20px'}}>
                        <Col span={24}>
                            <PageCardDIvWrap>
                                <PageCardDIvWrapHeader>
                                    今日考勤
                                </PageCardDIvWrapHeader>
                                <div style={{ textAlign:'right',marginRight:'30px' }}>出勤率：<span style={{ color:'#1EB6AE',marginRight:'20px' }}>80%</span>缺勤率：<span style={{ color:'#FFC000' }}>18%</span></div>
                                <CheckWorkEcharts />
                                {/* <FlexWrap style={{ height: '242px' }}>
                                    <img src={Attendance} />
                                    <EmptyText>需添加本班学生和课表后显示考勤数据</EmptyText>
                                </FlexWrap> */}
                                
                            </PageCardDIvWrap>
                        </Col>
                    </Row>
                </Col>
                <Col span={13} style={{paddingRight: '20px'}}>
                    <PageCardDIvWrap>
                        <PageCardDIvWrapHeader>
                            班级课表
                        </PageCardDIvWrapHeader>
                        <GradeClassStudentWrap style={{ height: '675px',padding: '0 10px' }}>
                            {
                                couresListData && couresListData.length >0 ? 
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
                                                <Row>
                                                    <Col span={2} style={{lineHeight: '80px'}}>{item.name}</Col>
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
                                : <FlexWrap >
                                <img src={ScheduleEmpty} />
                                <EmptyText>暂无本班课表，请导入课表或进行排课</EmptyText>
                            </FlexWrap>
                            }
                        </GradeClassStudentWrap>
                        
                    </PageCardDIvWrap>
                </Col>
                <Col span={5}>
                    <Col span={24}>
                        <PageCardDIvWrap>
                            <PageCardDIvWrapHeader>
                                <Col span={12}>年级教师</Col>
                                <Col span={12} style={{ textAlign: 'right' }}>
                                    <PlusOutlined onClick={gradeBindDataShow} />
                                </Col>
                            </PageCardDIvWrapHeader>
                            {
                                teacherListData && teacherListData.length ? 
                                    <GradeClassStudentWrap style={{ height: '403px' }}>
                                        {
                                            teacherListData.map(item=>{
                                                return (
                                                    <GradeClassStudentListLi style={{ width:'100%' }}>
                                                        <GradeClassStudentImg src={Emblem} />
                                                        <GradeClassStudentText>
                                                            <GradeClassStudentSpan>{item.teacherName}
                                                                { item.tag && <TeacherTag>{item.tag}</TeacherTag> }
                                                            </GradeClassStudentSpan>
                                                            <GradeClassStudentSpan>{item.teachCoures}</GradeClassStudentSpan>
                                                        </GradeClassStudentText>
                                                        <GradeClassStudentRightArea>
                                                            <HddOutlined style={{color:'#1FB4B9'}} onClick={gradeBindDataShow} />
                                                        </GradeClassStudentRightArea>
                                                    </GradeClassStudentListLi>
                                                );
                                            })
                                        }
                                    </GradeClassStudentWrap>
                                :  <FlexWrap>
                                    <img src={TeacherEmpty} />
                                    <EmptyText>点击右上角添加教师</EmptyText>
                                </FlexWrap>
                                }
                        
                        </PageCardDIvWrap>
                      </Col>
                      <Col span={24} style={{ marginTop:'10px' }}>
                        <PageCardDIvWrap>
                            <PageCardDIvWrapHeader>
                                教室及设备
                            </PageCardDIvWrapHeader>
                            <EquipTableMain />
                            {/* <FlexWrap style={{ height: '163px' }}>
                                <img src={EquEmpty} />
                                <EmptyText>点击右上角添加本班教室</EmptyText>
                            </FlexWrap> */}
                        </PageCardDIvWrap>
                      </Col>
                </Col>
            </Row>
            { gradeDetailBindFromShow && <FormGradeBindComponent /> }
		</div>
    );
};
const ClassDetailMain = withRouter(ClassDetailMainRouter)
export {
    ClassDetailMain
};