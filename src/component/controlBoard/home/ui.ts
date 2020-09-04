import styled, { css } from 'styled-components';


interface backgroundProps {
    background: string;
}
const TopLeftSignWrap = styled.div`
    display: flex;
    justify-content: space-between;
    
`;
const TopLeftSign = styled.div`
    width:24%;
    height:100px;
    color: #fff;
    padding: 20px 0px 20px 30px;
    border-radius: 10px;
    ${
        (props: backgroundProps): any => {
            return css`
                background:url(${props.background}) no-repeat center center ;
                background-size: 100% 100%;
                h5{
                    color: #fff;
                    font-size: 18px;
                    font-weight: 400;
                    margin-bottom:0;
                };
                h4{
                    color: #fff;
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 1.5;
                    span{
                        font-size:16px;
                    }
                }
            `;
        }
    }
`;
const TopRightSignWrap = styled.div`
    width: 100%;
    background:rgba(255,255,255,1);
    border-radius:10px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        width: 56px;
        height: 80px;
        text-align: center;
        display: flex;
        flex-direction:column;
        align-items: center;
        img{
            width:50px;
            height:50px;
            margin-bottom:10px;
        }
        span{
            font-size:14px;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:14px;
        }
    }
    
`;
const ImgSmallCarousel = styled.div`
    width: 186px;
    height: 444px;
    display: flex;
    align-items: center;
`
const CarouselImgSize = styled.img`
    width: 844px;
    height: 444px;
    diaplay: block;
`;
const ScrollRight = styled.div`
    display: flex;
    flex-direction: column;
    height: 444px;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-bottom: -17px;
    div{
        width: 100%;
        height: 95px;
        margin-bottom: 17px;
        border: 1px solid #fff;
        img{
            width: 100%;
            height: 75px;
        }
    }
`
const Styles = {
    SpaceBetween:{
        display:'flex',
        justifyContent: 'space-between',
        padding: '0 25px'
    }
}

export {
    TopLeftSignWrap,
    TopLeftSign,
    TopRightSignWrap,
    CarouselImgSize,
    ScrollRight,
    Styles
}