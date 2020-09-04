import {WorkRestAction, WorkRestState} from '@/store/basic/workRest';

const initialState :WorkRestState = {

}

export default function reducer(
    state: WorkRestState | null | undefined = initialState,
    action: WorkRestAction,
) :WorkRestState | null {
    if (!state) {
        return null;
    }
    switch (action.type){
       
        default:
            return state;
    }
}