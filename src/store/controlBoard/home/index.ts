export interface ControlBoardHomeState {
    addDatePlan: boolean,
    bannerDetailToast: boolean
  } 
  
  export type ControlBoardHomeAction =
    | {
      type: 'change addDatePlan hide';
      data: boolean;
    } 
    | {
      type: 'change addDatePlan show';
      data: boolean;
    } | {
        type: 'change bannerDetailToast hide';
        bannerDetailToast: boolean;
      } 
      | {
        type: 'change bannerDetailToast show';
        bannerDetailToast: boolean;
      } 