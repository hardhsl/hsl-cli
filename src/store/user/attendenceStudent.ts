

export interface EvaluateList {
  id: string;
  name: string;
}
export interface StudentAttendenceState {
    ImportStudentAttend: boolean,
    StudentAttendAddEdit: boolean,
    BatchSetEvaluateList: EvaluateList[],
    EvaluateEditObj:object
  } 
  
  export type StudentAttendenceAction =
    | {
      type: 'change ImportStudentAttend hide';
      data: boolean;
    } 
    | {
      type: 'change ImportStudentAttend show';
      data: boolean;
    } | {
      type: 'change StudentAttendAddEdit hide';
      data: boolean;
    } 
    | {
      type: 'change StudentAttendAddEdit show';
      data: boolean;
    } | {
      type: 'change BatchSetEvaluateList data';
      data: EvaluateList[];
    }
    | {
      type: 'change EvaluateEditObj data';
      data: object;
    };