import React from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { Row, Col, Modal } from 'antd';
import {
    PageCardDIvWrap,
    PageCardDIvWrapHeader,
} from '@/baseUI/pageCard';
import {
    WorkRestListLeftTitleWrap,
    WorkRestListLeftTitle,
    WorkRestListRightLessonWrap,
    WorkRestListRightSign,
    WorkRestListRightText,
    WorkRestListRightTextTop,
    WorkRestListRightTextTwo,
    WorkRestListRightTimeWrap,
    WorkRestListRightTimeText,
    WorkRestListRightTimeImg
} from "@/component/basic/workRestTime/ui";
import { Click } from "@/assert/img/basic/index";
const { confirm } = Modal;
const styles = {
    flex:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    colorA:{
        background: '#02CDDF'
    },
    colorB:{
        background: '#9271FC'
    },
    colorC:{
        background: '#F85EA3'
    },
    colorD:{
        background: '#F8C68A'
    },
}

const WorkRestList = (props :any) => {
    console.log(props,'子组件接收的值')
    return (
        <div>
          <Row>
              {
                  props.data && props.data.map((item: { name: React.ReactNode; forenone: any[]; afternoon: any[]; evening: any[]; },index: any)=>{
                      return (
                          <Col span={24} key={index}>
                              <PageCardDIvWrap>
                                  <PageCardDIvWrapHeader>
                                      <Row>
                                        <Col span={3} style={{color:'#333'}}>{item.name}</Col>
                                        <Col span={3} offset={18} style={{ textAlign: 'right' }}>
                                            
                                            <span className="iconfont" style={{ fontSize:'13px',margin:'0 10px 0 0' }}>&#xe63e;</span>
                                            <span className="iconfont"  style={{ fontSize:'15px',marginRight:'0px' }} onClick={(index: any)=>{
                                                confirm({
                                                    content: '此操作将从列表中删除信息，是否继续？',
                                                    icon: <DeleteOutlined />,
                                                    onCancel() {},
                                                    onOk(e) {
                                                        return new Promise((resolve, reject) => {
                                                        console.log(item,'点击')
                                                        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                                                        }).catch(() => console.log('Oops errors!'));
                                                    },
                                                    })
                                                }
                                            }>&#xe63f;</span>
                                        </Col>
                                      </Row>
                                  </PageCardDIvWrapHeader>
                                  <Row>
                                      {
                                          item.forenone && item.forenone.length > 0 && <Col span={8} style={styles.flex}>
                                          <WorkRestListLeftTitleWrap><WorkRestListLeftTitle>上午</WorkRestListLeftTitle></WorkRestListLeftTitleWrap>
                                          <div>
                                              {
                                                  item.forenone.map((ite,ind)=>{
                                                      return(
                                                          <WorkRestListRightLessonWrap key={ind}>
                                                              <WorkRestListRightSign style={styles[ite.color]}/>
                                                              <WorkRestListRightText>
                                                                  <WorkRestListRightTextTop>{ite.name}</WorkRestListRightTextTop>
                                                                  <WorkRestListRightTextTwo>{ite.Ename}</WorkRestListRightTextTwo>
                                                              </WorkRestListRightText>
                                                              <WorkRestListRightTimeWrap>
                                                                  <WorkRestListRightTimeImg src={ Click }></ WorkRestListRightTimeImg>
                                                                  <WorkRestListRightTimeText>{ite.startTime}</WorkRestListRightTimeText>
                                                                  <WorkRestListRightTimeText>{ite.endTIme}</WorkRestListRightTimeText>
                                                              </WorkRestListRightTimeWrap>
                                                          </WorkRestListRightLessonWrap>
                                                      )
                                                  })
                                              }
                                             
                                          </div>
                                      </Col>
                                      }
                                      {
                                          item.afternoon && item.afternoon.length > 0 && <Col span={8} style={styles.flex}>
                                          <WorkRestListLeftTitleWrap><WorkRestListLeftTitle>上午</WorkRestListLeftTitle></WorkRestListLeftTitleWrap>
                                          <div>
                                              {
                                                  item.afternoon.map((ite,ind)=>{
                                                      return(
                                                          <WorkRestListRightLessonWrap key={ind}>
                                                              <WorkRestListRightSign style={styles[ite.color]}/>
                                                              <WorkRestListRightText>
                                                                  <WorkRestListRightTextTop>{ite.name}</WorkRestListRightTextTop>
                                                                  <WorkRestListRightTextTwo>{ite.Ename}</WorkRestListRightTextTwo>
                                                              </WorkRestListRightText>
                                                              <WorkRestListRightTimeWrap>
                                                                  <WorkRestListRightTimeImg src={ Click }></ WorkRestListRightTimeImg>
                                                                  <WorkRestListRightTimeText>{ite.startTime}</WorkRestListRightTimeText>
                                                                  <WorkRestListRightTimeText>{ite.endTIme}</WorkRestListRightTimeText>
                                                              </WorkRestListRightTimeWrap>
                                                          </WorkRestListRightLessonWrap>
                                                      )
                                                  })
                                              }
                                             
                                          </div>
                                      </Col>
                                      }
                                      {
                                          item.evening && item.evening.length > 0 && <Col span={8}  style={{...styles.flex}}>
                                          <WorkRestListLeftTitleWrap><WorkRestListLeftTitle>上午</WorkRestListLeftTitle></WorkRestListLeftTitleWrap>
                                          <div style={{height:item.forenone.length *57+'px'}}>
                                              {
                                                  item.evening.map((ite,ind)=>{
                                                      return(
                                                          <WorkRestListRightLessonWrap key={ind}>
                                                              <WorkRestListRightSign style={styles[ite.color]}/>
                                                              <WorkRestListRightText>
                                                                  <WorkRestListRightTextTop>{ite.name}</WorkRestListRightTextTop>
                                                                  <WorkRestListRightTextTwo>{ite.Ename}</WorkRestListRightTextTwo>
                                                              </WorkRestListRightText>
                                                              <WorkRestListRightTimeWrap>
                                                                  <WorkRestListRightTimeImg src={ Click }></ WorkRestListRightTimeImg>
                                                                  <WorkRestListRightTimeText>{ite.startTime}</WorkRestListRightTimeText>
                                                                  <WorkRestListRightTimeText>{ite.endTIme}</WorkRestListRightTimeText>
                                                              </WorkRestListRightTimeWrap>
                                                          </WorkRestListRightLessonWrap>
                                                      )
                                                  })
                                              }
                                             
                                          </div>
                                          
                                      </Col>
                                      }
                                  </Row>
                              </PageCardDIvWrap>
                          </Col>
                      );
                  })
              }
          </Row>
      
       </div>
    );
};

export {
    WorkRestList
};