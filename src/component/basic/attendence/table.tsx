import React from "react";
import { Row, Col, Table } from 'antd';
import { ColumnProps } from "antd/lib/table";
interface TableData {
    grade: string;
    className: string;
    studentNumber: string;
}

const AttendenceTableMain = () => {
    const columns: ColumnProps<TableData>[] = [
        {
            title: '照片',
            dataIndex: 'grade',
            align:'center',
        },
        {
            title: '学号',
            align:'center',
            dataIndex: 'className',
        },
        {
            title: '姓名',
            align:'center',
            dataIndex: 'studentNumber',
        },
        {
            title: '班级',
            align:'center',
            dataIndex: 'studentNumber',
        },
        {
            title: '请假时间',
            align:'center',
            dataIndex: 'studentNumber',
        },
        {
            title: '请假类型',
            align:'center',
            dataIndex: 'studentNumber',
        },
        {
            title: '请假事由',
            align:'center',
            dataIndex: 'studentNumber',
        },
       
        
    ];
    const data: TableData[]  = [
        {
            grade: '未添加',
            className: '2275F1FF80C5',
            studentNumber: '未开始'
        },
        {
            grade: '未添加',
            className: '2275F1FF80C5',
            studentNumber: '未开始'
        },
    ];

    return (
        <div>
            <Row style={{'background':'#fff'}}>
                <Col span={24}>
                    <Table pagination={false} columns={columns} dataSource={data} />
                </Col>
            </Row>
        </div>
    );
};

export {
    AttendenceTableMain
};