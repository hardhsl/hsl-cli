import React from "react";
import { UploadOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Button, Row, Col, Upload, Select } from 'antd';
import { FormComponentProps } from '@ant-design/compatible/lib/form/Form';
import { useDispatch } from 'redux-react-hook';
import '@/baseUI/base.css';
const { Option } = Select;
const layout = {
    labelCol: { span: 6, },
    wrapperCol: { span: 18 },
};
import {
    AbsoluteComponentHeader,
    AbsoluteComponentWrap,
    AbsoluteComponentFooter,
    AbsoluteComponentMain
} from '@/baseUI/pageCard';
interface CreateFormProps extends FormComponentProps {
    data?: any;
}
const styles = {
    flex: {
        display: 'flex',
        alignItems: 'space-around',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '80vh',
        paddingTop: '8vh'
    },
    form: {
        marginTop: '20px'
    }
}
const FormAddClass: React.ComponentType<CreateFormProps> = (props: CreateFormProps) => {
    console.log(props, 'props')

    const { getFieldDecorator } = props.form;
    const dispatch = useDispatch();
    return (
        <div>
            <AbsoluteComponentWrap>
                    <AbsoluteComponentHeader>
                        <Row>
                            <Col span={6}>新增班级</Col>
                        </Row>
                    </AbsoluteComponentHeader>
                    <AbsoluteComponentMain>
                        <span className="absSignText">基本信息</span>
                        <Form
                            {...layout}
                            name="basic"
                            style={styles.form}
                            className="workRestForm"
                        >
                            <Row>
                                <Col span={24}>
                                <Form.Item label="班徽" extra="上传照片">
                                    {getFieldDecorator('upload', {
                                        valuePropName: 'fileList',
                                    })(
                                        <Upload name="logo" action="/upload.do" listType="picture">
                                        <Button>
                                            <UploadOutlined /> Click to upload
                                        </Button>
                                        </Upload>,
                                    )}
                                    </Form.Item>
                                    <Form.Item label="所属年级" hasFeedback>
                                        {getFieldDecorator('grade', {
                                            rules: [{ required: true, message: '请选择所属年级' }],
                                        })(
                                            <Select placeholder="请选择所属年级">
                                            <Option value="1">一年级</Option>
                                            <Option value="2">二年级</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="班级名称" hasFeedback>
                                        {getFieldDecorator('className', {
                                            rules: [{ required: true, message: '请输入班级名称' }],
                                        })(
                                            <Input
                                                placeholder="请输入班级名称"
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="班级教室" hasFeedback>
                                        {getFieldDecorator('location', {
                                            
                                        })(
                                            <Select placeholder="请选择班级教室">
                                            <Option value="1">一楼</Option>
                                            <Option value="2">二楼</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                    <span className="absSignText" style={{'margin':'20px 0'}}>教务信息</span>
                                    <Form.Item label="班主任" hasFeedback>
                                        {getFieldDecorator('teacher', {
                                            
                                        })(
                                            <Select placeholder="请选择班主任">
                                            <Option value="1">马老师</Option>
                                            <Option value="2">李老师</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="其他教室" hasFeedback>
                                        {getFieldDecorator('teacher', {
                                            
                                        })(
                                            <Select placeholder="请选择其他教师">
                                            <Option value="1">马老师</Option>
                                            <Option value="2">李老师</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </AbsoluteComponentMain>
                    <AbsoluteComponentFooter>
                    <Button type="primary" onClick={() => {
                            dispatch({
                                type: 'change EducationClassManage hide',
                                data: ''
                            })
                        }}>
                            确定
                            </Button>
                        <Button className="Gray" style={{ 'marginLeft': '10px' }} onClick={() => {
                            dispatch({
                                type: 'change EducationClassManage hide',
                                data: ''
                            })
                        }}>
                            取消
                        </Button>
                       
                    </AbsoluteComponentFooter>

            </AbsoluteComponentWrap>
        </div>
    );
};
const FormAddClassComponent = Form.create<CreateFormProps>()(FormAddClass)
export {
    FormAddClassComponent
};