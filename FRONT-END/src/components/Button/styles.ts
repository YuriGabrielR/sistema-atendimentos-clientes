import styled from "styled-components";

export type propsButton = {
 text: string;

};

export const ButtonForm = styled.button`
cursor: pointer;
display:flex; 
align-items:center; 
justify-content:center;
border-radius:15px;
background: linear-gradient(to right, #517F6E, #688A7C, #7C9E8E);
width:135px; 
height:35px; 


p{
font-family: 'Montserrat', sans-serif; 
font-weight:500;
font-size: 16px;
color: #FFFFFF;
width:100%;
height:auto;
}
`;