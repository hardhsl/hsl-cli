import  styled from 'styled-components';
const CouresListWrap = styled.div`
    height:710px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(241,241,241,1);
    border-radius:10px;
`;
const CouresListTop = styled.div`
    width: 100%;
    height: 120px;
    padding: 20px 15px;
    border-bottom: 1px solid #F1F1F1;
`;
const CouresListHeaderTitle = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CouresListCouresName = styled.span`
    font-size:18px;
    font-weight:bold;
    color:rgba(64,68,68,1);
`;
const CouresListCouresType = styled.span`
    font-size:14px;
    font-weight:400;
    color:#404444;
`;
const CouresListHeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;
const CouresListHeaderText = styled.div`
    display: flex;
    flex-direction: column;
`;
const CardIconSpan= styled.span`
	margin: 0 8px;
	cursor: pointer;
	width:30px;
    height:30px;
    background:rgba(236,242,241,1);
    border-radius:4px;
	padding: 5px;
	display: flex;
	align-items: center;
    justify-content: center;
`;
const CardIconBottom= styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
const CouresListContentMain = styled.div`
    padding: 10px 20px 10px 5px;
    overflow: auto;
`
export {
    CouresListWrap,
    CouresListTop,
    CouresListHeaderTitle,
    CouresListCouresName,
    CouresListCouresType,
    CouresListHeaderContent,
    CouresListHeaderText,
    CardIconSpan,
    CardIconBottom,
    CouresListContentMain
}