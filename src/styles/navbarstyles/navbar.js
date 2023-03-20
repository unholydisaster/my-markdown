import Link from 'next/link';
import styled from 'styled-components';
import { lq, mq } from '../signin_signup/signup';


export const Navbar = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width:100vw;
  height:70px;
  

  ${mq[1]}{
    width:100vw;
    height:50px;
    
  }
  
`;

export const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  ${mq[1]}{
    position:relative;
    left:20%;
    font-size:24px;
    top:10px;
    style:none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;

 ${mq[1]}{
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        flex-direction: column;
        align-items: center;
        position:absolute;
        left:0;
        top:46px;
        width: 100%;
        height:100%;
        background-color: #333;
        padding: 10px;
        z-index:999;
        
      }
  }
`;

export const NavItem = styled.li`
  margin-left: 10px;

  ${mq[1]}{
    margin: 10px 0;
  }
`;


export const StyledBurger = styled.div`
${mq[1]}{
    width: 1.8rem;
    height: 1.8rem;
    position:absolute;
    top: 15px;
    left:10px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;  
    z-index: 40;
}

${lq[1]}{
  display: none;
}
`;

export const BurgerLine = styled.div`
width: 1.8rem;
height: 0.25rem;
border-radius: 10px;
background-color: ${({open}) => open ? 'white' : 'white'};
font-size: 20px;
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


