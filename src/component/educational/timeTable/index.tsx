import React, { useState, createContext } from 'react';
import { Headers } from './headers';
import { Row, Col } from 'antd';
export const listQueryContext = createContext( {} as queryData);

interface queryData {
    listQuery: any;
    setlistQuery: any;
    selectData: Array<object>;
    setVisible: any;
}
const couresListData : any[] = [
    {name:'第一节',list:[
        { lesson:'语文',teacher : '李老师' },
        {},
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },   
    {name:'第二节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第三节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第四节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第五节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第六节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
    {name:'第七节',list:[
        { lesson:'语文',teacher : '李老师' },
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        {},
        { lesson:'语文',teacher : '老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        { lesson:'语文',teacher : '欧阳老师' },
        ]
    },
]
const dataArrTotal = [1,2,3,4,5]
import {
    PageCardDIvWrap,
    PageCardDIvWrapHeader,
    FlexWrap,
    CardIconSpan
} from '@/baseUI/pageCard';
import {
    LessonLineTitleWrap,
    LessonLineListWrap,
    LessonLineListLi,
    LessonLineListLiEmpty,
    GradeClassStudentWrap,
    EmptyText
} from './ui';
import { TableMessage,
    TimeTableOne,
    TimeTableTwo,
    TimeTableThree } from '@/assert/img/base'
const TimeTableMain = () => {
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
        <Row style={{ margin:'10px -10px 0'}}>
            { dataArrTotal.map((item,index)=>{
               return <Col span={8} key={index} style={{padding:'10px'}}>
                <PageCardDIvWrap style={{ transform:'scale(1)' }}>
                            <PageCardDIvWrapHeader>
                                <span>班级课表</span>
                                <div style={{ float:'right',display:'flex',height:"100%",alignItems:'center' }}>
                                    <CardIconSpan><img className="img" src={ TimeTableOne} /></CardIconSpan>
                                    <CardIconSpan><img className="img" src={ TimeTableTwo} /></CardIconSpan>
                                    <CardIconSpan><img className="img" src={ TimeTableThree} /></CardIconSpan>
                                </div>
                            </PageCardDIvWrapHeader>
                            <GradeClassStudentWrap style={{ maxHeight: '675px',padding: '0 10px' }}>
                                {
                                    couresListData && couresListData.length >0 ? 
                                    <Row style={{ width:'100%' }}>
                                        <Col span={22} offset={2}>
                                            <LessonLineTitleWrap>
                                                <span>周一</span>
                                                <span>周二</span>
                                                <span>周三</span>
                                                <span>周四</span>
                                                <span>周五</span>
                                                <span>周六</span>
                                                <span>周日</span>
                                            </LessonLineTitleWrap>
                                        </Col>
                                        {
                                            couresListData.map((item: any,index: number)=>{
                                                return (
                                                    <Row>
                                                        <Col span={2} style={{lineHeight: '30px'}}>{item.name}</Col>
                                                        <Col span={22}>
                                                            <LessonLineListWrap>
                                                                {
                                                                    item.list && item.list.length > 0 && item.list.map((ite: { lesson: any; teacher: any; })=>{
                                                                        return(
                                                                            ite.lesson ? <LessonLineListLi>{ite.lesson} {ite.teacher}</LessonLineListLi> : <LessonLineListLiEmpty />
                                                                        )
                                                                    })  
                                                                }
                                                            </LessonLineListWrap>
                                                        </Col>
                                                    </Row>
                                                )
                                            })
                                        }
                                    </Row>
                                    : <FlexWrap >
                                    <img src={TableMessage} />
                                    <EmptyText>添加课表</EmptyText>
                                </FlexWrap>
                                }
                            </GradeClassStudentWrap>
                            
                        </PageCardDIvWrap>
                </Col>
            }) }
        </Row>

        
    </div>
}


export {
    TimeTableMain
}