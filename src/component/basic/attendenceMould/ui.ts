import styled from 'styled-components';

const CheckWorkWrap = styled.div`
    min-height:800px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
`;
const CheckWorkHeader = styled.div`
    border-bottom: 1px solid #f1f1f1;
    width: 100%;
    padding: 15px 15px 0 15px;
`;
const CheckWorkHeaderTitle = styled.p`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
const CheckWorkHeaderTitleTxt = styled.span`
    font-size:17px;
    font-weight:bold;
    color:rgba(64,68,68,1);
`;
const CheckWorkHeaderIconWrap = styled.div`
    width:30px;
    height:30px;
    background:rgba(236,242,241,1);
    border-radius:4px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CheckWorkHeaderLine = styled.p`
    font-size:14px;
    font-weight:400;
    color:rgba(64,68,68,1);
`;
const CheckWorkContentMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const CheckWorkMainText = styled.span`
    font-size:18px;
    font-weight:400;
    color:rgba(255,255,255,1);
    background:linear-gradient(270deg,rgba(2,205,223,1) 0%, rgba(20,156,210,1) 100%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    margin: 20px 0 10px 0;
    text-align:center;
`;
export {
    CheckWorkWrap,
    CheckWorkHeader,
    CheckWorkHeaderTitle,
    CheckWorkHeaderTitleTxt,
    CheckWorkHeaderIconWrap,
    CheckWorkHeaderLine,
    CheckWorkContentMain,
    CheckWorkMainText
}