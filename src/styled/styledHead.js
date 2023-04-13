import styled from "styled-components";

export const StyledHead = styled.thead`
background: ${props => props.primary ? "palevioletred" : "white"};
color: black;
display: flex;
margin: auto;
font-size: 2em;
`;