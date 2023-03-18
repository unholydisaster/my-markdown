import React from 'react';
import {
  FormContainer,
  FormWrapper,
  FormTitle,
  FormInput,
  FormButton,
} from '../styles/authStyles/newauth';

const Register = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <FormTitle>Register</FormTitle>
        <FormInput type="text" placeholder="Username" />
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
        <FormButton>Register</FormButton>
      </FormWrapper>
    </FormContainer>
  );
};

export default Register;
