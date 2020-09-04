import React from 'react';
import { Headers } from './headers';
import { Row, Col } from 'antd';
import { CheckWorkWrap, 
    CheckWorkHeader,
    CheckWorkHeaderTitle,
    CheckWorkHeaderTitleTxt,
    CheckWorkHeaderIconWrap,
    CheckWorkHeaderLine,
    CheckWorkContentMain,
    CheckWorkMainText
} from './ui';
import { ListComponent } from './componentList';
import {IState} from '@/store';
import { useMappedState } from 'redux-react-hook';
import { AddAttendenceMould } from './from';
const AttendenceState = (state: IState) => {
    return {
        addAttendenceMouldShow: state.Attendence.addAttendenceMouldShow
    };
};

const gradeCoures: Array<object> = [
    { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
    { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
    { couresName:'语文课', couresEnglish:'Chinese',couresNumber:'50' },
]
const AttendenceMouldMain = () => {
    const {
        addAttendenceMouldShow
    } = useMappedState(AttendenceState)
    return (
        <div>
            <Headers />
            <Row style={{ margin:'20px -10px 0'}}>
                <Col span={6} style={{ padding:'0 10px' }}>
                    <CheckWorkWrap>
                        <CheckWorkHeader>
                            <CheckWorkHeaderTitle>
                                <CheckWorkHeaderTitleTxt>高中考勤</CheckWorkHeaderTitleTxt>
                                <div style={{ display:'flex' }}>
                                    <CheckWorkHeaderIconWrap><span className="iconfont">&#xe63e;</span></CheckWorkHeaderIconWrap>
                                    <CheckWorkHeaderIconWrap><span className="iconfont">&#xe63f;</span></CheckWorkHeaderIconWrap>
                                </div>
                            </CheckWorkHeaderTitle>
                            <CheckWorkHeaderLine>年级：高三年级</CheckWorkHeaderLine>
                        </CheckWorkHeader>
                        <CheckWorkContentMain>
                            <CheckWorkMainText>上午考勤</CheckWorkMainText>
                            <ListComponent data={gradeCoures} />
                            <CheckWorkMainText>下午考勤</CheckWorkMainText>
                            <ListComponent data={gradeCoures} />
                            <CheckWorkMainText>晚上考勤</CheckWorkMainText>
                            <ListComponent data={gradeCoures} />
                        </CheckWorkContentMain>
                    </CheckWorkWrap>

                </Col>
                <Col span={6} style={{ padding:'0 10px' }}>
                    <CheckWorkWrap>
                        <CheckWorkHeader>
                            <CheckWorkHeaderTitle>
                                <CheckWorkHeaderTitleTxt>高中考勤</CheckWorkHeaderTitleTxt>
                                <div style={{ display:'flex' }}>
                                    <CheckWorkHeaderIconWrap><span className="iconfont">&#xe63e;</span></CheckWorkHeaderIconWrap>
                                    <CheckWorkHeaderIconWrap><span className="iconfont">&#xe63f;</span></CheckWorkHeaderIconWrap>
                                </div>
                            </CheckWorkHeaderTitle>
                            <CheckWorkHeaderLine>
                                年级：高三年级、高一年级、高二年级、初三年级、初二年级
                            </CheckWorkHeaderLine>
                        </CheckWorkHeader>
                        <CheckWorkContentMain>
                            <CheckWorkMainText>上午考勤</CheckWorkMainText>
                            <ListComponent data={gradeCoures} />
                            <CheckWorkMainText>下午考勤</CheckWorkMainText>
                            <ListComponent data={gradeCoures} />
                        </CheckWorkContentMain>
                    </CheckWorkWrap>

                </Col>
            </Row>
            { addAttendenceMouldShow && <AddAttendenceMould /> }
        </div>
    )

}
export {
    AttendenceMouldMain
}