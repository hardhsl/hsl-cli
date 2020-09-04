import React,{ useContext } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { Row, Col, Input, Button, Select, message, Modal } from 'antd';
import { listQueryContext } from './index';
import {useDispatch} from 'redux-react-hook';
import '@/baseUI/base.css';
const { Option } = Select;
const { confirm } = Modal;
const Headers = () => {
	const dispatch = useDispatch();
	let { listQuery, setlistQuery, selectData, setVisible } = useContext(listQueryContext);
	const styles = {
			Button: {
				margin: '0 10px',
				color: '#fff'
			},
			Input: {
			  width: '140px',
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
				margin: '0 5px',
			},
			width: {
				margin: '0 5px',
				width: '160px',
			}
	  }
    return (
        <div>
			<Row style={styles.rowBg }>
				<Col span={14}>
					<Select style={styles.width} placeholder="所属年级（全部）" onChange={(val: string)=>{
						listQuery.grade = val
						setlistQuery(listQuery)
					}}>
						<Option value="1">一年级</Option>
						<Option value="2">二年级</Option>
						<Option value="3">三年级</Option>
					</Select>
					<Select style={styles.width} placeholder="教室位置（全部）" onChange={(val: string)=>{
						listQuery.location = val
						setlistQuery(listQuery)
					}}>
						<Option value="1">教学楼</Option>
						<Option value="2">实验室</Option>
						<Option value="3">6号楼</Option>
					</Select>
					
					<Button  className="Blue" style={styles.margin} onClick={()=>{
						dispatch({ type: "change ImportClassExcel show" })
					}}>批量导入</Button>
					<Button  className="Gray" style={styles.margin} onClick={()=>{
						if(selectData.length <= 0){
							message.warning('请选择需要删除的班级');
							return
						}else{
							confirm({
								content: '此操作将从列表中删除信息，是否继续？',
								icon: <DeleteOutlined />,
								onCancel() {},
								onOk(e) {
								  return new Promise((resolve, reject) => {
									  console.log(selectData,'删除数据')
									setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
								  }).catch(() => console.log('Oops errors!'));
								},
								
							  })
						}
					}}>批量删除</Button>
					<Button  className="Purple" style={styles.margin} onClick={()=>{
						setVisible(true)
					}}>上传班徽</Button>
				</Col>
				<Col span={10} style={{ textAlign:'right' }}>
					<Input 
						style={styles.Input}
						placeholder="请输入班级名称" />
					<Button style={styles.Button}  className="Orange">提升年级</Button>
					<Button style={styles.buttonBg} className="Green" onClick={()=>{ 
						dispatch({
							type: 'change EducationClassManage show',
							data:''
						})
					 }}>添加班级</Button>
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};