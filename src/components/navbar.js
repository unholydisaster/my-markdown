import { BurgerLine, Logo, Navbar, NavItem, NavLinks, StyledBurger } from '@/styles/navbarstyles/navbar';
import Link from 'next/link';
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
            <Link href="/">About</Link>
          </NavItem>
          <NavItem>
            <Link href="/">Services</Link>
          </NavItem>
          <NavItem>
            <Link href="/login">Sing In</Link>
          </NavItem>
          <NavItem>
            <Link href="/register">Sign Up</Link>
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