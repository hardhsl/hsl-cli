export interface DivideClassState {
    VolDivideClass: boolean
  } 
  
  export type DivideClassAction =
    | {
      type: 'change VoluntarilyDivideClass hide';
      data: boolean;
    } 
    | {
      type: 'change VoluntarilyDivideClass show';
      data: boolean;
    } 