import { useState } from "react";
import { Login } from "../Forms/Login";
import { Container } from "./styles";
import { Register } from "../Forms/Register";


export default function Home() {
  const [isLogin, setIsLogin] = useState(true); 

  const toggleForm:()=>void = () =>{

    setIsLogin(!isLogin); 

  }; 
  
  return (
    
    <Container>

      {
        isLogin ?   
        <Login toggleForm={toggleForm}/> 
        : 
        <Register toggleForm={toggleForm} />
        
      }
       
  
    </Container>
    
  )
}
