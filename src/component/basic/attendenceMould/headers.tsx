import React from "react";
import {useDispatch} from 'redux-react-hook';
import { Row, Col, Button  } from 'antd';
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
				<Col span={24} style={{ textAlign:'right' }}>
					<Button className="Orange" style={styles.bunBgOne}>导出图标</Button>
					<Button type="primary" style={styles.bunBgTwo} onClick={()=>{
						dispatch({
							type: 'change addAttendenceMould show',
							data:''
						})
					}}>新增考勤模块</Button>
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};