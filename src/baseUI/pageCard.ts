import styled from "styled-components";

// 模块标准样式
const PageCardDIvWrap = styled.div`
  overflow: hidden;
  width: 100%;
  background:#fff;
  border-radius: 5px;
`;
const PageCardDIvWrapHeader = styled.div`
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 10px;
`;
const PageCardDIvRightImg = styled.img`
  width: 30px;
  height: 20px;
`;
const PageCardDIvWrapMainWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`;
const PageCardDIvWrapMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    align-content:flex-start;
    padding:0 10px
`;
// 分页靠右展示

const PaginationFloatRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;




const PageCardContentText = styled.span`
  writing-mode: vertical-lr;
  writing-mode: tb-lr;
  font-size:14px;
  padding: 10px 5px 5px;
  border:1px solid #12A0D3;
  line-height: 17px;
  margin-right:75px 0;
  height:70px;
  text-align: center;
  color: #12A0D3;
  border-radius: 8px;
  letter-spacing:8px;
  display:inline-block;
`;
const PageCardContentLine = styled.p`
  font-size: 14px;
  line-height:20px;
`;
const AddWorkRestWrap = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 500px;
  min-height: 100vh;
  box-shadow: 3px 0px 15px 10px #eee; 
  background: #fff;
  overflow:scroll;
`;
const CardWrap = styled.div`
  padding: 10px 10px;
  border-radius: 10px;
  background: #fff;
  margin-top: 20px;
  color: #fff;
  height: 188px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const CardTextTitle = styled.p`
	font-size: 16px;
	color: #fff;
	line-height: 20px;
`;
const CardTextContent = styled.p`
	font-size: 14px;
	color: #fff;
	line-height: 15px;
	text-indent: 10px;
`;

const CardIconBottom= styled.div`
  display:flex;
  justify-content: flex-end;
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
  background:rgba(236,242,241,1);
  .img{
    width:16px;
    height:16px;
  }
`;
const AbsoluteComponentWrap = styled.div`
  position: absolute;
  top:0;
  right:0;
  width: 500px;
  box-shadow:0px 0px 16px 0px rgba(72,91,110,0.53);
  background: #fff;
  z-index: 1000;
`;
const AbsoluteComponentHeader = styled.div`
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    background: #F5F8F8;
    border-bottom: 1px solid #f1f1f1;
    color: #272B2B;
`;
const AbsoluteComponentFooter = styled.div`
    height: 50px;
    line-height: 50px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 16px 0px rgba(72,91,110,0.17);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const AbsoluteComponentMain = styled.div`
    height: calc(100vh - 100px);
    padding: 20px;
    overflow: auto;
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
// 分页外壳
const BottomPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;
// 导入图片展示
const ImportImgShowDIv = styled.img`
  width: 59px;
  height: 62px;
`;
export {
  PageCardDIvWrap,
  PageCardDIvWrapHeader,
  PageCardDIvWrapMain,
  PageCardDIvRightImg,
  PageCardDIvWrapMainWrap,
  PaginationFloatRight,

  PageCardContentText,
  PageCardContentLine,
  AddWorkRestWrap,
  CardWrap,
  CardTextTitle,
  CardTextContent,
  CardIconBottom,
  CardIconSpan,
  AbsoluteComponentWrap,
  AbsoluteComponentHeader,
  AbsoluteComponentFooter,
  AbsoluteComponentMain,
  CardHeaderWrap,
  FlexWrap,
  BottomPagination,
  ImportImgShowDIv
}