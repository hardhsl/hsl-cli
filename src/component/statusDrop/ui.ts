import styled, {css} from "styled-components";

interface StatusProps {
    type: string;
}

const Status = styled.span`
font-size:14px;
font-weight:400;
  small {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
  }
${
    (props: StatusProps): any => {
        return css`
            color: ${props.type};
            small {
              background-color: ${props.type};
            }
        `;
    }
}
`;
export {
    Status
};