import React, { useState } from "react";
import {useDispatch,useMappedState} from 'redux-react-hook';
import { DeleteFilled, EditFilled, HddOutlined } from '@ant-design/icons';
import { Row, Col, Modal } from 'antd';
import { withRouter } from 'react-router-dom';
const { confirm } = Modal;
import {IState} from '@/store';
import './style.css';
import {
	CardWrap,
	CardTextTitle,
	CardTextContent,
	CardContentFlex,
	CardIconSpan,
    CardHeaderWrap,
    PageCardDIvWrap,
    PageCardDIvWrapHeader,
    FlexWrap,
    CardTopWrap,
    CardAvatar,
    CardTeacherTag
} from './ui';
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
} from '../../educational/gradeDetail/ui';
import { EquipTableMain } from './table'
const gradeDetailData = (state: IState) => {
    return {
        gradeDetailBindFromShow : state.EducationGradeManage.gradeDetailBindFromShow
    };
};
const TeacherDetailMainRouter = () => {
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
    const styles = {
        defaultBg: {
            background: 'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))' ,
            height: '222px'
        },
        activeBg: {
            background: 'linear-gradient(90deg,rgba(146,113,252,1),rgba(248,94,163,1))',
            boxShadow: '0px 1px 16px 2px rgba(167,109,234,0.74)',
            height: '222px'
        },
        topWrapScroll:{
            display: 'flex',
            overflow: 'auto'
        },
        padding: '0 10px'
    }
    return (
        <div>
			<Row>
                <div style={styles.topWrapScroll}>
				{
					data.map((item: any,index: number)=>{
						return (
                            <Col span={12} style={{ padding:'0 8px'}} key={index}>
                                <CardTopWrap style={ index == 1 ? styles.activeBg : styles.defaultBg }>
                                    <CardAvatar src='http://h.hiphotos.baidu.com/zhidao/pic/item/7c1ed21b0ef41bd51ad0c42654da81cb38db3d64.jpg'></CardAvatar>
                                    <CardWrap>
                                        <CardHeaderWrap>
                                            <CardTextTitle>{ item.gradeType } <CardTeacherTag>班主任</CardTeacherTag></CardTextTitle>
                                            <p style={{ display:'flex' }}>
                                                <CardIconSpan><EditFilled /></CardIconSpan>
                                                <CardIconSpan><DeleteFilled /></CardIconSpan>
                                            </p>
                                        </CardHeaderWrap>
                                        <CardContentFlex>
                                            <div>
                                                <CardTextContent>年龄：{ item.classNum }</CardTextContent>
                                                <CardTextContent>民族：汉族</CardTextContent>
                                                <CardTextContent>出生日期：2020年01月01日</CardTextContent>
                                                <CardTextContent>身份证号：123432857304782956</CardTextContent>
                                            </div>
                                            <div>
                                                <CardTextContent>工号：007</CardTextContent>
                                                <CardTextContent>部门：高二物理组</CardTextContent>
                                                <CardTextContent>任课课程：物理课</CardTextContent>
                                                <CardTextContent>任教年级：高二年级</CardTextContent>
                                            </div>
                                            <div>
                                                <CardTextContent>学历：硕士</CardTextContent>
                                                <CardTextContent>教师账号：201405007</CardTextContent>
                                                <CardTextContent>电话：15839847384</CardTextContent>
                                            </div>
                                        </CardContentFlex>
                                    </CardWrap>
                                </CardTopWrap>
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
                            <span>授课班级</span>
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
                                    教师简介
                                </PageCardDIvWrapHeader>
                                {/* <FlexWrap style={{ height: '242px' }}>
                                    <img src={Attendance} />
                                    <EmptyText>需添加本班学生和课表后显示考勤数据</EmptyText>
                                </FlexWrap> */}
                                
                            </PageCardDIvWrap>
                        </Col>
                    </Row>
                </Col>
                <Col span={18}>
                    <PageCardDIvWrap style={{ height: '632px' }}>
                        <PageCardDIvWrapHeader style={{ marginBottom:'0' }}>
                            授课记录
                        </PageCardDIvWrapHeader>
                        <EquipTableMain />
                        
                    </PageCardDIvWrap>              
                </Col>
             </Row>
		</div>
    );
};
const TeacherDetailMain = withRouter(TeacherDetailMainRouter)
export {
    TeacherDetailMain
};