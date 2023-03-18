import styled from "styled-components"
import Link from 'next/link'

const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const Lq=breakpoints.map(
    bp=>`@media screen and (min-width:${bp}px)`
)

export const NavbarContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #333;
color: #fff;
height:80px;
width:100%;

${Lq[1]}{
  flex-direction: row;
}
${mq[1]}{
    height:80px;
    background-color:black;
  }
  
`;

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


export const Links2=styled.ul`
    position:relative;
    left:60vw;
    width:30vw;
    list-style-type:none;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    ${mq[1]}{
    position:relative;
    top:10px;
    left:80vw;
    list-style-type:none;
    margin:0;
    gap:20px;
    padding:0;
    grid-template-columns: repeat(2, 1fr);
    }
    `

export const Button=styled.button`
font-family:Helvetica, verdana, sans-serif;
font-size:22px;
width:120px;
height:35px;
background-color:green;
border:1px solid green;
border-radius:5px;
color:white;

${mq[0,1]}{
font-family:Helvetica, verdana, sans-serif;
font-size:16px;
width:90px;
height:35px;
}
`

const LinksWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    ${mq[1]} {
      display: ${({open}) => open ? 'flex' : 'none'};
      flex-flow: column nowrap;
      background-color: #0d2538;
      position: fixed;
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 80px;
      height: 100vh;
      width: 100%;
      gap:20px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
      z-index: 30;
    }
  `

const NavLinks = ({open}) => {
    return (
      <LinksWrapper open={open}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </LinksWrapper>
    )
  }

export default NavLinks
  

  



            
            