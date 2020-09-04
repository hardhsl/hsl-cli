import styled from "styled-components";
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
const CardHeaderWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;
const CardTextTitle = styled.p`
	font-size: 16px;
	color: #fff;
	line-height: 20px;
	text-indent: 10px;
`;
const CardTextContent = styled.p`
	font-size: 14px;
	text-indent: 10px;
	font-family:Source Han Sans CN;
	font-weight:400;
	color:rgba(255,255,255,1);
	line-height:17px;
`;

const CardIconBottom= styled.div`
	display: flex;
	align-items: center;
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
`;

export {
	 CardWrap,
	 CardTextTitle,
	 CardTextContent,
	 CardIconBottom,
	 CardIconSpan,
	 CardHeaderWrap
}