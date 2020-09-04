import React,{ useContext } from "react";
import { Row, Col, Input, Button, Select, message, Modal } from 'antd';
import { listQueryContext } from './index';
import intl from 'react-intl-universal';
import {useDispatch, useMappedState} from 'redux-react-hook';
import '@/baseUI/base.css';
const { Option } = Select;
const { confirm } = Modal;
import {IState} from '@/store';
import { Link } from "react-router-dom";
const Data = (state: IState) => {
  return {
	  BatchSetEvaluateList: state.StudentAttendence.BatchSetEvaluateList,
  };
};
const Headers = () => {
	const dispatch = useDispatch();
	const {
        BatchSetEvaluateList
    } = useMappedState(Data);
	let { listQuery, setlistQuery, selectData, setVisible } = useContext(listQueryContext);
	const styles = {
			Button: {
				margin: '0 15px 0 0',
				color: '#fff'
			},
			Input: {
			  width: '190px',
			},
			rowBg: {
				padding: '15px',
				borderRadius: '8px 8px 0 0',
				background: '#fff',
				marginTop: '15px'
			},
			buttonBg: {
				color: '#fff'
			},
			margin: {
				margin: '0 15px 0 0',
			},
			width: {
				margin: '0 15px 0 0',
				width: '160px',
			}
	  }
    return (
        <div>
			<Row style={styles.rowBg }>
				<Col span={10}>
					<Select style={styles.width} placeholder={intl.get('STUDENT_PINGJIA.SUOSHU_NIANJI')}  onChange={(val: string)=>{
						setlistQuery({ ...listQuery, grade:val})
					}}>
						<Option value="1">一年级一班</Option>
						<Option value="2">二年级一班</Option>
						<Option value="3">三年级一班</Option>
					</Select>
					<Select style={styles.width} placeholder={intl.get('STUDENT_PINGJIA.PINGJIA_ZHUANGTAI')} onChange={(val: string)=>{
						listQuery.location = val
						setlistQuery({ ...listQuery, location: val})
					}}>
						<Option value="1">已评价</Option>
						<Option value="2">未评价</Option>
					</Select>
					<Input 
						style={styles.Input}
						placeholder={intl.get('STUDENT_PINGJIA.INPUT_STUDENTNAME')} />
				</Col>
				<Col span={14} style={{ textAlign:'right' }}>
					<Button style={styles.Button}  className="Orange" onClick={()=>{
						if(BatchSetEvaluateList.length <= 0){
							message.error('请选择评价的学生');
						}else{
							console.log(BatchSetEvaluateList,'BatchSetEvaluateList')
						}
					}}>{intl.get('STUDENT_PINGJIA.PILIANG_PINGJIA')}</Button>
					<Button  className="Blue" style={styles.margin} onClick={()=>{
						dispatch({ type: "change ImportStudentAttend show" })
					}}>{intl.get('STUDENT_PINGJIA.PILIANG_DAORUPINGJIA')}</Button>
					<Button  className="Purple" style={styles.margin}><Link to="/user/studentComment/eduEvaluate/record">{intl.get('STUDENT_PINGJIA.PIJIA_JILU')}</Link></Button>
					<Button style={styles.buttonBg} className="Green" onClick={()=>{ 
						dispatch({
							type: 'change EducationClassManage show',
							data:''
						})
					 }}>{intl.get('STUDENT_PINGJIA.FABIAO_YANLUN')}</Button>
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};