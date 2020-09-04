import React from 'react';
import intl from 'react-intl-universal';
import { compony } from '@/util/cardBgchange';
import {
	CardTextTitle,
    CardHeaderWrap,
    PageCardDIvRightImg
} from '@/baseUI/pageCard';
import './style.css';
import { CardWrap } from './ui';
import { Col, Row } from 'antd';
import { CardTag } from '@/assert/img/base';
import { Link } from 'react-router-dom';

const StudentCommentMain = () => {
    return <div>
        <Row gutter={20}>
            <Col span={6}>
                <Link to="/user/studentComment/attendencePage">
                    <CardWrap style={compony(0)}>
                        <CardHeaderWrap>
                            <CardTextTitle className="cardTitle">
                                <span className="iconfont">&#xe645;</span>
                                <span> {intl.get('STUDENT_PINGJIA.KAOQIN_PINGJIA')}</span>
                            </CardTextTitle>
                            <PageCardDIvRightImg src={CardTag} />
                        </CardHeaderWrap>
                        <p>{intl.get('STUDENT_PINGJIA.KAOQIN_PINGJIA_TXT')}</p>
                        <h3 className="h3">{intl.get('STUDENT_PINGJIA.INTO_PINGJIA')} {">"}{">"}</h3>
                    </CardWrap>
                </Link>
            </Col>
            <Col span={6}>
                <Link to="/user/studentComment/eduEvaluate">
                    <CardWrap style={compony(1)}>
                        <CardHeaderWrap>
                            <CardTextTitle className="cardTitle">
                                <span className="iconfont">&#xe647;</span>
                                <span>{intl.get('STUDENT_PINGJIA.DEYU_PINGJIA')}</span>
                            </CardTextTitle>
                            <PageCardDIvRightImg src={CardTag} />
                        </CardHeaderWrap>
                        <p>{intl.get('STUDENT_PINGJIA.DEYU_PINGJIA_TXT')}</p>
                        <h3 className="h3">{intl.get('STUDENT_PINGJIA.INTO_PINGJIA')} {">"}{">"}</h3>
                    </CardWrap>
                </Link>
            </Col>
            <Col span={6}>
                <Link to="/user/studentComment/process">
                    <CardWrap style={compony(2)}>
                        <CardHeaderWrap>
                            <CardTextTitle className="cardTitle">
                                <span className="iconfont">&#xe649;</span>
                                <span>{intl.get('STUDENT_PINGJIA.GUOCHENG_PINGJIA')}</span>
                            </CardTextTitle>
                            <PageCardDIvRightImg src={CardTag} />
                        </CardHeaderWrap>
                        <p>{intl.get('STUDENT_PINGJIA.GUOCHENG_PINGJIA_TXT')}</p>
                        <h3 className="h3">{intl.get('STUDENT_PINGJIA.INTO_PINGJIA')} {">"}{">"}</h3>
                    </CardWrap>
                </Link>
            </Col>
            <Col span={6}>
                <Link to="/user/student/">
                    <CardWrap style={compony(3)}>
                        <CardHeaderWrap>
                            <CardTextTitle className="cardTitle">
                                <span className="iconfont">&#xe64a;</span>
                                <span>{intl.get('STUDENT_PINGJIA.CHENGJI_PINGJIA')}</span>
                            </CardTextTitle>
                            <PageCardDIvRightImg src={CardTag} />
                        </CardHeaderWrap>
                        <p>{intl.get('STUDENT_PINGJIA.CHENGJI_PINGJIA_TXT')}</p>
                        <h3 className="h3">{intl.get('STUDENT_PINGJIA.INTO_PINGJIA')} {">"}{">"}</h3>
                    </CardWrap>
                </Link>
            </Col>
            <Col span={6}>
                <Link to="/user/student/">
                    <CardWrap style={compony(2)}>
                        <CardHeaderWrap>
                            <CardTextTitle className="cardTitle">
                                <span className="iconfont">&#xe648;</span>
                                <span>{intl.get('STUDENT_PINGJIA.KECHENG_PINGJIA')}</span>
                            </CardTextTitle>
                            <PageCardDIvRightImg src={CardTag} />
                        </CardHeaderWrap>
                        <p>{intl.get('STUDENT_PINGJIA.KECHENG_PINGJIA_TXT')}</p>
                        <h3 className="h3">{intl.get('STUDENT_PINGJIA.INTO_PINGJIA')} {">"}{">"}</h3>
                    </CardWrap>
                </Link>
            </Col>
            <Col span={6}>
                <Link to="/user/student/">
                    <CardWrap style={compony(3)}>
                        <CardHeaderWrap>
                            <CardTextTitle className="cardTitle">
                                <span className="iconfont">&#xe646;</span>
                                <span>{intl.get('STUDENT_PINGJIA.PINGJIA_JILU')}</span>
                            </CardTextTitle>
                            <PageCardDIvRightImg src={CardTag} />
                        </CardHeaderWrap>
                        <p>{intl.get('STUDENT_PINGJIA.PINGJIA_JILU_TXT')}</p>
                        <h3 className="h3">{intl.get('STUDENT_PINGJIA.CHAKAN_JILU')} {">"}{">"}</h3>
                    </CardWrap>
                </Link>
            </Col>
        </Row>
    </div>
}

export {
    StudentCommentMain
}