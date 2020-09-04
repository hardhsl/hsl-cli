import styled from 'styled-components';

const LineSpan = styled.span`
    height: 1px;
    width: 100%;
    background: #F1F1F1;
    margin-bottom: 10px;
`;
const ClassSexDivideRateWrap =  styled.div`
    width:100%;
    height: 34px;
    background: #E5E5E5;
    border-radius: 17px;
    display:flex;
    justify-content: apace-butween;
    overflow:hidden;
    position: relative;
`;
const ClassSexDivideBoy = styled.div`
    height: 100%;
    background:linear-gradient(270deg,rgba(2,205,223,1),rgba(19,156,210,1));
    line-height: 34px;
    color: #fff;
    text-indent: 15px;
    transform: skew(-30deg, 0);
    margin-left: -10px;
`;
const ClassSexDivideGirl = styled.div`
    height: 100%;
    background:linear-gradient(270deg,rgba(244,91,106,1),rgba(248,198,138,1));
    line-height: 34px;
    color: #fff;
    text-indent: 15px;
    text-align: right;
    padding-right: -30px;
    margin-right: -30px;
    transform: skew(-30deg, 0);
`;
const DivideClassList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(213,220,221,1);
    padding: 10px 10px;
    margin: 10px;
    border-radius:10px;
    height:110px;
    cursor:pointer;
`;

const WorkRestListRightLessonWrap = styled.div`
    width:156px;
    height:60px;
    background:rgba(246,246,246,1);
    border-radius:10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    cursor: pointer;
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
    font-weight:400;
    line-height:14px;
    margin-bottom: 4px;
`;
const WorkRestListRightTextTwo = styled.span`
    font-size:10px;
    font-weight:400;
    // color:rgba(102,102,102,1);
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
    // color: #36383F;
    margin-left: 15px;
`;
const WorkRestListRightTimeImg = styled.img`
    width: 18px;
    height: 18px;
    position: absolute;
    left: -9px;
    top: 21px;
`;

const Styles = {
    divideClassList:{
        border: '1px solid rgba(213,220,221,1)',
        padding: '10px 8px',
        margin: '5px',
        borderRadius:'10px',
        height:'110px',
        cursor:'pointer',
    },
    divideClassImg:{
        width: '48px',
        height: '48px'
    },
    ClassSexSpanBoy:{
        transform: 'skew(30deg, 0)'
    },
    ClassSexSpanGirl:{
        transform: 'skew(30deg, 0)',
        position: 'absolute',
        right:'20px'
    },
    SelectDivideClassTrue:{
        color:'#fff',
        background:'linear-gradient(270deg,rgba(29,180,152,.8),rgba(41,220,213,.8))',
    },
    SelectDivideClassFalse:{
        color:'#fff',
        background:'linear-gradient(90deg,rgba(248,198,138,.8),rgba(244,91,106,.8))',
    },
}

export{
    Styles,
    LineSpan,
    ClassSexDivideRateWrap,
    ClassSexDivideBoy,
    ClassSexDivideGirl,
    DivideClassList,
    WorkRestListRightLessonWrap,
    WorkRestListRightSign,
    WorkRestListRightText,
    WorkRestListRightTextTop,
    WorkRestListRightTextTwo,
    WorkRestListRightTimeWrap,
    WorkRestListRightTimeText,
    WorkRestListRightTimeImg,
}