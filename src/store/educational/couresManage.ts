
export interface EducationCouresManageState {
    addCouresShow: boolean 
  } 
  
  export type EducationCouresManageAction =
    | {
      type: 'change EducationAddCoures hide';
      data: boolean;
    } 
    | {
      type: 'change EducationAddCoures show';
      data: boolean;
    } 