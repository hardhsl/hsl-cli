import {BasicSchoolYearAction, BasicSchoolYearState} from '@/store/basic/schoolYear';

const initialState: BasicSchoolYearState = {
    data:null,
    workRestShow:false,
    list: [],
    total: 0,
    name: '',
    page: 1,
    limit: 12,
    addSchoolYearObj:{
        schoolYearName: '',
        startTime: '',
        endTime: '',
        schoolYearType: '',
        workRestList: []
    }
};

export default function reducer(
    state: BasicSchoolYearState | null | undefined = initialState,
    action: BasicSchoolYearAction,
): BasicSchoolYearState | null {
    if (!state) {
        return null;
    }

    switch (action.type) {
      case "change BasicSchoolYear data": {
        return {
            ...state,
            data: action.data
        };
    }
    case "change BasicWorkRest hide": {
        return {
            ...state,
            workRestShow: false
        };
    }
    case "change BasicWorkRest show": {
        return {
            ...state,
            workRestShow: true
        };
    }
    case 'change SchoolYearList data': {
        return {
            ...state,
            list: action.list || state.list,
            total: action.total || state.total,
            page: action.page || state.page,
            limit: action.limit || state.limit,
            name: action.name || state.name,
        };
    }
    case "add SchoolYearObj data": {
        return {
            ...state,
            addSchoolYearObj: action.addSchoolYearObj
        };
    }
        default:
            return state;
    }
}
