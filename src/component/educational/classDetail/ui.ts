
import styled from 'styled-components';

const LessonLineTitleWrap = styled.div`
    display: flex;
    justify-content: space-around;
`;
const LessonLineListWrap = styled.ul`
    border-bottom: 1px solid #F1F1F1;
    height: 40px;
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    margin-bottom: -20px;
`;
const LessonLineListLi = styled.li`
    width:88px;
    height:40px;
    background:rgba(238,238,238,1);
    border-radius:6px 6px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LessonLineListLiEmpty = styled.li`
    width:88px;
    height:40px;
`
export{
    LessonLineTitleWrap,
    LessonLineListWrap,
    LessonLineListLi,
    LessonLineListLiEmpty
}