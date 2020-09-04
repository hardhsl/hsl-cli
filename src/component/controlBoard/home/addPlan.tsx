import React from 'react';
import {
    AbsoluteComponentWrap,
    AbsoluteComponentHeader,
    AbsoluteComponentFooter,
    AbsoluteComponentMain
  } from '@/baseUI/pageCard';
import { Button, DatePicker , Form} from 'antd';
import {useDispatch} from 'redux-react-hook';
import TextArea from 'antd/lib/input/TextArea';

const formItemLayout: object = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 6},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};
const PlanComponent = () => {
    const dispatch = useDispatch();
    return (
        <AbsoluteComponentWrap>
            <AbsoluteComponentHeader>新增日程</AbsoluteComponentHeader>
            <AbsoluteComponentMain>
                <Form {...formItemLayout}>
                    <Form.Item
                        label="选择日期"
                        name="meeting_date"
                        rules={[{ required: true, message: '请选择会议日期!' }]}>
                        <DatePicker style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item
                        label="日程内容"
                        name="description">
                        <TextArea rows={4}/>
                    </Form.Item>
                </Form>
            </AbsoluteComponentMain>
            <AbsoluteComponentFooter>
                <Button type="primary">确定</Button>
                <Button className="Gray" style={{ 'marginLeft': '15px' }} onClick={()=>{
                    dispatch({
                        type: 'change addDatePlan hide',
                        data:''
                    })
                }}>取消</Button>
            </AbsoluteComponentFooter>
        </AbsoluteComponentWrap>
    )

}
export {
    PlanComponent
}