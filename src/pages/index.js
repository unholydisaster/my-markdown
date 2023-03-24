import { HomeContainer, HomeWrapper, Paragraph } from "@/styles/homepage/homepage";
import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";


const  HomePage=({notedata})=>{
  const [note,setNotes]=useState([])
  useEffect(() => setNotes(notedata), [])

  return (<div>
  
   <HomeContainer>
    <HomeWrapper>
    {note.map((items)=>{
      return(
        <ul>
        <li key={items.id}>
          <Paragraph>{items.title}</Paragraph>
        </li>
        </ul>
      )
    })}
    </HomeWrapper>
  </HomeContainer>  
  </div>
  );
};

export async function getServerSideProps(context) {
  const BASE_URL = process.env.BASE_URL;
  const res = await fetch(`${BASE_URL}/api/notes`)
  const notes = await res.json()
  if(!notes){
      return {
          notFound:true
      }
  }
  return{
      props:{
          notedata:notes
      }
  }
}

export default HomePage