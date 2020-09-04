import React from "react";
import { DeleteOutlined, LeftOutlined, MinusCircleFilled, RightOutlined } from '@ant-design/icons';
import { Col, Row, Modal } from "antd";
const { confirm } = Modal;
import {
    styles,
    LocaltionWrap,
    CardIconBottom,
    CardIconSpan,
    FloorLouImg,
    FLexWrap
} from './ui';
import { AttendenceTableMain } from './table';
import { FloorImg, LouImg  } from '@/assert/img/basic/index';

const ClassRoomMain = () => {

    return (
        <div className="app-container-radius">
            <Row style={styles.HeaderRow}>
                <Col span={4}>
                    <LocaltionWrap>
                        <LeftOutlined />
                        <FLexWrap><FloorLouImg src={LouImg} /><span>紫东楼</span></FLexWrap>
                        <RightOutlined />
                    </LocaltionWrap>
                </Col>
                <Col span={20}>
                <CardIconBottom>
                    <CardIconSpan><span className="iconfont">&#xe640;</span></CardIconSpan>
                    <CardIconSpan><span className="iconfont" style={{ fontSize:'13px' }}>&#xe63e;</span></CardIconSpan>
                    <CardIconSpan><span className="iconfont"  style={{ fontSize:'15px',marginRight:'0px' }} onClick={(index: any)=>{
                        confirm({
                            content: '此操作将从列表中删除信息，是否继续？',
                            icon: <DeleteOutlined />,
                            onCancel() {},
                            onOk(e) {
                                
                                return new Promise((resolve, reject) => {
                                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                                }).catch(() => console.log('Oops errors!'));
                            },
                            })
                        }
                    }>&#xe63f;</span></CardIconSpan>
                </CardIconBottom>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <LocaltionWrap style={styles.BorderBottom}>
                        <i></i>
                        <FLexWrap><FloorLouImg src={FloorImg}></FloorLouImg><span>二楼</span></FLexWrap>
                        <MinusCircleFilled style={{ 'color':'#FF4D62' }} />
                    </LocaltionWrap>
                    <LocaltionWrap style={styles.BorderBottom}>
                        <i></i>
                        <FLexWrap><FloorLouImg src={FloorImg}></FloorLouImg><span>二楼</span></FLexWrap>
                        <MinusCircleFilled style={{ 'color':'#FF4D62' }} />
                    </LocaltionWrap>
                    <LocaltionWrap style={styles.BorderBottom}>
                        <i></i>
                        <FLexWrap><FloorLouImg src={FloorImg}></FloorLouImg><span>二楼</span></FLexWrap>
                        <MinusCircleFilled style={{ 'color':'#FF4D62' }} />
                    </LocaltionWrap>
                </Col>
                <Col span={20} style={styles.BorderLeft}>
                    <AttendenceTableMain />
                </Col>
            </Row>
        </div>
    );
}

export {
    ClassRoomMain
}