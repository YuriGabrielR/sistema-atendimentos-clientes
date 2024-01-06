import styled from "styled-components";

type propsForm = {
    isVisible: boolean;
}

export const Container = styled.div`
display:flex; 
justify-content:center;
align-items:center;
width:100%;
height:100vh;
background-image:url('/assets/images/wave-haikei.svg'); 
background-size:cover;
background-position:center;
`;


export const Form = styled.form`
display:flex; 
flex-direction:column;
gap:10px;
width:400px; 
height:450px;
border-radius:20px; 
background-color:#ffffffc4;
box-shadow: rgba(0, 0, 0, 0.17) 0px 0px 56px -8px; 
padding: 20px; 


h2{
    font-family: 'Montserrat', sans-serif;
    font-weight:600;
    width:100%; 
    text-align:center;
    color:#646363;
}

/* div{

    display:flex; 
    width:90%; 
    height:auto; 
    padding: 10px; 
    
};  */

`;



export const Label = styled.label<propsForm>`

opacity: ${(({isVisible})=> isVisible ? 1 : 0)};

`;