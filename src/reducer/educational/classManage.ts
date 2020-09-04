import {EducationClassManageState, EducationClassManageAction} from '@/store/educational/classManage';

const initialState: EducationClassManageState = {
    addClassShow:false,
    importClassExcel: false
};

export default function reducer(
    state: EducationClassManageState | null | undefined = initialState,
    action: EducationClassManageAction,
): EducationClassManageState | null {
    if (!state) {
        return null;
    }

    switch (action.type) {
    
    case "change EducationClassManage hide": {
        return {
            ...state,
            addClassShow: false
        };
    }
    case "change EducationClassManage show": {
        return {
            ...state,
            addClassShow: true
        };
    }
    case "change ImportClassExcel hide": {
        return {
            ...state,
            importClassExcel: false
        };
    }
    case "change ImportClassExcel show": {
        return {
            ...state,
            importClassExcel: true
        };
    }
        default:
            return state;
    }
}
