import React from "react"
import Input, { AuthContainer,Content, LabelErrors, LabelLogin, StyledHr, SubmitButton } from '@/styles/authStyles/auth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch'



const RegistrationForm = () => {
  const router = useRouter()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);


  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmChange = (event) => {
    setConfirmPassword(event.target.value);
  };

async function handleSubmit(event){
    event.preventDefault();
    // Make sure the password and confirm password match
    if (password !== confirmpassword) {
      setPasswordsMatch(false); // Set the state of new variable
      return;
    }

      const result = await fetch('api/auth',{
        body: JSON.stringify({username,email,password}),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST"
      }).then((res)=>res.json())
        router.push('/login'); // Navigate to login page
  };



  return (<>
  {!passwordsMatch && (
  <div>Passwords do not match</div>
  )}
  <AuthContainer>
  <Content>
    <form onSubmit={handleSubmit}>
      <LabelLogin>Sign up</LabelLogin>
      <StyledHr/>
      <Input label="Username" type="text" placeholder="Enter your Username" value={username} onChange={handleNameChange} />
      <Input label="Email" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
      <Input label="Password" type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
      <SubmitButton type="submit">Register</SubmitButton>
      <LabelErrors> user with that email does not exist</LabelErrors>
    </form>
    </Content>
    </AuthContainer>
  </>
  );
};

export default RegistrationForm;