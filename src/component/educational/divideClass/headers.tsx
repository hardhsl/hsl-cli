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
			  width: '200px',
			  marginLeft: '15px',
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
				marginLeft: '15px'
			}
	  }
    return (
        <div>
			<Row style={styles.rowBg }>
				<Col span={12}>
				<Select  placeholder="所属年级" style={{ width:'190px',marginRight:'15px'}} >
						<Option value="1">一年级</Option>
						<Option value="2">二年级</Option>
						<Option value="3">三年级</Option>
					</Select>
					<Select  placeholder="性别" style={{ width:'190px'}} >
						<Option value="1">一年级</Option>
						<Option value="2">二年级</Option>
						<Option value="3">三年级</Option>
					</Select>
					<Button style={styles.buttonBg} onClick={()=>{ 
						dispatch({
							type: 'change EducationAddCoures show',
							data:''
						})
					}}>加入班级</Button>
				</Col>
				<Col span={12}>
				
				<Search 
					style={{...styles.Input,float:'right'}}
					onSearch={(value: any) => console.log(value)}
					placeholder="请输入学生姓名" />
					
				</Col>
			</Row>
		</div>
    );
};
export {
	Headers
};