import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  display: flex;
  position:relative;
  top:20%;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  width: 35vw;
  max-width: 400px;
  @media screen and (max-width: 768px) {
    width: 90vw;
    padding: 20px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const FormInput = styled.input`
  background-color: #f8f8f8;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  color: #666;
  font-size: 1rem;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

export const FormButton = styled.button`
  background-color: #5a5aff;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
  width: 100%;
  &:hover {
    background-color: #3c3cff;
  }
`;
