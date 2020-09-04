import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import { PageLayoutWrapper } from '@/baseUI/PageLayoutWrapper';
import { PageSided } from "@/baseUI/PageSider";
import { PageMain } from "@/baseUI/PageMain";
import SideBar from "@/component/pageSideBar/";
import { BreadcrumbSub } from "@/component/Breadcrumb/";

import { SchoolYearPage } from '@/page/basic/schoolYear';
import { AddSchoolYearPage } from '@/page/basic/addSchoolYear';
import { WorkRestTimePage } from '@/page/basic/workRestTime';
import { SchoolYearDetailPage } from '@/page/basic/schoolYear/schoolYearDetail';
import { AttendencePage } from '@/page/basic/attendence';
import { AttendenceMouldPage } from '@/page/basic/attendence/mould';
import { ClassRoomPage } from '@/page/basic/classRoom'
import {
    SchoolYear,
    SchoolYearActive,
    WorkRest,
    WorkRestActive,
    ClassRoom,
    ClassRoomActive
} from '@/assert/tabbar';
import { Count } from './test';
const BasicLayoutRouter = (props: any) => {
	const beginLink = [{name:'首页',link:'/'}]
	const [arr, setArr] = useState([{}]);
	const MeetingSideBar = {
		defaultKey: '/',
		linkArray: [
			{
				name: '学年管理',
				link: '/basic/schoolYear/',
				icon: SchoolYear,
				iconActive: SchoolYearActive,
				show: true
			},
			{
				name: '录入学年',
				link: '/basic/schoolYear/add',
				show: false
			},
			{
				name: '学年详情',
				link: '/basic/schoolYear/detail',
				show: false
			},
			{
				name: '作息管理',
				link: '/basic/schoolYear/workRest/',
				show: false
			},
			{
				name: '教室管理',
				link: '/basic/classRoom/',
				icon: ClassRoom,
				iconActive: ClassRoomActive,
				show: true
			},
			{
				name: '考勤管理',
				link: '/basic/attendence/',
				icon: WorkRest,
				iconActive: WorkRestActive,
				show: true
			},
			{
				name: '考勤模版',
				link: '/basic/attendence/mould',
				show: false
			},
		]
	};
	useEffect(() => {
		let shortTimeArr: ({ name: string; link: string; icon: any; iconActive: any; show: boolean; } | { name: string; link: string; show: boolean; icon?: undefined; iconActive?: undefined; })[] = []
		MeetingSideBar.linkArray.map((item) => {
			if (props.location.pathname.indexOf(item.link) !== -1) {
				shortTimeArr.push(item)
			}
		});
		setArr([...beginLink,...shortTimeArr]);
	}, [props.location.pathname])
	return (
		<PageLayoutWrapper>
			<PageSided key={1}>
				<SideBar {...MeetingSideBar} />

			</PageSided>

			<PageMain key={2}>
				<BreadcrumbSub linkList={arr} />
				<Switch>
					<Route exact path="/basic/attendence/" component={AttendencePage} />
					<Route exact path="/basic/attendence/mould" component={AttendenceMouldPage} />
					<Route exact path="/basic/schoolYear/" component={SchoolYearPage} />
					<Route exact path="/basic/schoolYear/add" component={AddSchoolYearPage} />
					<Route exact path="/basic/schoolYear/detail" component={SchoolYearDetailPage} />
					<Route exact path="/basic/schoolYear/workRest/" component={WorkRestTimePage} />
					<Route exact path="/basic/classRoom/" component={ClassRoomPage} />
					<Route exact path="/basic/test/" component={Count} />
				</Switch>
			</PageMain>
		</PageLayoutWrapper>
	);
};
const BasicLayout = withRouter(BasicLayoutRouter);
export {
	BasicLayout
};