export interface EducationClassManageState {
    addClassShow: boolean ,
    importClassExcel: boolean
  } 
  
  export type EducationClassManageAction =
    | {
      type: 'change EducationClassManage hide';
      data: boolean;
    } 
    | {
      type: 'change EducationClassManage show';
      data: boolean;
    } 
    | {
      type: 'change ImportClassExcel hide';
      data: boolean;
    } 
    | {
      type: 'change ImportClassExcel show';
      data: boolean;
    } 