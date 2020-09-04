import React,{ useEffect } from "react";
import {useDispatch, useMappedState} from 'redux-react-hook';
import { DeleteOutlined } from '@ant-design/icons';
import { Row, Col, Modal, Pagination } from 'antd';
import { Headers } from './headers';
import { Link } from 'react-router-dom';
const { confirm } = Modal;
import MeetingReservationServices from '@/services/schoolYear';
const _SchoolYearServices = new MeetingReservationServices();
import {IState} from '@/store';
import { compony } from '@/util/cardBgchange';
import './style.css';
import {
	CardWrap,
	CardTextTitle,
	CardTextContent,
	CardIconBottom,
	CardIconSpan,
	CardHeaderWrap
} from './ui';
import { CardTag } from '@/assert/img/base';
import { BottomPagination } from '@/baseUI/pageCard';
import { warning } from "@/util/golbalModalMessage";

const SchoolYearState = (state: IState) => {
    return {
        list: state.BasicSchoolYear.list,
		total: state.BasicSchoolYear.total,
		page: state.BasicSchoolYear.page,
		limit: state.BasicSchoolYear.limit,
		name: state.BasicSchoolYear.name
    };
};

const SchoolYearMain = () => {
	const { list,total,page,limit,name} = useMappedState(SchoolYearState)
  	const dispatch = useDispatch();
	useEffect(() => {
        _SchoolYearServices.getSchoolYearList({
            name,page,limit
        }, (res: any) => {
			console.log(res,'学年管理数据')
            dispatch({
                type: 'change SchoolYearList data',
                list: res.list,
                total: parseInt(res.total)
            });
        }, () => {
            warning('数据获取失败');
        });
    }, [name,page,limit]);
	const  pageOnChange = (pageNumber: number) => {
		dispatch({
			type: 'change SchoolYearList data',
			page: pageNumber,
		});
	  }
    return (
        <div>
			<Headers />
			<Row style={{ margin:'0 -8px' }}>
				{
					list.map((item: any,index: number)=>{
						return (
                            <Col span={6} style={{ padding:'0 8px'}} key={index}>
								<CardWrap style={ compony(index) }>
									<CardHeaderWrap>
										<CardTextTitle>{ item.name }  学年</CardTextTitle>
										<img src={CardTag}  style={{ width:'30px',height:'20px',marginRight:'8px' }}/>
									</CardHeaderWrap>
									
									<CardTextContent>起止日期: { item.date }</CardTextContent>
									<CardTextContent>学期数量: { item.num }</CardTextContent>
									<CardIconBottom>
										<CardIconSpan><Link to={"/basic/schoolYear/detail?id="+item.id} style={{color: '#fff' }} ><span className="iconfont">&#xe640;</span></Link></CardIconSpan>
										<CardIconSpan><span className="iconfont" style={{ fontSize:'13px' }}>&#xe63e;</span></CardIconSpan>
										<CardIconSpan><span className="iconfont"  style={{ fontSize:'15px',marginRight:'0px' }} onClick={(index: any)=>{
											confirm({
												content: '此操作将从列表中删除信息，是否继续？',
												icon: <DeleteOutlined />,
												cancelButtonProps: item,
												onCancel() {},
												onOk(e) {
													
												  return new Promise((resolve, reject) => {
													console.log(item,'点击')
													setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
												  }).catch(() => console.log('Oops errors!'));
												},
											  })
											}
										}>&#xe63f;</span></CardIconSpan>
									</CardIconBottom>
								</CardWrap>
							</Col>
                        );
					})
				}
			</Row>
			<BottomPagination>
				<Pagination showQuickJumper current={page} total={total} onChange={pageOnChange} />
			</BottomPagination>
		</div>
    );
};

export {
    SchoolYearMain
};