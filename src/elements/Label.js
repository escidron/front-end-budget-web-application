import styled from "styled-components";

export const Label = styled.label`
font-size:${props => props.size || "15px"};
color: ${props => props.color || "black"};
font-family: "Roboto", Sans-serif;
font-weight: 450;
cursor:${props => props.cursor || "default"};
`;