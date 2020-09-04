import styled from "styled-components";

const PageSider = styled.aside`
    width: 250px;
    flex: 0 0 250px;
    margin-right: 30px;
    background-color: #1C2629;
    border-radius: 5px;
    border: 1px solid rgba(218, 225, 228, 1);
    transition: .5s;
    min-height: 100vh;
`;

const PageSiderMenuWrapper = styled.div`
width: 100%;
`;

const PageSiderMenuHeader = styled.div`
height: 49px;
border-bottom: 1px solid rgba(218, 225, 228, 1);
`;

const PageSiderMenuTitle = styled.h1`
line-height:60px;
margin: 0;
font-size: 18px;
padding-left: 74px;
font-weight: normal;
`;

export {
    PageSider as PageSided,
    PageSiderMenuHeader,
    PageSiderMenuWrapper,
    PageSiderMenuTitle
};