export interface SchoolYearListItem {
  id: number;
  name: string;
  date: string;
  num: string;
  type: string
}
export interface AddSchoolYearData {
  schoolYearName: string;
  startTime: string;
  endTime: string;
  schoolYearType: string;
  startTime2?: string;
  endTime2?: string;
  workRestList: string[];
}
export interface BasicSchoolYearState {
  data: any;
  workRestShow: boolean ;
  list: SchoolYearListItem[];
  total: number;
  name: string;
  page: number;
  limit: number;
  addSchoolYearObj: AddSchoolYearData;
} 

export type BasicSchoolYearAction =
  | {
    type: 'change BasicSchoolYear data';
    data: any;
  } 
  | {
    type: 'change BasicWorkRest hide';
    workRestShow: boolean;
  } 
  | {
    type: 'change BasicWorkRest show';
    workRestShow: boolean;
  } 
  | {
    type: 'change SchoolYearList data';
    list: SchoolYearListItem[];
    total: number;
    name: string;
    page: number;
    limit: number;
  } 
  | {
    type: 'add SchoolYearObj data';
    addSchoolYearObj: AddSchoolYearData;
  } 

