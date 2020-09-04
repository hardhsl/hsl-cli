import React from "react";
import {useDispatch} from 'redux-react-hook';
import { Row, Col, Input, Button  } from 'antd';
import { Link } from 'react-router-dom';
const { Search } = Input;
import '@/baseUI/base.css'

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
					<Button className="Orange" style={styles.bunBgOne} onClick={()=>{ 
						dispatch({
							type: 'change BasicWorkRest show',
							data:''
						})
					 }}>导出图标</Button>
					<Button type="primary" style={styles.bunBgTwo}><Link to="/basic/attendence/mould" >考勤模块</Link></Button>
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};