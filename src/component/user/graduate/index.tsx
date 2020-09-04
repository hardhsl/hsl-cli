import React, { createContext, useState } from 'react';
import { Headers } from './headers';
import { Table } from 'antd';
import { styles } from './ui';
export const listQueryContext = createContext( {} as queryData);
import { ColumnProps } from 'antd/es/table';
import './style.css';
import { TableImg } from '@/assert/img/base';

import {IState} from '@/store';
import { useMappedState } from 'redux-react-hook';
interface User {
  key: string;
    id: string;
  name: string;
  class: string;
  state: number;
  gradeLv: string;
  comment: string;
  imgComment: string;
}
interface queryData {
    listQuery: any;
    setlistQuery: any;
    selectData: Array<object>;
    setVisible: any;
}

  const Data = (state: IState) => {
    return {
        ImportStudentAttend: state.StudentAttendence.ImportStudentAttend,
        StudentAttendAddEdit: state.StudentAttendence.StudentAttendAddEdit
    };
  };
const GraduateStudentMain = () => {
    const {} = useMappedState(Data);
    const columns:ColumnProps<User>[] = [
        {
          title: '照片',
          dataIndex: 'imgComment',
          render: (imgComment: string | undefined) =>imgComment ? <img src={imgComment} style={{ width:'38px',height:'27px' }} /> : <span>无图片评论</span>,
          align: 'center'
        },
        {
          key:"id",
          title: '学号',
          dataIndex: 'id',
          align: 'center'
        },
        {
          title: '姓名',
          dataIndex: 'name',
          align: 'center'
        },
        {
          title: '毕业时间',
          dataIndex: 'class',
          align: 'center',
        },
        {
          title: '毕业班级',
          dataIndex: 'class',
          align: 'center',
        },
        {
          title: '毕业去向',
          dataIndex: 'gradeLv',
          align: 'center',
          key: 'gradeLv'
        },
        {
          title: '联系方式',
          dataIndex: 'class',
          align: 'center',
        },
        {
          title: '操作',
          align:'center',
          render: (text: any) => (
              <span>
                <img src={TableImg} style={{ width: '16px',cursor:'pointer'}}/>
              </span>
            ),
      },
      ];
      const data: User[] = [
        {
          key:'1',
          id: '2020071812',
          name: '叶良辰',
          class: '一年一班',
          state: 0,
          gradeLv: '及格',
          comment: '让孩子少玩点游戏，天天就知道王者荣耀，吃鸡游戏，干啥啥不行，吃啥啥不剩',
          imgComment: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594807597054&di=fb0ad94aae3facf91aa6472e3df94502&imgtype=0&src=http%3A%2F%2Fpic1.16pic.com%2F00%2F12%2F20%2F16pic_1220505_b.jpg",
        },
        {
           key:'2',
            id: '20200719',
            name: '叶良辰',
            class: '一年一班',
            state: 1,
            gradeLv: '及格',
            comment: '让孩子少玩点游戏，天天就知道王者荣耀，吃鸡游戏，干啥啥不行，吃啥啥不剩',
            imgComment: "",
          },
      ];
    const [listQuery, setlistQuery] = useState({
        page: 1,
        grade: 'jack',
        location: '四楼',
        className: '一班'
    });
    const rowSelection = {
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    
    };
    const [selectData, setSelectData] = useState([]);
    const [ visible, setVisible ] = useState(false)
    return <div className="wropBorder">
        <listQueryContext.Provider value={{ listQuery, setlistQuery , selectData,setVisible}}>
                <Headers />
        </listQueryContext.Provider>

        <div style={styles.contentWrap}>
            <Table<User> rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    </div>
}

export{
    GraduateStudentMain
}