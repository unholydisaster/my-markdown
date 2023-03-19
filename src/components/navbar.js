import { BurgerLine, Logo, Navbar, NavItem, NavLinks, StyledBurger } from '@/styles/navbarstyles/navbar';
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
          <NavItem>
            <a href="/">About</a>
          </NavItem>
          <NavItem>
            <a href="/">Services</a>
          </NavItem>
          <NavItem>
            <a href="/login">Sing In</a>
          </NavItem>
          <NavItem>
            <a href="/register">Sign Up</a>
          </NavItem>
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