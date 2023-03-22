import { BurgerLine, ItemContainer, LinkContainer, Links, Logo, Navbar, NavItem, NavLinks, StyledBurger } from '@/styles/navbarstyles/navbar';
import React, { useState } from 'react';


const NavbarComponent = () => {
    const[open, setOpen]=useState(false)

    const handleBurgerClick = () => {
      setOpen(!open);
    };    

    return (
      <Navbar>
        <Logo href="/">Logo</Logo>
        <NavLinks open={open}>
          <LinkContainer>
          <ItemContainer>
          <NavItem>
            <Links href="/">About</Links>
          </NavItem>
          <NavItem>
            <Links href="/">Services</Links>
          </NavItem>
          <NavItem>
            <Links href="/login">Sing In</Links>
          </NavItem>
          <NavItem>
            <Links href="/register">Sign Up</Links>
          </NavItem>
          </ItemContainer>
          </LinkContainer>
        </NavLinks>
        <StyledBurger onClick={handleBurgerClick}>
          <BurgerLine open={open} />
          <BurgerLine open={open} />
          <BurgerLine open={open} />
        </StyledBurger>
      </Navbar>
    );
  };
  
  export default NavbarComponent;