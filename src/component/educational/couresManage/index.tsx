import React from 'react';
import { Headers } from './headers';
import { CopyOutlined, DeleteFilled, EditFilled, EyeFilled, HddOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useDispatch, useMappedState } from 'redux-react-hook';
import {IState} from '@/store';
import { 
    CouresListWrap ,
    CouresListTop,
    CouresListHeaderTitle,
    CouresListCouresName,
    CouresListCouresType,
    CouresListHeaderContent,
    CouresListHeaderText,
    CardIconSpan,
    CardIconBottom,
    CouresListContentMain
} from './ui';
import {
    GradeClassStudentListLi,
    GradeClassStudentImg,
    GradeClassStudentText,
    GradeClassStudentSpan,
    GradeClassStudentRightArea,
    TeacherTag
} from '../gradeDetail/ui';
import {
    Emblem
} from '@/assert/img/base/index';
import { FlexWrap } from '@/baseUI/pageCard';
import {
    CouresListEmpty
} from '@/assert/img/educational/index';
import { FormAddCouresComponent } from './addCoures';
const couresManageData = (state: IState) => {
    return {
        addCouresShow : state.EducationCouresManage.addCouresShow
    };
};
const CouresManageMain = ()=>{
    const {
        addCouresShow
    } = useMappedState(couresManageData);
    return (
        <div>
            <Headers />
            <Row style={{ marginTop:'20px',margin: '20px -10px 0'}}>
                <Col span={6} style={{ padding: '0 10px' }}>
                    <CouresListWrap>
                        <CouresListTop>
                            <CouresListHeaderTitle>
                                <CouresListCouresName>语文课</CouresListCouresName>
                                <div>
                                    <CopyOutlined style={{ marginRight: '10px' }} />
                                    <CouresListCouresType>选休课</CouresListCouresType>
                                </div>
                            </CouresListHeaderTitle>
                            <CouresListHeaderContent>
                                <CouresListHeaderText>
                                    <CouresListCouresType>年级：高一年级</CouresListCouresType>
                                    <CouresListCouresType style={{ marginTop:'10px' }}>课时：100</CouresListCouresType>
                                </CouresListHeaderText>
                                <CardIconBottom>
									<CardIconSpan><EyeFilled /></CardIconSpan>
									<CardIconSpan><EditFilled /></CardIconSpan>
									<CardIconSpan><DeleteFilled /></CardIconSpan>
								</CardIconBottom>
                            </CouresListHeaderContent>
                        </CouresListTop>
                        <CouresListContentMain>
                        <GradeClassStudentListLi style={{ width:'100%' }}>
                                <GradeClassStudentImg src={Emblem} />
                                <GradeClassStudentText>
                                    <GradeClassStudentSpan>马老师
                                        <TeacherTag>班主任</TeacherTag> 
                                    </GradeClassStudentSpan>
                                    <GradeClassStudentSpan>语文课</GradeClassStudentSpan>
                                </GradeClassStudentText>
                                <GradeClassStudentRightArea>
                                    <HddOutlined style={{color:'#1FB4B9'}} />
                                </GradeClassStudentRightArea>
                            </GradeClassStudentListLi>
                        </CouresListContentMain>
                    </CouresListWrap>
                </Col>
                <Col span={6} style={{ padding: '0 10px' }}>
                    <CouresListWrap>
                        <CouresListTop>
                            <CouresListHeaderTitle>
                                <CouresListCouresName>语文课</CouresListCouresName>
                                <div>
                                    <CopyOutlined style={{ marginRight: '10px' }} />
                                    <CouresListCouresType>选休课</CouresListCouresType>
                                </div>
                            </CouresListHeaderTitle>
                            <CouresListHeaderContent>
                                <CouresListHeaderText>
                                    <CouresListCouresType>年级：高一年级</CouresListCouresType>
                                    <CouresListCouresType style={{ marginTop:'10px' }}>课时：100</CouresListCouresType>
                                </CouresListHeaderText>
                                <CardIconBottom>
									<CardIconSpan><EyeFilled /></CardIconSpan>
									<CardIconSpan><EditFilled /></CardIconSpan>
									<CardIconSpan><DeleteFilled /></CardIconSpan>
								</CardIconBottom>
                            </CouresListHeaderContent>
                        </CouresListTop>
                        <CouresListContentMain>
                            <FlexWrap style={{ height: '100%',marginTop:'50px' }}>
                                <img src={CouresListEmpty} />
                                <span style={{marginTop:'20px'}}>未添加任何教师</span>
                            </FlexWrap>
                        </CouresListContentMain>
                    </CouresListWrap>
                </Col>
                <Col span={6} style={{ padding: '0 10px' }}>
                    <CouresListWrap>
                        <CouresListTop>
                            <CouresListHeaderTitle>
                                <CouresListCouresName>语文课</CouresListCouresName>
                                <div>
                                    <CopyOutlined style={{ marginRight: '10px' }} />
                                    <CouresListCouresType>选休课</CouresListCouresType>
                                </div>
                            </CouresListHeaderTitle>
                            <CouresListHeaderContent>
                                <CouresListHeaderText>
                                    <CouresListCouresType>年级：高一年级</CouresListCouresType>
                                    <CouresListCouresType style={{ marginTop:'10px' }}>课时：100</CouresListCouresType>
                                </CouresListHeaderText>
                                <CardIconBottom>
									<CardIconSpan><EyeFilled /></CardIconSpan>
									<CardIconSpan><EditFilled /></CardIconSpan>
									<CardIconSpan><DeleteFilled /></CardIconSpan>
								</CardIconBottom>
                            </CouresListHeaderContent>
                        </CouresListTop>
                        <CouresListContentMain>
                        <GradeClassStudentListLi style={{ width:'100%' }}>
                                <GradeClassStudentImg src={Emblem} />
                                <GradeClassStudentText>
                                    <GradeClassStudentSpan>马老师
                                        <TeacherTag>班主任</TeacherTag> 
                                    </GradeClassStudentSpan>
                                    <GradeClassStudentSpan>语文课</GradeClassStudentSpan>
                                </GradeClassStudentText>
                                <GradeClassStudentRightArea>
                                    <HddOutlined style={{color:'#1FB4B9'}} />
                                </GradeClassStudentRightArea>
                            </GradeClassStudentListLi>
                        </CouresListContentMain>
                    </CouresListWrap>
                </Col>
                <Col span={6} style={{ padding: '0 10px' }}>
                    <CouresListWrap>
                        <CouresListTop>
                            <CouresListHeaderTitle>
                                <CouresListCouresName>语文课</CouresListCouresName>
                                <div>
                                    <CopyOutlined style={{ marginRight: '10px' }} />
                                    <CouresListCouresType>选休课</CouresListCouresType>
                                </div>
                            </CouresListHeaderTitle>
                            <CouresListHeaderContent>
                                <CouresListHeaderText>
                                    <CouresListCouresType>年级：高一年级</CouresListCouresType>
                                    <CouresListCouresType style={{ marginTop:'10px' }}>课时：100</CouresListCouresType>
                                </CouresListHeaderText>
                                <CardIconBottom>
									<CardIconSpan><EyeFilled /></CardIconSpan>
									<CardIconSpan><EditFilled /></CardIconSpan>
									<CardIconSpan><DeleteFilled /></CardIconSpan>
								</CardIconBottom>
                            </CouresListHeaderContent>
                        </CouresListTop>
                        <CouresListContentMain>
                            <FlexWrap style={{ height: '100%',marginTop:'50px' }}>
                                <img src={CouresListEmpty} />
                                <span style={{marginTop:'20px'}}>未添加任何教师</span>
                            </FlexWrap>
                        </CouresListContentMain>
                    </CouresListWrap>
                </Col>
            </Row>

            { addCouresShow && <FormAddCouresComponent></FormAddCouresComponent>}
        </div>
    );

}

export {
    CouresManageMain
}