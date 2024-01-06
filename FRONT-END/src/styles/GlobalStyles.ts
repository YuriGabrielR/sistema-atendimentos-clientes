import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{


    box-sizing:border-box; 
    margin:0; 
    padding:0;


    body{
        min-width:100%;
        min-height:100%; 
        overflow-x:hidden;
         
    }


    a{
        text-decoration:none;
        outline:none;

        &:visited{

            color : white;
        }
    }


    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    button{

        border:none;
        padding:none; 
        margin:0;
        padding:0;
        outline:none;

    }

}

`