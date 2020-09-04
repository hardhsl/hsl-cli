import styled from "styled-components";

const PageCardDIvWrap = styled.div`
  overflow: hidden;
  width: 100%;
  padding-bottom:20px;
  background:#fff;
  margin-bottom: 10px;
  border-radius: 5px;
`;
const PageCardDIvWrapHeader = styled.div`
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom:20px;
`;
const CardWrap = styled.div`
    width: 550px;
`;
const CardTopWrap = styled.div`
  padding: 10px 10px;
  border-radius: 10px;
  background: #fff;
  margin-top: 20px;
  color: #fff;
  height: 222px;
  display: flex;
  align-items: center;
`;
const CardTeacherTag = styled.span`
    border:1px solid rgba(255,255,255,1);
    border-radius:6px;
    padding: 0 2px;
    font-size: 12px;
`;
const CardAvatar = styled.img`
    width:169px;
    height:190px;
    margin-right: 20px;
`;
const CardTextTitle = styled.p`
	font-size: 16px;
	color: #fff;
	line-height: 20px;
`;
const CardTextContent = styled.p`
	font-size: 12px;
	color: #fff;
	line-height: 15px;
`;

const CardContentFlex= styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const CardIconSpan= styled.span`
  margin: 0 8px;
  cursor: pointer;
  width:30px;
  height:30px;
  background:rgba(255,255,255,0.2);
  border-radius:2px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardHeaderWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;
const FlexWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export {
    CardWrap,
	CardTextTitle,
	CardTextContent,
	CardContentFlex,
	CardIconSpan,
    CardHeaderWrap,
    PageCardDIvWrap,
    PageCardDIvWrapHeader,
    FlexWrap,
    CardTopWrap,
    CardAvatar,
    CardTeacherTag
}