import React from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { Row, Col, Table, Modal } from 'antd';
import { ColumnProps } from "antd/lib/table";
import { Headers } from './headers';
import { StatusDrop } from '@/component/statusDrop';
const { confirm } = Modal;
interface TableData {
    grade: string;
    className: string;
    studentNumber: string;
    status: number
}

const AttendenceTableMain = () => {
    const columns: ColumnProps<TableData>[] = [
        {
            title: '名称',
            dataIndex: 'grade',
            align:'center',
        },
        {
            title: '类型',
            align:'center',
            dataIndex: 'className',
        },
        {
            title: '容纳人数',
            align:'center',
            dataIndex: 'studentNumber',
        },
        {
            title: '班级',
            align:'center',
            dataIndex: 'studentNumber',
        },
        {
            title: '设备',
            align:'center',
            dataIndex: 'status',
            render: (status: Number) => {
                return (status == 0 ? <span>未绑定</span> : <StatusDrop color={ status == 1 ? '#F4626C' : '#1DBA99' } name={status == 1 ? '未开始' : '已结束' }></StatusDrop>)
            }
        },
        {
            title: '操作',
            align:'center',
            render: (text, record) => (
                <div>
                  <span className="iconfont" style={{ marginRight:'20px' }}>&#xe63e;</span>
                  <span className="iconfont"  style={{  }} onClick={(index: any)=>{
                        confirm({
                            content: '此操作将从列表中删除信息，是否继续？',
                            icon: <DeleteOutlined />,
                            onCancel() {},
                            onOk(e) {
                                
                                return new Promise((resolve, reject) => {
                                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                                }).catch(() => console.log('Oops errors!'));
                            },
                            })
                        }
                    }>&#xe63f;</span>
                </div>
              ),
        },
       
        
    ];
    const data: TableData[]  = [
        {
            grade: '未添加',
            className: '2275F1FF80C5',
            studentNumber: '未开始',
            status:0
        },
        {
            grade: '未添加',
            className: '2275F1FF80C5',
            studentNumber: '未开始',
            status:1
        },
        {
            grade: '未添加',
            className: '2275F1FF80C5',
            studentNumber: '未开始',
            status:2
        },
    ];
    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
      };
    return (
        <div>

            <Row style={{'background':'#fff'}}>
                <Col span={24}><Headers /></Col>
                <Col span={24}>
                    <Table pagination={false} rowSelection={rowSelection} columns={columns} dataSource={data} />
                </Col>
            </Row>
        </div>
    );
};

export {
    AttendenceTableMain
};