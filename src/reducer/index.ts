
import BasicSchoolYear from '@/reducer/basic/schoolYear';
import EducationCouresManage from '@/reducer/educational/couresManage';
import EducationGradeManage from '@/reducer/educational/gradeManage';
import EducationClassManage from '@/reducer/educational/classManage';
import Attendence from '@/reducer/basic/attendence';
import StudentAttendence from './user/attendence';
import WorkRest from './basic/workRest';
import DivideClass from './educational/divideClass';
import ControlBoardHome from './controlBoard/home'

import {combineReducers} from 'redux';

const reducers = combineReducers({
    BasicSchoolYear,
    EducationCouresManage,
    EducationGradeManage,
    EducationClassManage,
    Attendence,
    StudentAttendence,
    WorkRest,
    DivideClass,
    ControlBoardHome
});

export default reducers;