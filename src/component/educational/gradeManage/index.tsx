import React from "react";
import {useDispatch, useMappedState} from 'redux-react-hook';
import { DeleteFilled, DeleteOutlined, EditFilled, EyeFilled } from '@ant-design/icons';
import { Row, Col, Modal, Button } from 'antd';
import { Headers } from './headers';
import { FormAddGradeComponent } from './form';
import { withRouter } from 'react-router-dom';
const { confirm } = Modal;
import {IState} from '@/store';
import {
	CardWrap,
	CardTextTitle,
	CardTextContent,
	CardIconBottom,
	CardIconSpan,
	CardHeaderWrap
} from './ui';

const gradeManageData = (state: IState) => {
    return {
        addGradeShow: state.EducationGradeManage.addGradeShow,
        gradeListData : state.EducationGradeManage.gradeListData
    };
};
const GradeManageMainRouter = (props: any) => {
    const {
        addGradeShow,
        gradeListData
    } = useMappedState(gradeManageData);
  const dispatch = useDispatch();
	const data: any[] = [
        ...gradeListData,
		{ gradeType:'高一年级',gradeName:'2018年8月27日至2019年7月13日',num:2,classNum:18 ,location:'紫东楼'},
		{ gradeType:'高二年级',gradeName:'2018年8月27日至2019年7月13日',num:2,classNum:18 },
		{ gradeType:'高三年级',gradeName:'2018年8月27日至2019年7月13日',num:2,classNum:18 },
		{ gradeType:'高四年级',gradeName:'2018年8月27日至2019年7月13日',num:2,classNum:18 },
    ]
	const compony = (index: any)=>{
		switch (index%8) {
			case 0:
				return { background: 'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))' }
				break;
			case 1:
				return { background: 'linear-gradient(90deg,rgba(146,113,252,1),rgba(248,94,163,1))' }
				break;
			case 2:
				return { background: 'linear-gradient(270deg,rgba(248,198,138,1),rgba(244,91,106,1))' }
				break;
			case 3:
				return { background: 'linear-gradient(90deg,rgba(29,179,150,1),rgba(40,220,212,1))' }
				break;
			case 4:
				return { background: 'linear-gradient(270deg,rgba(248,198,138,1),rgba(244,91,106,1))' }
				break;
			case 5:
				return { background: 'linear-gradient(90deg,rgba(29,179,150,1),rgba(40,220,212,1))' }
				break;
			case 6:
				return { background: 'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))' }
				break;
			case 7:
				return { background: 'linear-gradient(90deg,rgba(146,113,252,1),rgba(248,94,163,1))' }
				break;
		}
	}
    return (
        <div>
			<Headers />
			<Row>
				{
					data.map((item: any,index: number)=>{
						return (
                            <Col span={6} style={{ padding:'0 8px'}}>
								<CardWrap style={ compony(index) }>
									<CardHeaderWrap>
										<CardTextTitle>{ item.gradeType } </CardTextTitle>
										<EyeFilled />
									</CardHeaderWrap>
									
                                    <CardTextContent><span style={{ marginRight: '30px' }}>班级数量：{ item.classNum ? item.classNum + '个' : '未添加' }</span><span>位置：{item.location ? item.location : '未添加'}</span></CardTextContent>
									<CardTextContent>学生人数：{ item.num ? item.num : '未添加' }</CardTextContent>
									<CardIconBottom>
										<CardIconSpan><EyeFilled
                                            onClick={()=>{
                                                props.history.push({pathname:'/educational/gradeDetail/',state:{id:1}})
                                            }
                                                
                                            } /></CardIconSpan>
										<CardIconSpan><EditFilled
                                            onClick={()=>{
                                                dispatch({
                                                    type: 'grade EducationGradeFromData change',
                                                    data: item
                                                })
                                            }} /></CardIconSpan>
										<CardIconSpan><DeleteFilled
                                            onClick={()=>{
                                                confirm({
                                                    content: '此操作将从列表中删除信息，是否继续？',
                                                    icon: <DeleteOutlined />,
                                                    onCancel() {},
                                                    onOk(e) {
                                                      return new Promise((resolve, reject) => {
                                                          console.log(item)
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
			</Row>
            { addGradeShow && <FormAddGradeComponent /> }
		</div>
    );
};
const GradeManageMain = withRouter(GradeManageMainRouter);
export {
    GradeManageMain
};