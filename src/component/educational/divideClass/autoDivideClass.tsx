import React from 'react';
import {
    AbsoluteComponentWrap,
    AbsoluteComponentHeader,
    AbsoluteComponentFooter,
    AbsoluteComponentMain
  } from '@/baseUI/pageCard';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Input, Select } from 'antd';
const { Option } = Select;
import { FormComponentProps } from '@ant-design/compatible/lib/form/Form';

interface UserFormProps extends FormComponentProps {
    studentNum?: number;
    select?: string;
}
const AutoDivideClass: React.ComponentType<UserFormProps> = (props:UserFormProps) =>{
    const { getFieldDecorator } = props.form;
    const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
    };
    return <AbsoluteComponentWrap>
        <AbsoluteComponentHeader>自动分班</AbsoluteComponentHeader>
        <AbsoluteComponentMain>
            <h4>分班规则</h4>
            <Form {...formItemLayout}>
            <Form.Item {...formItemLayout} label="学生人数">
                {getFieldDecorator('studentNum', {
                    rules: [
                    {
                        required: true,
                        message: 'Please input your name',
                    },
                    ],
                })(<Input placeholder="Please input your name" />)}
                </Form.Item>
                <Form.Item label="男生人数" hasFeedback>
                    {getFieldDecorator('select')(
                        <Select placeholder="Please select a country">
                        <Option value="不限">不限</Option>
                        <Option value="usa">U.S.A</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item label="女生人数" hasFeedback>
                    {getFieldDecorator('select')(
                        <Select placeholder="Please select a country">
                        <Option value="不限">不限</Option>
                        <Option value="usa">U.S.A</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item label="民族组成" hasFeedback>
                    {getFieldDecorator('select')(
                        <Select placeholder="Please select a country">
                        <Option value="不限">不限</Option>
                        <Option value="usa">U.S.A</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item label="年龄区间" hasFeedback>
                    {getFieldDecorator('select')(
                        <Select placeholder="Please select a country">
                        <Option value="不限">不限</Option>
                        <Option value="usa">U.S.A</Option>
                        </Select>
                    )}
                </Form.Item>
            </Form>
        </AbsoluteComponentMain>
        <AbsoluteComponentFooter>
        <Button type="primary"  onClick={()=>{
            props.form.validateFields((err, values) => {
                if (!err) {
                  console.log('Received values of form: ', values);
                }
                console.log(values)
              });
        }}>
            确定
                  </Button>
          <Button className="Gray" style={{ 'marginLeft': '10px' }} >
            取消
              </Button>
        </AbsoluteComponentFooter>
    </AbsoluteComponentWrap>
}
const AutoDivideClassComponent = Form.create<UserFormProps>()(AutoDivideClass)
export {
    AutoDivideClassComponent
}