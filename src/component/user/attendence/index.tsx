import React, { createContext, useState } from 'react';
import { Headers } from './headers';
import { EditFilled } from '@ant-design/icons';
import { Table } from 'antd';
import { styles } from './ui';
import intl from 'react-intl-universal';
export const listQueryContext = createContext( {} as queryData);
import { ColumnProps } from 'antd/es/table';
import './style.css';
import { ImportExcalComponent } from './import';
import { CommentAddEdit } from './commentEdit';

import {IState} from '@/store';
import { useMappedState } from 'redux-react-hook';
interface User {
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

const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  // getCheckboxProps: (record: { name: string; }) => ({
  //   disabled: record.name === 'Disabled User', 
  //   name: record.name,
  // }),

};
const Data = (state: IState) => {
  return {
      ImportStudentAttend: state.StudentAttendence.ImportStudentAttend,
      StudentAttendAddEdit: state.StudentAttendence.StudentAttendAddEdit
  };
};
const AttendenceMain = () => {
    const {
        ImportStudentAttend,
        StudentAttendAddEdit
    } = useMappedState(Data);
    const columns:ColumnProps<User>[] = [
        {
          key:"id",
          title: intl.get('STUDENT_PINGJIA.XUEHAO'),
          dataIndex: 'id',
          align: 'center'
        },
        {
          title: intl.get('STUDENT_PINGJIA.XINGMING'),
          dataIndex: 'name',
          align: 'center'
        },
        {
          title: intl.get('STUDENT_PINGJIA.BANJI'),
          dataIndex: 'class',
          align: 'center'
        },
        {
          title: intl.get('STUDENT_PINGJIA.ZHUANGTAI'),
          dataIndex: 'state',
          render: (state: number) =>state == 0 ? <span>未评价</span> : <span>已评价</span>,
          align: 'center'
        },
        {
          title: intl.get('STUDENT_PINGJIA.DENGJI'),
          dataIndex: 'gradeLv',
          align: 'center'
        },
        {
          title: intl.get('STUDENT_PINGJIA.ZONGHE_PINGYU'),
          dataIndex: 'comment',
          align: 'center'
        },
        {
          title: intl.get('STUDENT_PINGJIA.TUPIAN_PINGLUN'),
          dataIndex: 'imgComment',
          render: (imgComment: string | undefined) =>imgComment ? <img src={imgComment} style={{ width:'38px',height:'27px' }} /> : <span>无图片评论</span>,
          align: 'center'
        },
        {
            title: intl.get('STUDENT_PINGJIA.CAOZUO'),
            align:'center',
            render: (text: any, record: any) => (
                <span>
                  <EditFilled style={{ color: '#1DB498' ,margin:'0 15px'}} />
                </span>
              ),
        },
      ];
      const data: User[] = [
        {
          id: '20200718',
          name: '叶良辰',
          class: '一年一班',
          state: 0,
          gradeLv: '及格',
          comment: '让孩子少玩点游戏，天天就知道王者荣耀，吃鸡游戏，干啥啥不行，吃啥啥不剩',
          imgComment: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594807597054&di=fb0ad94aae3facf91aa6472e3df94502&imgtype=0&src=http%3A%2F%2Fpic1.16pic.com%2F00%2F12%2F20%2F16pic_1220505_b.jpg",
        },
        {
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
    const [selectData, setSelectData] = useState([]);
    const [ visible, setVisible ] = useState(false)
    return <div>
        <listQueryContext.Provider value={{ listQuery, setlistQuery , selectData,setVisible}}>
                <Headers />
        </listQueryContext.Provider>

        <div style={styles.contentWrap}>
            <Table<User> rowSelection={rowSelection}  columns={columns} dataSource={data} />
        </div>
        { ImportStudentAttend && <ImportExcalComponent /> }
        { StudentAttendAddEdit && <CommentAddEdit />}
    </div>
}

export{
    AttendenceMain
}