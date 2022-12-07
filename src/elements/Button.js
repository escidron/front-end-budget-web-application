import styled from "styled-components";

export const Button = styled.button`
height: auto;
width: auto;
border-radius: 4px;
border:  ${props => props.border || 'none'};
background-color: ${props => props.backgreoundColor || "green"};
color: ${props => props.color || "black"};
font-family: "Roboto", Sans-serif;
font-weight: 540;
font-size: 18px;
padding: 5px 15px 5px 15px;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
cursor: pointer;
&:hover {
    opacity:0.8
`;