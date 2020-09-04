import React from "react";
import {Link, withRouter} from 'react-router-dom';
import {useDispatch} from 'redux-react-hook';
import { Row, Col, Input, Button  } from 'antd';
const { Search } = Input;

const Headers = () => {
    const dispatch = useDispatch();
	const styles = {
			Button: {
				margin: '0 10px',
				background:'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))',
				color: '#fff',
				border: 'none'
			},
			Input: {
			  width: '200px',
			  borderRadius:'6px'
			},
			rowBg: {
				padding: '15px',
				borderRadius: '10px',
				background: '#fff',
				marginTop: '15px',
				border: 'none'
			},
			buttonBg: {
				background: 'linear-gradient(270deg,rgba(41,220,213,1),rgba(29,180,152,1))',
				color: '#fff',
				border: 'none'
			}
	  }
    return (
        <div>
			<Row style={styles.rowBg }>
				<Col span={12}>
					<Search 
					style={styles.Input}
					onSearch={(value: any) => {
						console.log(value,'value')
						dispatch({
							type: 'change SchoolYearList data',
							name: value
						})
					}}
					placeholder="请输入学年名称" />
				</Col>
				<Col span={12} style={{ textAlign:'right' }}>
					<Button style={styles.Button} ><Link to="/basic/schoolYear/add">录入学年</Link></Button>
					<Button style={styles.buttonBg} ><Link to="/basic/schoolYear/workRest/">作息列表</Link></Button>
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};