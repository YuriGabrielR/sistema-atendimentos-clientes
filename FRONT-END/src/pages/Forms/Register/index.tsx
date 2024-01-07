import { Button } from "../../../components/Button"
import { FieldArea, Form } from "../styles"

type RegisterProps = {
    toggleForm: ()=> void;
}

export const Register = ({toggleForm}: RegisterProps) => {
  return (
    
    <Form>
    <h2>Registrar</h2>

    <FieldArea>
    <label htmlFor="">Nome do Usuário:</label>
    <input type="text" /> 
    </FieldArea>

    <FieldArea>
    <label htmlFor="">Email:</label>
    <input type="text" /> 
    </FieldArea>
  
    <FieldArea>
    <label htmlFor="">Senha:</label>
    <input type="text" />
    </FieldArea>

      <p>Já tem uma conta ? <button onClick={toggleForm}> Faça Login!</button>  </p>

      <Button text="Registrar"/>
    </Form>
  )
}
