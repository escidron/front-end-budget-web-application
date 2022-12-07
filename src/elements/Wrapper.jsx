import React,{useCallback,useRef,useState} from 'react'
import { Header } from './Header';
import styled  from "styled-components";

const Chevron = styled.div`
  border-style: solid;
  border-width: 0.125rem 0.125rem 0 0;
  height: 0.25rem;
  width: 0.25rem;
  color: aliceblue;
  transition: all 0.25s ease-in-out;

  transform: ${(p) => p.direction === "top" && "rotate(-45deg)"};
  transform: ${(p) => p.direction === "right" && "rotate(45deg)"};
  transform: ${(p) => p.direction === "bottom" && "rotate(135deg)"};
  transform: ${(p) => p.direction === "left" && "rotate(-135deg)"};
`;


const Container = styled.div`
border:  ${props => `2px solid ${props.borderColor}` || "2px solid black"};
border-radius:5px;
background-color:${props => props.colorBody || 'white'};
width:${props => props.width || 'auto'};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
  cursor: pointer;
  background-color:${props => props.color || "blue"};
  height:25px;
  padding:5px 10px;
`;

const ContentWrapper = styled.div`
  max-height: ${(p) => `${p.maxHeight}px`};
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
  border-radius:'5px';
`;

const Content = styled.div`
  padding:5px 5px;
  line-height: 1.5;
  margin:0;
`;

export default function Wrapper({children,icon,header,color,colorBody,width}) {
  const [isExpanded, setExpand] = useState(true);
  const [mounted,setMounted] = useState(false)

  const contentRef = useRef();
  
  const contentHeight = isExpanded&&mounted ? contentRef.current.scrollHeight :isExpanded&&!mounted ?'':0;

  console.log(contentHeight)
  const handleExpandToggle = useCallback(() => {
      setExpand(!isExpanded);
      setMounted(true)
    }, [isExpanded]);
    
  return (
    <div>
          <Container borderColor={color} colorBody={colorBody} width={width}>
            <Title onClick={handleExpandToggle} color={color}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-bertween',width:'auto'}}>
                  {icon}
                  <Header style={{marginLeft:'5px'}}>{header}</Header>
                </div>
                <Chevron direction={isExpanded ? "top" : "bottom"} />
            </Title>
            <ContentWrapper maxHeight={contentHeight}>
                <Content ref={contentRef}>
                  {children}
                </Content>
            </ContentWrapper>
          </Container>
    </div>
  )
}

