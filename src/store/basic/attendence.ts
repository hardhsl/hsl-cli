export interface AttendenceState {
    addAttendenceMouldShow: boolean 
  } 
  
  export type AttendenceAction =
    | {
      type: 'change addAttendenceMould hide';
      data: boolean;
    } 
    | {
      type: 'change addAttendenceMould show';
      data: boolean;
    } 