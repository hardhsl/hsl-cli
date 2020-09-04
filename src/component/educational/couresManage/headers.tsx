import React from "react";
import {useDispatch} from 'redux-react-hook';
import { Row, Col, Input, Button, Select  } from 'antd';
const { Search } = Input;
const { Option } = Select;
// import {IState} from '@/store';

// const mapMeetingSeatState = (state: IState) => {
//     return {
//         meetingSeatShow: state.MeetingSeat.show,
//         meetingSeatMount: state.MeetingSeat.mount
//     };
// };

const Headers = () => {
    const dispatch = useDispatch();

    // const {
    //     meetingSeatMount,
    //     meetingSeatShow
    // } = useMappedState(mapMeetingSeatState);
	const styles = {
			Button: {
				margin: '0 10px',
				background:'linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1))',
				color: '#fff'
			},
			Input: {
			  width: '140px',
			  marginLeft: '10px'
			},
			rowBg: {
				padding: '15px',
				borderRadius: '10px',
				background: '#fff',
				marginTop: '15px'
			},
			buttonBg: {
				background: 'linear-gradient(270deg,rgba(41,220,213,1),rgba(29,180,152,1))',
				color: '#fff',
				marginLeft: '10px'
			}
	  }
    return (
        <div>
			<Row style={styles.rowBg }>
				<Col span={12}>
				<Select  placeholder="年级类型（全部）" style={{ width:'150px',marginRight:'10px'}} >
						<Option value="1">一年级</Option>
						<Option value="2">二年级</Option>
						<Option value="3">三年级</Option>
					</Select>
					<Select  placeholder="课程类型（全部）" style={{ width:'150px'}} >
						<Option value="1">一年级</Option>
						<Option value="2">二年级</Option>
						<Option value="3">三年级</Option>
					</Select>
					<Button style={styles.Button} type="primary">搜索</Button>
				</Col>
				<Col span={12} style={{ textAlign:'right' }}>
				<Search 
					style={styles.Input}
					onSearch={(value: any) => console.log(value)}
					placeholder="请输入学年名称" />
					<Button style={styles.buttonBg} onClick={()=>{ 
						dispatch({
							type: 'change EducationAddCoures show',
							data:''
						})
					}}>添加课程</Button>
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};