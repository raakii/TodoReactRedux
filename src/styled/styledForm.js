import styled from "styled-components";

export const StyledForm = styled.form`
    margin-bottom: 60px;

`;

export const StyledInput = styled.input`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    width: 400px;
    border-radius: 3px;
    margin: 5px;
    padding: 10px;
    
  
    /* here we use the dynamically computed prop */
    padding: ${props => props.size};
`;