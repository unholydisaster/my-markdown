import styled from "styled-components";

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const Lq=breakpoints.map(
  bp=>`@media screen and (min-width:${bp}px)`
)

export const  AuthContainer=styled.div`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height:xxx;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 8px 32px rgba(31, 38, 135, 0.3);
  border-radius: 10px;
  

${mq[1]}{
  position:relative;
  width:100%; 
  top:100px;
}

${Lq[1]}{
  position:relative;
  width:30vw;
  left:35vw;
  top:50px;
}

`

export const Content = styled.div`
  max-height:xxx;
  width: 100%;

  ${mq[1]}{
    width:100%; 
  }
  
  ${Lq[1]}{
    width:100%;
  }

`;

export const InputField = styled.input`
position:relative;
width:250px;
left:10%;
height: 30px;
box-sizing: border-box;
outline: none;
margin-bottom: 10px;
border: 2px solid rgba(255, 255, 255, 0.5);
border-radius: 5px;
background-color:rgba(255, 255, 255, 0.3);
font-family: 'Open Sans', sans-serif;
font-weight: 400;
font-size: 20px;
line-height: 36px;
display: flex;
align-items: center;

${mq[1]}{
font-size: 20px;
width:80%;
height:40px;
left:10%;
}
`;


export const InputLabel = styled.label`{
position:relative;
left:10%;
top:20%;
display: block;
margin-bottom: 5px;
width:300px;
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 36px;
display: flex;
align-items: center;

color: #FFFFFF;

${mq[1]}{
  left:10%;
}`;

export const SubmitButton=styled.button`
  position:relative;
  width:250px;
  left:10%;
  top:60%;
  height:35px;
  background-color: #FFFF00;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size:24px;
  font-weight:900;
  
  ${mq[0,1,2]}{
    font-size:26px;
    left:10%;
    width:80%;
    height:40px;
    top:70%;
    font-weight:900;
    }

`

export const SubmitLogin=styled.button`
  position:relative;
  width:250px;
  left:10%;
  top:70%;
  height:35px;
  background-color: #FFFF00;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size:24px;
  font-weight:900;
  
  ${mq[0,1,2]}{
    font-size:26px;
    left:10%;
    width:80%;
    height:40px;
    top:70%;
    font-weight:900;
    }
  ` 

export const StyledHr = styled.hr`
  border: 1px solid #FFFFFF;
  margin: 20px auto;
  width: 80%;
`;

const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <InputField type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};

export default Input;


//let's create a hr element that can be re-used using styled-components