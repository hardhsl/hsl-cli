import React from 'react';
import { AddFromWrap } from './ui';
import { Form, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
const { Option } = Select;
const AddTimeForm = (props:any) => {
    let [form] = Form.useForm()
    const onFinish = (values: any) => {
       props.stepsNextSet()
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      const fromUpdata = () => {
        form.submit();
      }
    return <div>
        <AddFromWrap>
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="from"
            form={form}
            >
            <div style={{ width:'300px' }}>
                <Form.Item>学年信息</Form.Item>
                <Form.Item
                    name="select"
                    label="学年"
                    rules={[{ required: true, message: 'Please select your country!' }]}
                >
                    <Select placeholder="Please select a country">
                    <Option value="china">China213123131</Option>
                    <Option value="usa">U.S.A</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="学期"
                    label="学期"
                    rules={[{ required: true, message: 'Please select your country!' }]}
                >
                    <Select placeholder="Please select a country">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                    </Select>
                </Form.Item>
                {/* <Form.Item style={{ color:'#FF7B11',fontSize:'10px',marginTop:'30px' }}>排课前请先完善系统信息，未添加任课教师的课程无法排课，班级绑定任课教师后可减少排课操作哦</Form.Item> */}
            </div>
            <div style={{ width:'300px' }}>
                <Form.Item>年级信息</Form.Item>
                <Form.Item
                    name="排课年级"
                    label="排课年级"
                    rules={[{ required: true, message: 'Please select your country!' }]}
                >
                    <Select placeholder="Please select a country">
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="排课班级"
                    label="排课班级"
                    rules={[{ required: true, message: 'Please select your country!' }]}
                >
                    <Select placeholder="Please select a country">
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="选择作息"
                    label="选择作息"
                    rules={[{ required: true, message: 'Please select your country!' }]}
                >
                    <Select placeholder="Please select a country">
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                    </Select>
                </Form.Item>
            </div>
            </Form>

        </AddFromWrap>
        <div className="flex-justify-end">
            <Button className="Green" style={{marginRight:'20px'}} onClick={fromUpdata}> 
                下一步
            </Button>
            <Button className="Gray"> 
                <Link to="/educational/timeTable/">取消</Link>
            </Button>
        </div>
    </div>
}

export{
    AddTimeForm
}