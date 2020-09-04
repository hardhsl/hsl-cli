import React from 'react';
import {
    PageCardDIvWrap,
    PageCardDIvWrapHeader,
    PageCardDIvWrapMain,
} from '@/baseUI/pageCard';
import { Styles } from './ui';
import { PlusOutlined } from '@ant-design/icons';
import { Calendar, Badge } from 'antd';
import { useDispatch } from 'redux-react-hook';
interface listDataSet{
    type: string,
    content: string
}

function getListData(value: { date: () => any; }) {
    let listData
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long' },
          { type: 'error', content: 'This is error event 1.' },
        ];
        break;
      default:
    }
    return listData || [];
  }

const dateCellRender = (value: any) => {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item: { content: {} | null | undefined; type: string | undefined; },index:number) => (
        <li key={index}>
          <Badge status='warning' text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value: { month: () => number; }) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value: any) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

const CalendarComponent = () => {
    const dispatch = useDispatch();

    const headerRender = () => {
    
        return (
          <PageCardDIvWrapHeader style={Styles.SpaceBetween}>
                    <span>我的日程</span>
                    <div><PlusOutlined
                      onClick={()=>{
                            dispatch({
                              type: 'change addDatePlan show',
      
                          })
                      }} /></div>
                </PageCardDIvWrapHeader>
        );
    }
    return <div>
        <PageCardDIvWrap style={{ marginTop:'20px' }}>
            <PageCardDIvWrapMain style={{ padding: '20px' }}>
             <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} headerRender={headerRender} />
            </PageCardDIvWrapMain>
        </PageCardDIvWrap>
    </div>
}

export {
    CalendarComponent
}