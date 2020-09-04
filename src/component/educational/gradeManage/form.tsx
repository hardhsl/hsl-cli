import React,{useEffect} from "react";
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Row, Col, Select } from 'antd';
import { FormComponentProps } from '@ant-design/compatible/lib/form/Form';
import { useDispatch, useMappedState } from 'redux-react-hook';
import {IState} from '@/store';
import '@/baseUI/base.css';
const { Option } = Select;
const layout = {
    labelCol: { span: 6, },
    wrapperCol: { span: 18 },
};
const gradeManageData = (state: IState) => {
    return {
        gradeFromData : state.EducationGradeManage.gradeFromData,
        gradeAddFromShow : state.EducationGradeManage.gradeAddFromShow
    };
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
const FormAddGrade: React.ComponentType<CreateFormProps> = (props: CreateFormProps) => {
    const { getFieldDecorator } = props.form;
    const dispatch = useDispatch();
    const {
        gradeFromData :any,
        gradeAddFromShow
    } = useMappedState(gradeManageData);
    // useEffect(()=>{
    //     props.form.setFieldsValue({
    //         gradeType: gradeFromData.gradeType,
    //         gradeName: gradeFromData.gradeName,
    //         workRest: gradeFromData.workRest,
    //         location: gradeFromData.location,
    //         teacher: gradeFromData.teacher,
    //         coures: gradeFromData.coures,
    //         exam: gradeFromData.exam
    //     })
    // },[gradeAddFromShow])
   
    const gradeChangeDialog = () => {
        dispatch({
            type: 'change EducationAddGrade hide',
            data: ''
        })
    }
    return (
        <div>
            <AbsoluteComponentWrap>
                    <AbsoluteComponentHeader>
                        <Row>
                            <Col span={6}>{ gradeAddFromShow ? '新增班级' : '编辑班级' } </Col>
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
                                    <Form.Item label="年级类型" hasFeedback>
                                        {getFieldDecorator('gradeType', {
                                            rules: [{ required: true, message: '请选择年级类型' }],
                                        })(
                                            <Select placeholder="请选择年级类型">
                                                <Option value="高中">高中</Option>
                                                <Option value="初中">初中</Option>
                                                <Option value="小学">小学</Option>
                                                <Option value="幼儿园">幼儿园</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="年级名称" hasFeedback>
                                        {getFieldDecorator('gradeName', {
                                            rules: [{ required: true, message: '请选择年级名称' }],
                                        })(
                                            <Select placeholder="请选择年级名称">
                                                <Option value="高一年级">高一年级</Option>
                                                <Option value="高二年级">高二年级</Option>
                                                <Option value="高三年级">高三年级</Option>
                                                <Option value="高四年级">高四年级</Option>
                                            </Select>,
                                        )}
                                    </Form.Item>
                                    <Form.Item label="作息选择" hasFeedback>
                                        {getFieldDecorator('workRest', {
                                            rules: [{ required: true, message: '请选择年级作息' }],
                                        })(
                                            <Select placeholder="请选择年级作息">
                                                <Option value="作息一">作息一</Option>
                                                <Option value="作息二">作息二</Option>
                                            </Select>,
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
                            props.form.validateFields((err, values) => {
                                if (!err) {
                                  dispatch({
                                        type: 'grade EducationGradeListData change',
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
const FormAddGradeComponent = Form.create<CreateFormProps>()(FormAddGrade)
export {
    FormAddGradeComponent
};