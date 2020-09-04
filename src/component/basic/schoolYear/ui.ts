import styled, {css} from "styled-components";
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
	font-size: 24px;
	color: #fff;
	line-height: 20px;
	text-indent: 10px;
`;
const CardTextContent = styled.span`
	font-size: 14px;
	color: #fff;
	line-height: 10px;
	text-indent: 10px;
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
const AddSchoolYearWrap = styled.div`
	padding: 10px 10px;
	border-radius: 10px;
	background: #fff;
	margin-top: 20px;
	color: #fff;
`
// 学年详情
const SchoolYearDetailWrap = styled.div`
	padding-top: 30px;
`;
const SchoolYearDetailTitle = styled.p`
	font-size:24px;
	font-weight:bold;
	color:rgba(64,68,68,1);
`;
const SchoolYearDetailLine = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;
const SchoolYearDetailText = styled.span`
	font-size:14px;
	font-weight:400;
	color:rgba(64,68,68,1);
	margin-right: 40px;
`;
export {
	 CardWrap,
	 CardTextTitle,
	 CardTextContent,
	 CardIconBottom,
	 CardIconSpan,
	 CardHeaderWrap,
	 AddSchoolYearWrap,
	 SchoolYearDetailWrap,
	 SchoolYearDetailTitle,
	 SchoolYearDetailLine,
	 SchoolYearDetailText
}