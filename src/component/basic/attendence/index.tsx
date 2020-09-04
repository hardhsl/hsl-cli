import React from 'react';
import { Headers } from './headers';
import { Row, Col } from 'antd';
import './style.css';
import { CheckWorkEcharts } from './echarts';
import { LineEcharts } from './lineEcharts';
import { AttendenceTableMain } from './table';
import { PageCardDIvWrap, PageCardDIvWrapHeader } from '@/baseUI/pageCard';
const AttendenceMain = () => {
    return (
        <div>
            <Headers />
            <Row className="attendRow">
                <Col span={5} className="attendCol">
                    <div className="attendBox Blue">
                        <div className="attendTxt">
                            <p>已考勤</p>
                            <p className="iconText"><span className="iconfont">&#xe644;</span>18人</p>
                        </div>
                        <div className="attendIcon">
                            <span className="iconfont">&#xe642;</span>
                        </div>
                    </div>
                    <div className="attendBox Purple">
                        <div className="attendTxt">
                            <p>未考勤</p>
                            <p className="iconText"><span className="iconfont">&#xe644;</span>18人</p>
                        </div>
                        <div className="attendIcon">
                            <span className="iconfont">&#xe643;</span>
                        </div>
                    </div>
                    <div className="attendBox Orange">
                        <div className="attendTxt">
                            <p>未考勤</p>
                            <p className="iconText"><span className="iconfont">&#xe644;</span>18人</p>
                        </div>
                        <div className="attendIcon">
                            <span className="iconfont">&#xe641;</span>
                        </div>
                    </div>
                </Col>
                <Col span={19}>
                    <Row className="echartRow"> 
                        <Col span={8}>
                            <CheckWorkEcharts />
                        </Col>
                        <Col span={16}>
                            <LineEcharts />
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                <PageCardDIvWrap>
                    <PageCardDIvWrapHeader style={{ marginBottom:0 }}>
                        请假记录
                    </PageCardDIvWrapHeader>
                    <AttendenceTableMain />
                </PageCardDIvWrap>

                </Col>
            </Row>

        </div>
    )

}
export{
    AttendenceMain
}