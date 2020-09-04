import React, { useState, createContext } from "react";
import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';
import { Row, Col, Table, Modal, Button } from 'antd';
import { Headers } from './headers';
import { ColumnProps } from "antd/lib/table";
import { useMappedState} from 'redux-react-hook';
import { FormAddClassComponent } from "./addClass";
import { ImportExcalComponent } from './import';
import {IState} from '@/store';
export const listQueryContext = createContext( {} as queryData);
interface TableData {
    grade: string;
    className: string;
    emblem: string;
    studentNumber: string;
    teacher: string;
    classRoom: string;
    classStatus: string;
}
interface queryData {
    listQuery: any;
    setlistQuery: any;
    selectData: Array<object>;
    setVisible: any;
}
import { FlexWrap } from '@/baseUI/pageCard';
const classManageData = (state: IState) => {
    return {
        addClassShow: state.EducationClassManage.addClassShow,
        importClassExcel: state.EducationClassManage.importClassExcel
    };
};

const ClassManageMain = () => {
    const {
        addClassShow,
        importClassExcel
    } = useMappedState(classManageData);
    const [listQuery, setlistQuery] = useState({
        page: 1,
        grade: 'jack',
        location: '四楼',
        className: '一班'
    });
    const [selectData, setSelectData] = useState([]);
    const [ visible, setVisible ] = useState(false)
    const columns: ColumnProps<TableData>[] = [
        {
            title: '年级',
            dataIndex: 'grade',
            align:'center',
        },
        {
            title: '班级名称',
            align:'center',
            dataIndex: 'className',
        },
        {
            title: '班徽',
            align:'center',
            dataIndex: 'emblem',
        },
        {
            title: '学生人数',
            align:'center',
            dataIndex: 'studentNumber',
        },
        {
            title: '班主任',
            align:'center',
            dataIndex: 'teacher',
        },
        {
            title: '班级教室',
            align:'center',
            dataIndex: 'classRoom',
        },
        {
            title: '班牌状态',
            align:'center',
            dataIndex: 'classStatus',
        },
        {
            title: '操作',
            align:'center',
            render: (text, record) => (
                <span>
                  <EyeFilled style={{ color: '#139CD2' }} />
                  <EditFilled style={{ color: '#1DB498' ,margin:'0 15px'}} />
                  <DeleteFilled style={{ color: '#F45B6A' }} />
                </span>
              ),
        },
        
    ];
    const data: TableData[]  = [
        {
            grade: '一年级',
            className: '一班',
            emblem: '未上传',
            studentNumber: '40人',
            teacher: '李老师',
            classRoom: '四楼',
            classStatus: '1'
        },
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
            setSelectData(selectedRows)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };
    return (
        <div>
            <listQueryContext.Provider value={{ listQuery, setlistQuery , selectData,setVisible}}>
                <Headers />
            </listQueryContext.Provider>
            
            <Row style={{'background':'#fff'}}>
                <Col span={24}>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </Col>
            </Row>

            { addClassShow &&  <FormAddClassComponent />}
            { importClassExcel &&   <ImportExcalComponent /> }
            <Modal
                title="上传班徽"
                visible={visible}
                onOk={()=>{setVisible(false)}}
                onCancel={()=>{setVisible(false)}}>
                <div>
                    <FlexWrap>
                        <Button type="primary">添加文件</Button>
                        <span style={{ fontSize:'12px',color:'#A1A6A6',marginLeft:'20px' }}>点击批量上传图片，图格式为jpg，单张不超过5M</span>
                    </FlexWrap>
                </div>
            </Modal>
        </div>
    );
};

export {
    ClassManageMain
};