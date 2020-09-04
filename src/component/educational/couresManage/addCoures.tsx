import React,{useEffect} from "react";
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Row, Col, Select, Input } from 'antd';
import { FormComponentProps } from '@ant-design/compatible/lib/form/Form';
import { useDispatch, useMappedState } from 'redux-react-hook';
// import {IState} from '@/store';
import '@/baseUI/base.css';
const { Option } = Select;
const layout = {
    labelCol: { span: 6, },
    wrapperCol: { span: 18 },
};
// const couresManageData = (state: IState) => {
//     return {
//         addCouresShow : state.EducationCouresManage.addCouresShow
//     };
// };
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
const FormAddCoures: React.ComponentType<CreateFormProps> = (props: CreateFormProps) => {
    const { getFieldDecorator } = props.form;
    const dispatch = useDispatch();
    // const {
    //     addCouresShow
    // } = useMappedState(couresManageData);
   
    const gradeChangeDialog = () => {
        dispatch({
            type: 'change EducationAddCoures hide',
            data: ''
        })
    }
    return (
        <div>
            <AbsoluteComponentWrap>
                    <AbsoluteComponentHeader>
                        <Row>
                            <Col span={24}>添加课程</Col>
                        </Row>
                    </AbsoluteComponentHeader>
                    <AbsoluteComponentMain>
                        <span className="absSignText">课程信息</span>
                        <Form
                            {...layout}
                            name="basic"
                            style={styles.form}
                            className="workRestForm"
                        >
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="课程名称" hasFeedback>
                                        {getFieldDecorator('gradeType', {
                                            rules: [{ required: true, message: '请输入课程名称' }],
                                        })(
                                            <Input placeholder="请输入课程名称"/>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="课程类型" hasFeedback>
                                        {getFieldDecorator('gradeName', {
                                            rules: [{ required: true, message: '请选择课程类型' }],
                                        })(
                                            <Select placeholder="请选择课程类型">
                                                <Option value="高一年级">高一年级</Option>
                                                <Option value="高二年级">高二年级</Option>
                                                <Option value="高三年级">高三年级</Option>
                                                <Option value="高四年级">高四年级</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="课时" hasFeedback>
                                        {getFieldDecorator('workRest', {
                                            rules: [{ required: true, message: '请输入课时' }],
                                        })(
                                            <Input placeholder="请输入课时"/>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="授课年级" hasFeedback>
                                        {getFieldDecorator('location', {
                                            
                                        })(
                                            <Select placeholder="请选择授课年级">
                                            <Option value="1">一年级</Option>
                                            <Option value="2">二年级</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="任课老师" hasFeedback>
                                        {getFieldDecorator('teacher', {
                                            
                                        })(
                                            <Select placeholder="请关联年级教师">
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
                    <Button type="primary" htmlType="submit" onClick={() => {
                            props.form.validateFields((err, values) => {
                                if (!err) {
                                  dispatch({
                                        type: 'grade EducationAddCoures change',
                                        data: values
                                  })
                                  gradeChangeDialog();
                                }
                              });
                        }}>
                            确定
                        </Button>
                        <Button className="Gray" style={{ 'marginLeft': '10px' }} onClick={gradeChangeDialog}>
                            取消
                        </Button>
                       
                    </AbsoluteComponentFooter>

            </AbsoluteComponentWrap>
        </div>
    );
};
const FormAddCouresComponent = Form.create<CreateFormProps>()(FormAddCoures)
export {
    FormAddCouresComponent
};