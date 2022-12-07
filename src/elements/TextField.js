import styled from "styled-components";

export const TextField = styled.input`
padding: 10px 15px;
color: ${props => props.inputColor || "black"};
border-radius: 4px; 
border:none;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
font-family: "Roboto", Sans-serif;
font-weight: 500;
font-size: 15px;
&:focus {
    outline: none;
    box-shadow: 0px 0px 2px blue;
}
`;