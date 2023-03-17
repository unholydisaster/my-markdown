import { createGlobalStyle } from "styled-components"

const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const GlobalStyle=createGlobalStyle`
  /* Works on Firefox */
  * {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #1D59B4;
  }
  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    background: #1D59B4;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #1D59B4;
    border-radius: 30px;
    border: 2px solid #1D59B4;
  }
  body{
    font-family: Arial, san-serif;
    background-color:#0F1F37;
    width:100%;
    margin:0 auto;
    padding:0;
    min-height:100vh;
    display:grid;
    grid-template-rows:auto 1fr auto;
  ${mq[1]}{
    min-height:100vh;
    overflow-x:hidden;
    overflow-y:auto;
  }
  }
`
