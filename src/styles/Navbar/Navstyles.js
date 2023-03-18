import styled from "styled-components"


const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const Lq=breakpoints.map(
    bp=>`@media screen and (min-width:${bp}px)`
)


export const Logo = styled.a`
font-size: 1.5rem;
font-weight: bold;
text-decoration: none;
color: #fff;
`;

export const StyledBurger = styled.div`
${mq[1]}{
    width: 2rem;
    height: 2rem;
    top: 15px;
    right:5%;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;  
    z-index: 40;
}

${Lq[1]}{
  display: none;
}
`;

export const BurgerLine = styled.div`
width: 2rem;
height: 0.25rem;
border-radius: 10px;
background-color: ${({open}) => open ? 'white' : 'white'};
font-size: 16px;
transform-origin: 1px;
transition: all 0.3s linear;
z-index: 20;

&:nth-child(1) {
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
}

&:nth-child(2) {
  transform: ${({ open }) =>
    open ? "translateX(-100%)" : "translateX(0)"};
  opacity: ${({ open }) => (open ? 0 : 1)};
}

&:nth-child(3) {
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
}
`;

  

  



            
            