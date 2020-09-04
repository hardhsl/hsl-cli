import {EducationCouresManageState, EducationCouresManageAction} from '@/store/educational/couresManage';

const initialState: EducationCouresManageState = {
    addCouresShow:false
};

export default function reducer(
    state: EducationCouresManageState | null | undefined = initialState,
    action: EducationCouresManageAction,
): EducationCouresManageState | null {
    if (!state) {
        return null;
    }

    switch (action.type) {
    
    case "change EducationAddCoures hide": {
        return {
            ...state,
            addCouresShow: false
        };
    }
    case "change EducationAddCoures show": {
        return {
            ...state,
            addCouresShow: true
        };
    }
        default:
            return state;
    }
}
