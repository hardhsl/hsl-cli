import axios from 'axios';
import {objDeepCopy, translateDataToTree, treeToList, arrayUnique} from '@/util/zTreeDataToTree';

axios.defaults.withCredentials = true;

class MeetingReservationServices {


    getSchoolYearList(params: any, successCallBack: any, errorCallback: any): void {
        axios.get(`/api/v1.0/meetingList`, {
            params: {
                ...params
            }
        })
            .then(function(response) {
                if (!response.data.code) {
                    successCallBack(response.data);
                } else {
                    errorCallback(response.data);
                }
            })
            .catch(function(error) {
                errorCallback(error);
            });
    }




}

export default MeetingReservationServices;