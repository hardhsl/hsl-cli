import {DivideClassAction, DivideClassState} from '@/store/educational/divideClass';

const initialState :DivideClassState = {
    VolDivideClass:false
}

export default function reducer(
    state: DivideClassState | null | undefined = initialState,
    action: DivideClassAction,
) :DivideClassState | null {
    if (!state) {
        return null;
    }
    switch (action.type){
        case "change VoluntarilyDivideClass hide": {
            return {
                ...state,
                VolDivideClass: false
            };
        }
        case "change VoluntarilyDivideClass show": {
            return {
                ...state,
                VolDivideClass: true
            };
        }
        default:
            return state;
    }
}