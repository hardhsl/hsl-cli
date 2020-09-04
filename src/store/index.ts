import {createStore, Store, compose, applyMiddleware} from 'redux';
import reducers from '@/reducer';

import { BasicSchoolYearState }from '@/store/basic/schoolYear';
import { EducationClassManageState } from '@/store/educational/classManage';
import { EducationGradeManageState } from '@/store/educational/gradeManage';
import { EducationCouresManageState } from '@/store/educational/couresManage';
import { AttendenceState } from '@/store/basic/attendence';
import { StudentAttendenceState } from './user/attendenceStudent';
import { WorkRestState } from './basic/workRest';
import { DivideClassState } from './educational/divideClass';
import { ControlBoardHomeState } from './controlBoard/home';
export interface MeetingStatisticRank {
    rank: number;
    avatar?: string;
    name: string;
    percent: number;
    time: number;
    count: number;
}
// @ts-ignore
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(reducers, composeEnhancers(
//     // applyMiddleware(thunk)
// ))

// store.replaceReducer(reducers)
// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IState {
	BasicSchoolYearState: any;
    BasicSchoolYear: BasicSchoolYearState;
    EducationClassManage: EducationClassManageState;
    EducationGradeManage:EducationGradeManageState;
    EducationCouresManage: EducationCouresManageState;
    Attendence: AttendenceState;
    StudentAttendence: StudentAttendenceState;
    WorkRest: WorkRestState,
    DivideClass: DivideClassState,
    ControlBoardHome: ControlBoardHomeState
}

export function makeStore(): Store {
    return createStore(reducers,composeEnhancers());
}
