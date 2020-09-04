import React from "react";
import '@ant-design/compatible/assets/index.css';
import { Input, DatePicker, Select, Button, Row, Col, Form } from 'antd';
import { useDispatch, useMappedState } from "redux-react-hook";
import '@/baseUI/base.css';
import { IState } from '@/store';
const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 6 },
};
const tailLayout = {
  wrapperCol: { offset: 18, span: 8 },
};

const FormTermComponent = ( props:any ) => {
    const [form] = Form.useForm();
    const mapState = (state: IState): {
      addSchoolYearObj: any
    } => {
        return {
          addSchoolYearObj: state.BasicSchoolYear.addSchoolYearObj,    
        };
    };
    const {
      addSchoolYearObj,
    } = useMappedState(mapState);
    const submitBack = (): void => {
      props.stepsBackSet()
    }
    const onFinish = (values: any) => {
      console.log('Success:', values);
      props.stepsNextSet();
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
          <Form
            {...layout}
            name="basic"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{['schoolYearType']:'1',remember: true}}
          >
            {
              addSchoolYearObj.schoolYearType == '1' ?
              <Row style={{ 'padding':'20px'}}>
              <Col span={12}>
                <h5>上学期</h5>
                <Form.Item label="开始日期:">
                  <span>{addSchoolYearObj.startTime}</span>
                </Form.Item>
                <Form.Item
                  label="结束日期"
                  name="endTime2"
                  rules={[{ required: true, message: '请选择学年结束日期' }]}
                >
                  <DatePicker style={{'width':'200px'}}/>
                </Form.Item>
                <Form.Item
                  label="选择作息"
                  name="year"
                  rules={[{ required: true, message: '请选择学期' }]}
                >
                  <Select style={{'width':'200px'}}>
                        <Select.Option value="1">作息1</Select.Option>
                        <Select.Option value="2">作息2</Select.Option>
                    </Select>
                </Form.Item>
              </Col>  
              <Col span={12}>
                  <h5>下学期</h5>
                    <Form.Item
                    label="开始日期"
                    name="startTime2"
                    rules={[{ required: true, message: '请选择学年开始日期' }]}
                  >
                    <DatePicker style={{'width':'200px'}}/>
                  </Form.Item>
                  <Form.Item label="结束日期">
                    <span>2020年09月1日</span>
                  </Form.Item>
                  <Form.Item
                    label="选择作息"
                    name="year"
                    rules={[{ required: true, message: '请选择学期' }]}
                  >
                      <Select style={{'width':'200px'}}>
                          <Select.Option value="1">作息1</Select.Option>
                          <Select.Option value="2">作息2</Select.Option>
                      </Select>
                </Form.Item>
              </Col>
            </Row>:
            <Row style={{ 'padding':'20px'}}>
              <Col span={24} >
                <Form.Item label="开始日期:">
                  <span>{addSchoolYearObj.startTime}</span>
                </Form.Item>
                <Form.Item label="结束日期:">
                  <span>{addSchoolYearObj.endTime}</span>
                </Form.Item>
                <Form.Item
                  label="选择作息"
                  name="year"
                  rules={[{ required: true, message: '请选择学期' }]}
                >
                  <Select style={{'width':'200px'}}>
                        <Select.Option value="1">作息1</Select.Option>
                        <Select.Option value="2">作息2</Select.Option>
                    </Select>
                </Form.Item>
              </Col>
            </Row>
            }
            <Form.Item {...tailLayout}>
              <Button className="Gray" >
                取消
              </Button>
              <Button className="Blue" onClick={() => submitBack() } style={{'margin':'0 10px'}}>
                上一步
              </Button>
              <Button type="primary" htmlType="submit">
                下一步
              </Button>
            </Form.Item>
          </Form>
    );
};
export {
  FormTermComponent
};