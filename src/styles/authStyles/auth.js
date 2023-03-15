import styled from "styled-components";

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const  AuthContainer=styled.div`{
backgound-color:white;
height:80%;
position:absolute;
left:30%;
top:28%;
width:40vw;


${mq[0,1]}{
position:absolute;
top:20%;
left:2.5vw;
width:95vw; 
}
}
`

export const InputField = styled.input`{
position:relative;
width:250px;
left:25%;
height: 30px;
border: 1px solid #cccccc;
box-sizing: border-box;
outline: none;
border-radius:5px;
margin-bottom: 20px;
font-size: 16px;

${mq[0,1]}{

font-size: 16px;
width:300px;
height:40px;
left:28%;
}
}`;


export const InputLabel = styled.label`{
position:relative;
left:25%;
top:20%;
display: block;
margin-bottom: 5px;
font-size: 18px;
width:300px;
font-weight:400;

${mq[0,1]}{
  left:28%;
}`;

export const SubmitButton=styled.button`{
position:absolute;
width:130px;
left:25%;
top:80%;
height:35px;
background-color: #0070f3;
color: #fff;
border: none;
border-radius: 5px;

${mq[0,1]}{
  font-size: 16px;
  left:33vw;
  top:85%;
  }
}
`
export const SubmitLogin=styled.button`{
  position:absolute;
  width:130px;
  left:25%;
  top:45%;
  height:35px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  
  ${mq[0,1]}{
    font-size: 16px;
    left:33vw;
    top:85%;
    }
  }
  ` 
const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <InputField type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};

export default Input;