import React from "react"
import Input, { AuthContainer, SubmitButton, SubmitLogin } from "@/styles/authStyles/auth";
import { useState } from "react";
import { useRouter } from 'next/router';
import {useCookies} from "react-cookie"
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [_,setCookies]=useCookies(["access_token"]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try{
      const response = await axios.put("/api/auth",
      {
        email, 
        password
      })
      console.log(response)
      setCookies("access_token", response.data.token)
      window.localStorage.setItem("userID", response.data.UserID)
      router.push('/')
    }catch(err){
      console.error(err)
    }
  };

  return (
    <AuthContainer>
      <form onSubmit={handleLogin}>
        <Input label="Email" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        <Input label="Password" type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
        <SubmitLogin type="submit">Login</SubmitLogin>
      </form>
    </AuthContainer>
  );
};
export default Login