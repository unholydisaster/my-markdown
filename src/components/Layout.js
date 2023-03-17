import React from "react"
import { useState } from "react"
import Head from "next/head";
import { BurgerLine, Button,Links2, Logo, NavbarContainer, NavLink, NavLinks, StyledBurger} from "../styles/Navbar/Navstyles";
import { useCookies } from "react-cookie";
import { useRouter } from 'next/router';

const Layout=({children})=>{

    const[open, setOpen]=useState(false)
    const [cookies, setCookies]=useCookies(["access_token"])
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

        <NavbarContainer>
                  <Logo href="/">Logo</Logo>
                  <StyledBurger onClick={handleBurgerClick}>
                    <BurgerLine open={open} />
                    <BurgerLine open={open} />
                    <BurgerLine open={open} />
                  </StyledBurger>
                  <NavLinks open={open}/>
                </NavbarContainer>
                {children}
        </>
    )
}

export default Layout

/*
<Styledburger open={open} onClick={openbar}>
<Bugers open={open}  className="path1"/>
<Bugers open={open}  className="path2"/>
<Bugers open={open}  className="path3"/>
</Styledburger>
<Navcontainer open={open}>
<Links>
  <Linkli><Linka href="/" passHref>Home</Linka></Linkli>
  <Linkli><Linka href="/" passHref>Essays</Linka></Linkli>
  <Linkli><Linka href="/" passHref>Projects</Linka></Linkli>
  <Linkli><Linka href="/" passHref>Bio</Linka></Linkli>
</Links>
{cookies.access_token ?
   (
     <MButton onClick={mlogout}>Logout</MButton>
   ):(<div></div>)
  }
</Navcontainer>
*/