import React from "react";
import { Row, Col, Table } from 'antd';
import { ColumnProps } from "antd/lib/table";
interface TableData {
    grade: string;
    className: string;
    emblem: string;
    studentNumber: string;
}

const TestTableMain = () => {
    const columns: ColumnProps<TableData>[] = [
        {
            title: '考试类型',
            dataIndex: 'grade',
            align:'center',
        },
        {
            title: '考试时间',
            align:'center',
            dataIndex: 'className',
        },
        {
            title: '参与班级',
            align:'center',
            dataIndex: 'emblem',
        },
        {
            title: '状态',
            align:'center',
            dataIndex: 'studentNumber',
        },
       
        
    ];
    const data: TableData[]  = [
        {
            grade: '月考',
            className: '2020-06-07～2020-06-08',
            emblem: '全班',
            studentNumber: '未开始'
        },
        {
            grade: '月考',
            className: '2020-06-07～2020-06-08',
            emblem: '全班',
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
    TestTableMain
};