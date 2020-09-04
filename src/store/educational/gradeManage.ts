export interface EducationGradeManageState {
    addGradeShow: boolean ,
    gradeListData: Array<object>,
    gradeFromData: Object ,
    gradeAddFromShow: boolean,
    gradeDetailBindFromShow: boolean,
  } 
  
  export type EducationGradeManageAction =
    | {
      type: 'change EducationAddGrade hide';
      data: boolean;
    } 
    | {
      type: 'change EducationAddGrade show';
      data: boolean;
    } 
    | {
        type: 'grade EducationGradeListData change';
        data: Array<object>;
    } 
    | {
        type: 'grade EducationGradeFromData change';
        data: Object;
    } 
    | {
      type: 'change GradeDetailBindFrom hide';
      data: boolean;
    } 
    | {
      type: 'change GradeDetailBindFrom show';
      data: boolean;
    } 
  