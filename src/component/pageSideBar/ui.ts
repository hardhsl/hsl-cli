import styled from "styled-components";

const SideBarIcon = styled.img.attrs(props => ({
    src: props.src,
    alt: props.alt
}))`
width: 24px;
margin-right: 10px;

`;

export {
    SideBarIcon
};