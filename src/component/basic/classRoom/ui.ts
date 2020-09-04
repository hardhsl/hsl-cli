import styled from 'styled-components';

const LocaltionWrap = styled.div`
    height: 60px;
    display:flex;
    align-items: center;
    justify-content: space-around;
`;
const CardIconBottom= styled.div`
	display: flex;
	align-items: center;
    justify-content: flex-end;
    height:60px;
    paddingRight:30px;
`;
const CardIconSpan= styled.span`
	margin: 0 8px;
	cursor: pointer;
	width:30px;
	height:30px;
	background:#ECF2F1;
	border-radius:2px;
	padding: 5px;
	display: flex;
	align-items: center;
    justify-content: center;
`;
const FloorLouImg = styled.img`
    width:18px;
    margin-right: 10px;
`;
const FLexWrap = styled.div`
    display: flex;
    align-items: center;
`;
const styles = {
    HeaderRow:{
        height: '60px',
        borderBottom:'1px solid rgba(210,217,219,1)'
    },
    BorderBottom:{
        borderBottom:'1px solid rgba(210,217,219,1)'
    },
    BorderLeft:{
        borderLeft:'1px solid rgba(210,217,219,1)'
    }
}

export {
    styles,
    LocaltionWrap,
    CardIconBottom,
    CardIconSpan,
    FloorLouImg,
    FLexWrap
}