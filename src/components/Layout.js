import React from "react"
import { useState } from "react"
import Head from "next/head";
import { BurgerLine,Logo,StyledBurger} from "../styles/Navbar/Navstyles";
import { useCookies } from "react-cookie";
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from "@/styles/Navbar/Sidebar";


const Layout=({children})=>{

    const[open, setOpen]=useState(false)
    const[cookies, setCookies]=useCookies(["access_token"])
    const router = useRouter();
            
    const handleBurgerClick = () => {
      setOpen(!open);
    };

    const logout=()=>{
      setCookies("access_token","")
      window.localStorage.removeItem("userID")
      router.push("/")
      
    }
    const mlogout=()=>{
      setCookies("access_token","")
      window.localStorage.removeItem("userID")
      router.push("/")
      
    }
    const login=()=>{
      router.push("/login")
    }

    const register=()=>{
      router.push("/register")
    }

    const openbar=()=>{
        setOpen(!open)
      }
    return(
        <>
        <Head>
          <title>
          Notes App
          </title>
        </Head>
        <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="/">
          <Logo href="/">Logo</Logo>
          </Navbar.Brand>
          <StyledBurger onClick={handleBurgerClick}>
          <BurgerLine open={open} />
          <BurgerLine open={open} />
          <BurgerLine open={open} />
          </StyledBurger>
        </Container>
        </Navbar>
        <Sidebar open={open}/>
        {children}
        </>
    )
}

export default Layout

