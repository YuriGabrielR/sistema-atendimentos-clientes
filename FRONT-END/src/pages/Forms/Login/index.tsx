import { Button } from "../../../components/Button"
import { FieldArea, Form } from "../styles"

type LoginProps = {
    toggleForm: ()=> void;
}

export const Login = ({toggleForm}: LoginProps) => {
  return (
    
    <Form>
    <h2>Login</h2>

    <FieldArea>
    <label htmlFor="">Email:</label>
    <input type="text" /> 
    </FieldArea>
  
    <FieldArea>
    <label htmlFor="">Senha:</label>
    <input type="text" />
    </FieldArea>

      <p>Não tem uma conta ?  <button onClick={toggleForm}>Crie sua conta!</button>  
      </p>

      <Button text="Entrar"/>
    </Form>
  )
}
