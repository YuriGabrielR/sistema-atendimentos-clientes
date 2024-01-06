import { useState } from "react";
import { Container, Form, Label } from "./styles";


export default function Home() {

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  

  return (
    <Container>
      <Form >
        <h2>{isLogin ? 'Login' : 'Registrar'}</h2>

        <Label isVisible={isRegister} htmlFor="user">
          Usuário: 
          <input id='user' type="text" />
        </Label>

        <Label isVisible={isLogin} htmlFor="email">
          Email: 
          <input id='email' type="email" />
        </Label>


        <Label isVisible={isLogin} htmlFor="password">
          Senha: 
          <input id='password' type="password" />
        </Label>
         
      
      </Form>
    </Container>
   
  )
}
