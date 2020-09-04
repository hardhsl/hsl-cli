import React from "react";
import { Row, Col, Input, Button, Select, message, Modal } from 'antd';
import {useDispatch} from 'redux-react-hook';
import '@/baseUI/base.css';
const { Option } = Select;
const { confirm } = Modal;
const Headers = () => {
	const dispatch = useDispatch();
	const styles = {
			Button: {
				margin: '0 10px',
				color: '#fff'
			},
			Input: {
			  width: '200px',
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
				margin: '0 15px',
			},
			width: {
				width: '190px',
			}
	  }
    return (
        <div>
			<Row style={styles.rowBg }>
				<Col span={12}>
					<Select style={styles.width} placeholder="所属年级（全部）">
						<Option value="1">一年级</Option>
						<Option value="2">二年级</Option>
						<Option value="3">三年级</Option>
					</Select>
					<Button  className="Purple" style={styles.margin}>批量导入教室</Button>
					<Button  className="Gray">批量删除</Button>
				</Col>
				<Col span={12} style={{ textAlign:'right' }}>
					<Input 
						style={styles.Input}
						placeholder="请输入班级名称" />
					<Button style={styles.Button}  className="Orange">添加教室</Button>
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};