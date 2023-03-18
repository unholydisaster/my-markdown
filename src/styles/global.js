import { createGlobalStyle } from "styled-components"

const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const GlobalStyle=createGlobalStyle`
  body{
    font-family: Arial, san-serif;
    background-color:#0F1F37;
    width:100%;
    margin:0;
    padding:0;
    display:grid;
  }
`
