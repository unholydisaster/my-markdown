import styled from 'styled-components';


const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const lq=breakpoints.map(
    bp=>`@media screen and (min-width:${bp}px)`
)

export const FormContainer = styled.div`
  position:relative;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;



`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  max-width: 400px;

  ${mq[1]}{
    position:absolute;
    left:5vw;
    padding: 20px;
    top:90px;
    width:90vw;
  }
  ${lq[1]}{
    width:25vw;
    height:xxxpx;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  ${lq[1]}{
    margin-bottom: 20px;
    margin-top:0px;
  }
  ${mq[1]}{
    margin-bottom: 20px;
    margin-top:0px;
  }
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
  ${lq[1]}{
    width:100%;
  }
  ${mq[1]}{
    width:100%;
    position:relative;
    
  }
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
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #3c3cff;
  }
  ${lq[1]}{
    width:100%;
    padding:10px;
    position:relative;
    

  }
  ${mq[1]}{
    width:100%;
    padding:10px;
    position:relative;
  

  }
`;
