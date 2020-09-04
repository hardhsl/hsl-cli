import React from 'react';
import intl from 'react-intl-universal';
import { PlusCircleFilled } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Select, Input, Upload } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
import { FormComponentProps } from '@ant-design/compatible/es/form';
import {
    AbsoluteComponentHeader,
    AbsoluteComponentWrap,
    AbsoluteComponentFooter,
    AbsoluteComponentMain,
} from '@/baseUI/pageCard';
import { Button } from 'antd';
import { styles } from './ui';
import { useDispatch } from 'redux-react-hook';
interface UserFormProps extends FormComponentProps {
    commontLv?: String,
    attendenceAll?: String,
    fileList?: String
  }


const CommentAddEditFrom:React.ComponentType<UserFormProps> = (props:UserFormProps) => {
    const dispatch = useDispatch()
    const { getFieldDecorator } = props.form;
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
      };
    return (
        <AbsoluteComponentWrap>
            <AbsoluteComponentHeader>考勤评价</AbsoluteComponentHeader>
            <AbsoluteComponentMain>
                <Form {...formItemLayout}>
                <Form.Item label="评价等级" hasFeedback>
                    {getFieldDecorator('commontLv', {
                        rules: [{ required: true, message: 'Please select your country!' }],
                    })(
                        <Select placeholder="Please select a country">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                        </Select>,
                    )}
                    </Form.Item>
                    <Form.Item label="综合评语" hasFeedback>
                        {getFieldDecorator('attendenceAll', {
                            rules: [{ required: true, message: 'Please select your country!' }],
                        })(
                            <TextArea placeholder="请输入学生评语不超过100个字符" rows={4}/>
                        )}
                    </Form.Item>
                    <Form.Item label="Upload" extra="点击上传照片，图片格式为jpg，图片大小不要超过5M">
                        {getFieldDecorator('upload', {
                            valuePropName: 'fileList',
                            getValueFromEvent: ()=>{},
                        })(
                            <Upload name="logo" action="/upload.do" listType="picture">
                            <div style={styles.IMGWrap}> 
                                <PlusCircleFilled style={{ color:'#1DBA99',transform:'scale(2)' }} />
                            </div>
                            </Upload>,
                        )}
                        </Form.Item>
                </Form>
            </AbsoluteComponentMain>
            <AbsoluteComponentFooter>
                <Button type="primary" htmlType="submit" >{ intl.get('STUDENT_PINGJIA.QUEDING') }</Button>
                <Button className="Gray" style={{ 'marginLeft': '10px' }} onClick={()=>{ dispatch({type:'change StudentAttendAddEdit hide'})}}>{ intl.get('STUDENT_PINGJIA.QUXIAO') }</Button>
            </AbsoluteComponentFooter>
        </AbsoluteComponentWrap>
    );
}

const CommentAddEdit = Form.create<UserFormProps>()(CommentAddEditFrom);
export {
    CommentAddEdit
}