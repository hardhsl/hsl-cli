import React,{ useContext } from "react";
import { Row, Col, Input, Button, Select, message, Modal, DatePicker } from 'antd';
import { listQueryContext } from './index';
import intl from 'react-intl-universal';
import {useDispatch} from 'redux-react-hook';
import '@/baseUI/base.css';
const { Option } = Select;
const { confirm } = Modal;
const Headers = () => {
	const dispatch = useDispatch();
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
				background: '#fff'
			},
			buttonBg: {
				color: '#fff'
			},
			margin: {
				margin: '0 15px 0 0',
			},
			width: {
				margin: '0 15px 0 15px',
				width: '190px',
			}
	  }
    return (
        <div>
			<Row style={styles.rowBg }>
				<Col span={16}>
					<Select style={{ width:'190px' }} placeholder={'毕业年份（全部）'}  onChange={(val: string)=>{
						listQuery.grade = val
						setlistQuery(listQuery)
					}}>
						<Option value="1">一年级一班</Option>
						<Option value="2">二年级一班</Option>
						<Option value="3">三年级一班</Option>
					</Select>
					<Select style={styles.width} placeholder={intl.get('STUDENT_PINGJIA.SUOSHU_NIANJI')}  onChange={(val: string)=>{
						listQuery.grade = val
						setlistQuery(listQuery)
					}}>
						<Option value="1">一年级一班</Option>
						<Option value="2">二年级一班</Option>
						<Option value="3">三年级一班</Option>
					</Select>
					<Input 
						style={styles.Input}
						placeholder={intl.get('STUDENT_PINGJIA.INPUT_STUDENTNAME')} />
				</Col>
				<Col span={8} style={{ textAlign:'right' }}>
					<Button style={styles.Button}  className="Orange">导出图标</Button>
					<Button style={styles.Button} className="Green" onClick={()=>{ 
						dispatch({
							type: 'change EducationClassManage show',
							data:''
						})
					 }}>导入毕业去向</Button>
					 <Button className="Gray">批量删除</Button>
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};