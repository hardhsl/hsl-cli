import React from "react";
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, TimePicker, Button, Row, Col } from 'antd';
import { FormComponentProps } from '@ant-design/compatible/lib/form/Form';
import TimePickerRange from '../../timeRange';
import { useDispatch } from 'redux-react-hook';
const layout = {
  labelCol: { span: 6, },
  wrapperCol: { span: 18 },
};
import {
  PageCardContentText,
  AbsoluteComponentWrap,
  AbsoluteComponentHeader,
  AbsoluteComponentFooter,
  AbsoluteComponentMain
} from '@/baseUI/pageCard';
interface CreateFormProps extends FormComponentProps {
  data?: any;
}
const styles = {
  flex: {
    display: 'flex',
    height: '650px'
  },
  form: {
    padding: '15px'
  }
}
const FormWorkRest: React.ComponentType<CreateFormProps> = (props: CreateFormProps) => {
  console.log(props, 'props')
  // const handleSubmit = (): void => {
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };

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
          <Form
            {...layout}
            name="basic"
            style={styles.form}
            className="workRestForm"
          >
            <Row>
              <Col span={21} offset={3}>
                <Form.Item label={"作息名称"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('endTime', {
                    rules: [{ required: true, message: '请输入作息名' }],
                  })(
                    <Input
                      placeholder="请输入作息名称"
                      style={{ 'width': '175px' }}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row >
              <Col span={2}>
                <div style={{ ...styles.flex, 'flexDirection': 'column', justifyContent:'space-around'}}>
                  <PageCardContentText>上午</PageCardContentText>
                  <PageCardContentText>下午</PageCardContentText>
                  <PageCardContentText>晚上</PageCardContentText>
                </div>
              </Col>
              <Col span={22}>
                <Form.Item label={"课节一"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节二"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节三"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange  />,
                  )}
                </Form.Item>
                <Form.Item label={"课节四"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节五"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节一"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节二"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节三"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节四"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节五"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节一"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节二"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
                <Form.Item label={"课节三"} style={{ 'marginBottom': '8px' }}>
                  {getFieldDecorator('classTime', {
                    rules: [{ required: true, message: '请选择学年开始日期' }],
                  })(
                    <TimePickerRange />,
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>

        </AbsoluteComponentMain>
        <AbsoluteComponentFooter>
          <Button type="primary" onClick={() => {
            dispatch({
              type: 'change BasicWorkRest hide',
              data: ''
            })
          }}>
            确定
                  </Button>
          <Button className="Gray" style={{ 'marginLeft': '10px' }} onClick={() => {
            dispatch({
              type: 'change BasicWorkRest hide',
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
const FormWorkRestComponent = Form.create<CreateFormProps>()(FormWorkRest)
export {
  FormWorkRestComponent
};