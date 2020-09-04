import styled from 'styled-components';

const GradeClassStudentWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
`;
const GradeClassStudentListLi = styled.div`
    width:171px;
    height:60px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(213,220,221,1);
    border-radius:30px;
    margin:  10px 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const GradeClassStudentImg = styled.img`
    width:46px;
    height:42px;
    background:rgba(255,255,255,1);
    border-radius:24px;
    margin-bottom: 5px;
`;
const GradeClassStudentText = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
const GradeClassStudentSpan = styled.span`
    font-size:14px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(51,51,51,1);
    line-height:20px;
`;
const GradeClassStudentRightArea = styled.div`
    width:35px;
    height:60px;
    background:#eee;
    display:flex;
    justify-content: center;
    align-items: center;
`;


//课程ui
const WorkRestListRightLessonWrap = styled.div`
    width:168px;
    height:60px;
    background:rgba(246,246,246,1);
    border-radius:10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    
`;
const WorkRestListRightSign = styled.div`
    width:6px;
    height:40px;
    background:rgba(2,205,223,1);
    border-radius:3px;
    position: absolute;
    left: -3px;
    top: 10px;
`;
const WorkRestListRightText = styled.div`
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;
const WorkRestListRightTextTop = styled.span`
    font-size:14px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:14px;
    margin-bottom: 4px;
`;
const WorkRestListRightTextTwo = styled.span`
    font-size:10px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:10px;
`;
const WorkRestListRightTimeWrap = styled.div`
    width:70px;
    height:60px;
    background:rgba(30,182,174,0.08);
    border-radius:30px 0 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;
const WorkRestListRightTimeText = styled.span`
    font-size: 14px;
    color: #36383F;
    margin-left: 15px;
`;
const WorkRestListRightTimeImg = styled.img`
    width: 18px;
    height: 18px;
    position: absolute;
    left: -9px;
    top: 21px;
`;
const TeacherTag = styled.span`
    border:1px solid rgba(29,186,153,1);
    border-radius:6px;
    font-size:12px;
    font-family:Source Han Sans CN;
    color:rgba(29,186,152,1);
    margin-left: 10px;
    font-weight:400;
    padding:0 2px;
`;
const EmptyText = styled.span`
    font-size:14px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(58,67,73,1);
    line-height:17px;
    margin-top:20px;
`;
export {
    GradeClassStudentWrap,
    GradeClassStudentListLi,
    GradeClassStudentImg,
    GradeClassStudentText,
    GradeClassStudentSpan,
    GradeClassStudentRightArea,
    WorkRestListRightLessonWrap,
    WorkRestListRightSign,
    WorkRestListRightText,
    WorkRestListRightTextTop,
    WorkRestListRightTextTwo,
    WorkRestListRightTimeWrap,
    WorkRestListRightTimeText,
    WorkRestListRightTimeImg,
    TeacherTag,
    EmptyText
}