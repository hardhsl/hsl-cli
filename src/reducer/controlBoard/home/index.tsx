import { ControlBoardHomeState,ControlBoardHomeAction  } from '@/store/controlBoard/home';

const initialState: ControlBoardHomeState = {
    addDatePlan: false,
    bannerDetailToast: false
}

export default function reducer(
    state: ControlBoardHomeState | null | undefined = initialState,
    action: ControlBoardHomeAction,
): ControlBoardHomeState | null {
    if (!state) {
        return null;
    }

    switch (action.type) {
    
    case "change addDatePlan hide": {
        return {
            ...state,
            addDatePlan: false
        };
    }
    case "change addDatePlan show": {
        return {
            ...state,
            addDatePlan: true
        };
    }
    case "change bannerDetailToast hide": {
        return {
            ...state,
            bannerDetailToast: false
        };
    }
    case "change bannerDetailToast show": {
        return {
            ...state,
            bannerDetailToast: true
        };
    }
        default:
            return state;
    }
}