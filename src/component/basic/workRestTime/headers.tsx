import React from "react";
import {useDispatch} from 'redux-react-hook';
import { Row, Col, Input, Button  } from 'antd';
const { Search } = Input;


const Headers = () => {
   
  const dispatch = useDispatch();
	const styles = {
		  Button: {
				margin: '0 10px',
			},
			Input: {
			  width: '160px',
			},
			rowBg: {
				padding: '15px',
				borderRadius: '5px',
				background: '#fff',
				margin: '15px 0'
			},
			bunBgOne: {
				margin: '0 10px',
				background:'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))',
				color: '#fff'
			},
			bunBgTwo: {
				background: 'linear-gradient(to right, #29DCD5 , #1DB498)',
			}
	  }
    return (
        <div>
			<Row style={styles.rowBg }>
				<Col span={12}>
					<Search 
					style={styles.Input}
					placeholder="请输入作息名称" />
					<Button style={styles.Button} type="primary">搜索</Button>
				</Col>
				<Col span={12} style={{ textAlign:'right' }}>
					<Button style={styles.bunBgOne} onClick={()=>{ 
						dispatch({
							type: 'change BasicWorkRest show',
							data:''
						})
					 }}>新增作息</Button>
					<Button type="primary" style={styles.bunBgTwo}>学年列表</Button>
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};