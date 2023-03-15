import styled from "styled-components"
import Link from 'next/link'

const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const Navcontainer=styled.div`{
background:black;
position:relative;
width:100vw;
height:50px;
color:white;

${mq[0,1]}{
    left:0px;
    background:blue;
    position:absolute;
    top:0px;
    width:100%;
    height:50vh;
    color:white;
    padding:20px;
    transform:${({open})=>open? 'translateX(0)':'translateX(-200%)'} ;
    transition-timing-function: ${({open})=>open?"ease-out" :"ease-in"} ;
    transition: 0.5s;
    opacity:85%;
    z-index:30; 
}
}
`

export const Shadow=styled.div`
${mq[0,1]}{
    background:black;
    position:absolute;
    width:100%;
    height:100vh;
    transform:${({open})=>open? 'translateX(0)':'translateX(-400%)'} ;
    transition-timing-function: ${({open})=>open?"ease-out" :"ease-in"} ;
    transition: 0.1ms;
    display:${({open})=>open? 'block':'none'} ;
    opacity:40%;
    z-index:20;  
}
`
export const Links=styled.ul`{
position:absolute;
left:10%;
width:40%;
top:-10px;
list-style-type:none;
display:grid;
grid-template-columns: repeat(5, 1fr);

${mq[0,1]}{
position:absolute;
top:100px;
left:60px;
list-style-type:none;
margin:0;
padding:0;
z-index:30;
grid-template-columns:1fr;
}
}
`
export const Linkli=styled.li`{
font-family:Helvetica, verdana, sans-serif;
font-size:18px;

${mq[0,1]}{
font-family:Helvetica, verdana, sans-serif;
font-size:22px;
margin-bottom: 20px;
font-weight:500;
z-index:30;
}
}
`
export const Linka=styled(Link)`{
text-decoration:none;
color:white;
font-weight:500;
display:block;

${mq[0,1]}{
    text-decoration:none;
    color:white;
    font-weight:500;
    display:block;
    width:200px;
    z-index:30;
}
}
`

export const Links2=styled.ul`{
    position:absolute;
    left:60vw;
    width:30vw;
    top:-15px;
    list-style-type:none;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    ${mq[0,1]}{
    position:absolute;
    top:10px;
    left:80vw;
    list-style-type:none;
    margin:0;
    gap:20px;
    padding:0;
    grid-template-columns: repeat(2, 1fr);
    }
    }
    `
    export const Linkto=styled.li`{
        font-family:Helvetica, verdana, sans-serif;
        font-size:22px;
        
        ${mq[0,1]}{
        font-family:Helvetica, verdana, sans-serif;
        font-size:16px;
        margin-bottom: 22px;
        }
        }
        `

        export const Button=styled.button`{
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
            }
            `
            export const MButton=styled.button`{
                position:absolute;
                font-family:Helvetica, verdana, sans-serif;
                left:85%;
                font-size:22px;
                top:8px;
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
                top:85%;
                left:12%;
                z-index:20;
                }
                }
                `