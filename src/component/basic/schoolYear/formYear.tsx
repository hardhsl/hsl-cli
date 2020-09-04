import React, {useEffect} from "react";
import { Input, DatePicker, Select, Button, Form } from 'antd';
import { useDispatch, useMappedState } from "redux-react-hook";
import { IState } from '@/store';
import { Link } from 'react-router-dom';
import '@/baseUI/base.css';
const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 6 },
};
const tailLayout = {
  wrapperCol: { offset: 18, span: 4 },
};
// interface CreateFormProps extends FormComponentProps {
//   stepsNextSet: any;
//   data?: any;
// }
const FormYear  = ( props: { stepsNextSet: () => void; } ) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
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
    useEffect(()=>{
      console.log('执行返回上一步数据回显')
      form.setFieldsValue({
        schoolYearName: addSchoolYearObj.schoolYearName,
        startTime: addSchoolYearObj.startTime,
        endTime: addSchoolYearObj.endTime,
        schoolYearType: addSchoolYearObj.schoolYearType ? addSchoolYearObj.schoolYearType : '1',
      })
  },[])
    const onFinish = (values: any) => {
      console.log('Success:', values);
      const data = {
        ...values,
        'startTime': values.startTime.format('YYYY-MM-DD'),
        'endTime': values.endTime.format('YYYY-MM-DD'),
      };
      props.stepsNextSet();
      console.log('Received values of form: ', data);
      
      let obj = {
        ...addSchoolYearObj,
        ...data
      }
      dispatch({
        type: 'add SchoolYearObj data',
        addSchoolYearObj:obj
      })
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
             <Form.Item
                label="学年名称"
                name="schoolYearName"
                rules={[{ required: true, message: '请输入学年名称' }]}
              >
                 <Input
                      placeholder="请输入学年名称"
                      style={{'width':'200px'}}
                  />
              </Form.Item>
              <Form.Item
                label="开始日期"
                name="startTime"
                rules={[{ required: true, message: '请选择学年开始日期' }]}
              >
                 <DatePicker style={{'width':'200px'}}/>
              </Form.Item>
              <Form.Item
                label="结束日期"
                name="endTime"
                rules={[{ required: true, message: '请选择学年结束日期' }]}
              >
                 <DatePicker style={{'width':'200px'}}/>
              </Form.Item>
              <Form.Item
                label="学期选择"
                name="schoolYearType"
                rules={[{ required: true, message: '请选择学期' }]}
              >
                 <Select style={{'width':'200px'}}>
                    <Select.Option value="1">上/下学期</Select.Option>
                    <Select.Option value="2">完整学期</Select.Option>
                  </Select>
              </Form.Item>
            <Form.Item {...tailLayout}>
              <Button className="Gray"  style={{'marginRight':'10px'}}>
                <Link to="/basic/schoolYear/">取消</Link>
              </Button>
              <Button type="primary" htmlType="submit">
                下一步
              </Button>
            </Form.Item>
          </Form>
    );
};
const FormYearComponent =  FormYear
export {
  FormYearComponent
};