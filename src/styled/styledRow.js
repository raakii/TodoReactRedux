import styled from "styled-components";


export  const  StyledRow = styled.tr`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: grey;
    font-size: 1em;
    
    order-radius: 3px;
    border-bottom: 1px solid #ddd;
    &:hover {
    background-color: #f5f5f5;
}
`;
