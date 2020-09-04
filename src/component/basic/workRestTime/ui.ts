import styled from "styled-components";


const WorkRestListLeftTitleWrap = styled.div`
    width: 70px;
    height: 60px;
    background:linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,0.45));
    border-radius:10px;
    position: relative;
    margin-right: 30px;
`;
const WorkRestListLeftTitle = styled.div`
    width: 70px;
    height: 60px;
    background:linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1));
    border-radius:10px;
    position: absolute;
    left: 9px;
    top: 0;
    font-size: 16px;
    color:#fff;
    line-height: 60px;
    text-align: center;
    
`;
const WorkRestListRightLessonWrap = styled.div`
    width:210px;
    height:57px;
    background:rgba(246,246,246,1);
    border-radius:10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5px 0;
`;
const WorkRestListRightSign = styled.div`
    width:6px;
    height:36px;
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
    width:94px;
    height:46px;
    background:rgba(30,182,174,0.08);
    border-radius:20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;
const WorkRestListRightTimeText = styled.span`
    font-size: 14px;
    color: #36383F;
    margin-left: 30px;
`;
const WorkRestListRightTimeImg = styled.img`
    width: 18px;
    height: 18px;
    position: absolute;
    left: -9px;
    top: 14px;
`;
export{
    WorkRestListLeftTitleWrap,
    WorkRestListLeftTitle,
    WorkRestListRightLessonWrap,
    WorkRestListRightSign,
    WorkRestListRightText,
    WorkRestListRightTextTop,
    WorkRestListRightTextTwo,
    WorkRestListRightTimeWrap,
    WorkRestListRightTimeText,
    WorkRestListRightTimeImg
}