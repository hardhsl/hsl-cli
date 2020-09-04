import { StudentAttendenceState, StudentAttendenceAction } from '@/store/user/attendenceStudent';


const initialState :StudentAttendenceState = {
    ImportStudentAttend: false,
    StudentAttendAddEdit: false,
    BatchSetEvaluateList: [],
    EvaluateEditObj:{}
}

export default function reducer(
    state: StudentAttendenceState | null | undefined = initialState,
    action: StudentAttendenceAction,
) :StudentAttendenceState | null {
    if (!state) {
        return null;
    }
    switch (action.type){
        case "change ImportStudentAttend hide": {
            return {
                ...state,
                ImportStudentAttend: false
            };
        }
        case "change ImportStudentAttend show": {
            return {
                ...state,
                ImportStudentAttend: true
            };
        }
        case "change StudentAttendAddEdit hide": {
            return {
                ...state,
                StudentAttendAddEdit: false
            };
        }
        case "change StudentAttendAddEdit show": {
            return {
                ...state,
                StudentAttendAddEdit: true
            };
        }
        case "change BatchSetEvaluateList data": {
            return {
                ...state,
                BatchSetEvaluateList: action.data
            };
        }
        case "change EvaluateEditObj data" : {
            return {
                ...state,
                EvaluateEditObj: action.data
            };
        }
        default:
            return state;
    }
}