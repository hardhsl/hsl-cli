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
    ClassEmpty,
    CouresEmpty,
    TeacherEmpty,
    TestEmpty
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
    WorkRestListRightLessonWrap,
    WorkRestListRightSign,
    WorkRestListRightText,
    WorkRestListRightTextTop,
    WorkRestListRightTextTwo,
    WorkRestListRightTimeWrap,
    WorkRestListRightTimeText,
    WorkRestListRightTimeImg,
    TeacherTag
} from './ui';
import { Click } from "@/assert/img/basic/index";
import { TestTableMain } from './table';
import { FormGradeBindComponent } from './from'
const gradeDetailData = (state: IState) => {
    return {
        gradeDetailBindFromShow : state.EducationGradeManage.gradeDetailBindFromShow
    };
};
const GradeDetailMainRouter = () => {
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
    const gradeCoures: Array<object> = [
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
        { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
    ]
    const teacherListData: any[] = [
        { teacherName:'马老师',teachCoures:'语文课',tag:'班主任'},
        { teacherName:'马老师',teachCoures:'语文课',},
        { teacherName:'马老师',teachCoures:'语文课',},
    ]
    const styles = {
        defaultBg: {
            background: 'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))' 
        },
        activeBg: {
            background: 'linear-gradient(90deg,rgba(146,113,252,1),rgba(248,94,163,1))',
            boxShadow: '0px 1px 16px 2px rgba(167,109,234,0.74)'
        },
        topWrapScroll:{
            display: 'flex',
            overflow: 'auto'
        },
        padding: '0 10px'
    }
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
                <Col span={19} style={{paddingRight: '20px'}}>
                    <PageCardDIvWrap>
                        <PageCardDIvWrapHeader>
                            <span>班级学生</span>
                        </PageCardDIvWrapHeader>
                        {
                            studentData && studentData.length > 0  ? 
                            <GradeClassStudentWrap>
                                {studentData.map((item)=>{
                                    return (
                                        <GradeClassStudentListLi>
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
                            <img src={ClassEmpty} />
                        </FlexWrap>
                        }
                        
                    </PageCardDIvWrap>
                    <Row style={{ marginTop:'20px'}}>
                        <Col span={12} style={{paddingRight: '20px'}}>
                            <PageCardDIvWrap>
                                <PageCardDIvWrapHeader>
                                    <Col span={12}>年级课程</Col>
                                    <Col span={12}  style={{ textAlign: 'right' }}>
                                        <PlusOutlined onClick={gradeBindDataShow} />
                                    </Col>
                                </PageCardDIvWrapHeader>
                                {
                                    gradeCoures &&  gradeCoures.length > 0 ?
                                     <GradeClassStudentWrap>
                                         <Row>
                                         {
                                             gradeCoures.map((item: any,index: number)=>{
                                                 return(
                                                    <Col span={8} style={{padding: '5px'}}>
                                                        <WorkRestListRightLessonWrap >
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
                                     </GradeClassStudentWrap>
                                    : <FlexWrap>
                                    <img src={CouresEmpty} />
                                </FlexWrap>
                                }
                                
                            </PageCardDIvWrap>
                        </Col>
                        <Col span={12}>
                            <PageCardDIvWrap>
                                <PageCardDIvWrapHeader>
                                    <Col span={12}>考试计划</Col>
                                    <Col span={12} style={{ textAlign: 'right' }}>
                                        <PlusOutlined onClick={gradeBindDataShow} />
                                    </Col>
                                </PageCardDIvWrapHeader>
                                { <TestTableMain /> ? <TestTableMain /> : <FlexWrap>
                                    <img src={TestEmpty} />
                                </FlexWrap> }
                                
                            </PageCardDIvWrap>
                        </Col>
                    </Row>
                </Col>
                <Col span={5}>
                    <PageCardDIvWrap>
                        <PageCardDIvWrapHeader>
                            <Col span={12}>年级教师</Col>
                            <Col span={12} style={{ textAlign: 'right' }}>
                                <PlusOutlined onClick={gradeBindDataShow} />
                            </Col>
                        </PageCardDIvWrapHeader>
                        {
                            teacherListData && teacherListData.length ? 
                                <GradeClassStudentWrap >
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
                            </FlexWrap>
                            }
                       
                    </PageCardDIvWrap>
                </Col>
            </Row>
            { gradeDetailBindFromShow && <FormGradeBindComponent /> }
		</div>
    );
};
const GradeDetailMain = withRouter(GradeDetailMainRouter)
export {
    GradeDetailMain
};