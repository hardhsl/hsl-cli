import {EducationGradeManageState, EducationGradeManageAction} from '@/store/educational/gradeManage';

const initialState: EducationGradeManageState = {
    addGradeShow:false,
    gradeListData:[],
    gradeFromData: {},
    gradeAddFromShow: true,
    gradeDetailBindFromShow: false
};

export default function reducer(
    state: EducationGradeManageState | null | undefined = initialState,
    action: EducationGradeManageAction,
): EducationGradeManageState | null {
    if (!state) {
        return null;
    }

    switch (action.type) {
    
    case "change EducationAddGrade hide": {
        return {
            ...state,
            addGradeShow: false
        };
    }
    case "change EducationAddGrade show": {
        return {
            ...state,
            addGradeShow: true,
            gradeAddFromShow: true,
            gradeFromData:{}
        };
    }
    case "grade EducationGradeListData change": {
        return {
            ...state,
            gradeListData: [...state.gradeListData ,action.data]
        };
    }
    case "grade EducationGradeFromData change": {
        return {
            ...state,
            gradeFromData: action.data,
            addGradeShow: true,
            gradeAddFromShow: false
        };
    }
    case "change GradeDetailBindFrom hide": {
        return {
            ...state,
            gradeDetailBindFromShow: false
        };
    }
    case "change GradeDetailBindFrom show": {
        return {
            ...state,
            gradeDetailBindFromShow: true
        };
    }
        default:
            return state;
    }
}
