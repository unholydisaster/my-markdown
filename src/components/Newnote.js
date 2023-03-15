import React from "react"
import { useState } from "react";
import fetch from 'isomorphic-fetch'
import Cookies from "js-cookie";

const Notes = () => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const handleChange=(event)=>{

          return setTitle(event.target.value)
    }
    const handleChange2=(event)=>{
          return setNote(event.target.value)
    }

  const handleCreateNote = async (event) => {
      event.preventDefault();
      const token = Cookies.get("token");
      console.log(token)
      const result = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // include the token in the headers
        },
        body: JSON.stringify({ title, note }),
      });
      const data = await result.json();
    
      console.log("response status:", data.status);
      console.log("response body:", data);
    

    }; 

    return (
      <div>
        <form onSubmit={handleCreateNote}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleChange}
          />
          <textarea
            placeholder="Content"
            value={note}
            onChange={handleChange2}
          ></textarea>
          <button type="submit">Create Note</button>
        </form>
      </div>
    );
};

export default Notes