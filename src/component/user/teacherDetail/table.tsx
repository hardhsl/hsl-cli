import React from "react";
import { Row, Col, Table } from 'antd';
import { ColumnProps } from "antd/lib/table";
interface TableData {
    grade: string;
    className: string;
    studentNumber: string;
}

const EquipTableMain = () => {
    const columns: ColumnProps<TableData>[] = [
        {
            title: '类型',
            dataIndex: 'grade',
            align:'center',
        },
        {
            title: '序列号',
            align:'center',
            dataIndex: 'className',
        },
        {
            title: '状态',
            align:'center',
            dataIndex: 'studentNumber',
        },
       
        
    ];
    const data: TableData[]  = [
        {
            grade: '电子班牌',
            className: '2275F1FF80C5',
            studentNumber: '未开始'
        },
        {
            grade: '电子班牌',
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
    EquipTableMain
};