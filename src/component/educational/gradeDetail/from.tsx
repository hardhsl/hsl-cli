import React,{useEffect} from "react";
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Button, Row, Col, Upload, Select } from 'antd';
import { FormComponentProps } from '@ant-design/compatible/lib/form/Form';
import { useDispatch, useMappedState } from 'redux-react-hook';
// import {IState} from '@/store';
import '@/baseUI/base.css';
const { Option } = Select;
const layout = {
    labelCol: { span: 6, },
    wrapperCol: { span: 18 },
};
// const gradeManageData = (state: IState) => {
//     return {
//         gradeDetailBindFromShow : state.EducationGradeManage.gradeDetailBindFromShow
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
const FormGradeBind: React.ComponentType<CreateFormProps> = (props: CreateFormProps) => {
    const { getFieldDecorator } = props.form;
    const dispatch = useDispatch();
    // const {
    //     gradeDetailBindFromShow
    // } = useMappedState(gradeManageData);
   
    const gradeChangeDialog = () => {
        dispatch({
            type: 'change GradeDetailBindFrom hide',
            data: ''
        })
    }
    return (
        <div>
            <AbsoluteComponentWrap>
                    <AbsoluteComponentHeader>
                        <Row>
                            <Col span={6}>教务信息 </Col>
                        </Row>
                    </AbsoluteComponentHeader>
                    <AbsoluteComponentMain>
                        <Form
                            {...layout}
                            name="basic"
                            style={styles.form}
                            className="workRestForm"
                        >
                            <Row>
                                <Col span={24}>
                                    <Form.Item label="年级教师" hasFeedback>
                                        {getFieldDecorator('teacher', {
                                            
                                        })(
                                            <Select placeholder="请关联年级教师">
                                            <Option value="1">马老师</Option>
                                            <Option value="2">李老师</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="年级课程" hasFeedback>
                                        {getFieldDecorator('coures', {
                                            
                                        })(
                                            <Select placeholder="请关联年级课程">
                                            <Option value="1">课程一</Option>
                                            <Option value="2">课程二</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="考试计划" hasFeedback>
                                        {getFieldDecorator('exam', {
                                            
                                        })(
                                            <Select placeholder="请关联考试计划">
                                            <Option value="1">期中考试</Option>
                                            <Option value="2">期末考试</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </AbsoluteComponentMain>
                    <AbsoluteComponentFooter>
                    <Button type="primary" htmlType="submit" onClick={() => {
                            
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
const FormGradeBindComponent = Form.create<CreateFormProps>()(FormGradeBind)
export {
    FormGradeBindComponent
};