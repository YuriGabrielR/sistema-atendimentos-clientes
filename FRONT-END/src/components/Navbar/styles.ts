import styled from "styled-components";

type NavProps = {
name: string
};

export const Nav = styled.nav`
position:absolute;

gap:10px;  
left:0; 
top:0;
width:85px; 
height:100vh;
background-color:#688a7c;

ul{
    position:relative;
    display:flex; 
    flex-direction:column; 
    align-items:center;
    gap:30px;
    margin-top:30px;
    
}
`;

export const IconsNavBar = styled.li<Partial<NavProps>>`
    position:relative;
    border-radius:50%;
    text-align:center;
    width:38px;
    transition: 0.4s ease-in-out; 

    &::after{
        
        position:absolute;
        content:attr(name);
        top:4px;
        left:40px;
        display:flex;
        align-items:center;
        justify-content:center;
        width:0px; 
        height:27px;
        border-radius:5px;
        background-color:#becec4;
        z-index:9;
        text-align:center;
        font-size: 1px;
        font-family: 'Montserrat', sans-serif;
        font-weight:600;
        opacity:0;
        transition: 0.4s ease-in-out; 
        

    }


    &:hover:after{
        opacity:1;
        width:200px;
        font-size:16px;
        
    }

    &:hover{
      opacity:1;
      background-color:#becec4;
      
    }
`;