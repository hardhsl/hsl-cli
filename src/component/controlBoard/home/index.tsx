import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Row, Col, Badge } from 'antd';
import { useMappedState } from 'redux-react-hook';
import { 
    TopLeftSignWrap,
    TopRightSignWrap,
    TopLeftSign,
Styles } from './ui';

import {
        MyDetail,
        MyHomeWork,
        MyKebiao,
        OnLineEquipBg,
        ScheduleBg,
        StudentPingjia,
        TestCount,
        WeekDayBg,
        WorkStudentBg,
    } from '@/assert/img/controlBoard/home';
import {
    PageCardDIvWrap,
    PageCardDIvWrapHeader,
    PageCardDIvWrapMain,
} from '@/baseUI/pageCard';
import { BannerComponent } from './banner';
import { CalendarComponent } from './calendar';
import { PlanComponent } from './addPlan';
import {IState} from '@/store';
const ControlHomeState = (state: IState) => {
    return {
        AddDatePlan: state.ControlBoardHome.addDatePlan
    };
};
import './style.scss'
const ControlHome = () => {
    const {
        AddDatePlan
    } = useMappedState(ControlHomeState)
    return (
        <div>
            <Row>
                <Col span={17} style={{paddingRight:'10px'}}>
                    <TopLeftSignWrap>
                        <TopLeftSign background={WeekDayBg}>
                            <h5>2020年6月12日</h5>
                            <h4>星期五</h4>
                        </TopLeftSign>
                        <TopLeftSign background={ScheduleBg}>
                            <h5>距离期中考试</h5>
                            <h4>11<span>天</span></h4>
                        </TopLeftSign>
                        <TopLeftSign background={WorkStudentBg}>
                            <h5>今日出勤学生</h5>
                            <h4>3254 / 3321<span>人</span></h4>
                        </TopLeftSign>
                        <TopLeftSign background={OnLineEquipBg}>
                            <h5>在线设备</h5>
                            <h4>82 / 87<span>台</span></h4>
                        </TopLeftSign>
                    </TopLeftSignWrap>
                </Col>
                <Col span={7} style={{paddingLeft:'10px'}}>
                    <TopRightSignWrap>
                        <div>
                            <img src={MyKebiao} />
                            <span>我的课表</span>
                        </div>
                        <div>
                            <img src={MyHomeWork} />
                            <span>作业布置</span>
                        </div>
                        <div>
                            <img src={StudentPingjia} />
                            <span>作业布置</span>
                        </div>
                        <div>
                            <img src={TestCount} />
                            <span>考试成绩</span>
                        </div>
                        <div>
                            <img src={MyDetail} />
                            <span>个人详情</span>
                        </div>
                    </TopRightSignWrap>
                </Col>
            </Row>
            <Row style={{ marginTop:'20px' }}>
                <Col span={17} style={{paddingRight:'10px'}}>
                    <PageCardDIvWrap>
                        <PageCardDIvWrapHeader style={{ padding: '0 25px' }}>风采&资讯</PageCardDIvWrapHeader>
                        <PageCardDIvWrapMain style={{ padding: '25px' }}>
                            <BannerComponent />
                        </PageCardDIvWrapMain>
                    </PageCardDIvWrap>
                </Col>
                <Col span={7} style={{paddingLeft:'10px'}}>
                    <PageCardDIvWrap>
                        <PageCardDIvWrapHeader style={Styles.SpaceBetween}><span>学校通知</span><span>2020-06-07 发布</span></PageCardDIvWrapHeader>
                        <PageCardDIvWrapMain style={{ padding: '20px' }}>
                            <p>杭州近日持续高温，出于对学生身体健康的考虑，校方经会议商讨后决定本周二、周三放假两天，补课时间暂定为本周末，请各位班主任及时通知学生及家长。杭州近日持续高温，出于对学生身体健康的考虑，校方经会议商讨后决定本周二、周三放假两天，补课时间暂定为本周末，请各位班主任及时通知学生及家长。</p>
                            <div className="schoolMsgTab">
                                <div><LeftOutlined /><span>上一条</span></div>
                                <div><span>下一条</span><RightOutlined /></div>
                            </div>
                        </PageCardDIvWrapMain>
                    </PageCardDIvWrap>
                    <div style={{height:'20px'}}></div>
                    <PageCardDIvWrap>
                        <PageCardDIvWrapHeader style={Styles.SpaceBetween}>待处理</PageCardDIvWrapHeader>
                        <PageCardDIvWrapMain style={{ padding: '20px' }}>
                            <div className="dealWithBg">
                                <Badge count={5} style={{ transform:'scale(0.6)' }}><img src={MyKebiao} /></Badge>
                                <span>请假申请</span>
                            </div>
                            <div className="dealWithBg workBg">
                                <Badge count={5} style={{ transform:'scale(0.6)' }}><img src={MyKebiao} /></Badge>
                                <span>学生作业</span>
                            </div>
                            <div className="dealWithBg testBg">
                                <Badge count={5} style={{ transform:'scale(0.6)' }}><img src={MyKebiao} /></Badge>
                                <span>上传成绩</span>
                            </div>
                        </PageCardDIvWrapMain>
                    </PageCardDIvWrap>
                </Col>
                <Col span={24}>
                    <CalendarComponent />
                </Col>
            </Row>
            { AddDatePlan &&  <PlanComponent />}
        </div>
    );

}

export {
    ControlHome
}