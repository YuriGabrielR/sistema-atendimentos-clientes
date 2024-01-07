import styled from "styled-components";

export const Form = styled.form`
display:flex; 
flex-direction:column;
gap:14px;
width:400px; 
height:350px;
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

label{
    display:flex;
    flex-direction:column;
    font-family: 'Montserrat', sans-serif;
    font-size:15px;
    width:100%;
}

input{
    border: 1px solid #688A7C;
    border-radius:4px;
    font-size:15px;
    height:25px; 
    outline:none;
    padding: 5px;
}

p{
    font-size: 14px; 
    font-family: 'Montserrat', sans-serif;

    button{
        cursor: pointer;
        background-color:transparent;
        font-size: 14px; 
        font-family: 'Montserrat', sans-serif;
        font-weight:600;
        border-bottom: 1px solid blue;
        color: blue; 
    }
}


@media (max-width: 412px) {
    width:300px;
}
`;

export const FieldArea = styled.div`
display:flex; 
flex-direction:column;
gap:8px; 
`;
