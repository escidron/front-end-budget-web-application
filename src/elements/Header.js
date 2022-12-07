import styled from "styled-components";

export const Header = styled.h1`
margin:0;
padding:0;
font-size:${props => props.size || "18px"};
color: ${props => props.color || "white"};
font-family: "Roboto", Sans-serif;
font-weight: 600;
`;