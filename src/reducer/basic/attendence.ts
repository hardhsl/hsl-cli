import { AttendenceState, AttendenceAction } from '@/store/basic/attendence';


const initialState :AttendenceState = {
    addAttendenceMouldShow: false
}

export default function reducer(
    state: AttendenceState | null | undefined = initialState,
    action: AttendenceAction,
) :AttendenceState | null {
    if (!state) {
        return null;
    }
    switch (action.type){
        case "change addAttendenceMould hide": {
            return {
                ...state,
                addAttendenceMouldShow: false
            };
        }
        case "change addAttendenceMould show": {
            return {
                ...state,
                addAttendenceMouldShow: true
            };
        }
        default:
            return state;
    }
}