import { useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/Button"
import { FieldArea, Form } from "../styles"


type RegisterProps = {
    toggleForm: ()=> void;
}

const schemaRegister = z.object({
  user: z.string()
  .min(5, 'O nome do usuário precisa ter no mínimo 4 letras') , 
  email: z.string()
  .email('Formato de email inválido!')
  .refine(data => data.trim() !== '',{
    message: 'Este campo não pode ser vazio'
  }), 
  password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres')

});

type schemaRegister = z.infer<typeof schemaRegister>; 

export const Register = ({toggleForm}: RegisterProps) => {
  
  const onSubmit = (data: unknown)=>{
    console.log(data); 
  }

  const {
  register, 
  handleSubmit, 
  formState:{errors} } = useForm<schemaRegister>({resolver: zodResolver(schemaRegister)}); 
  
  return (
    
    <Form $height={true} onSubmit={handleSubmit(onSubmit)}>
    <h2>Registrar</h2>

    <FieldArea>
    <label htmlFor="usuário">Nome do Usuário:</label>
    <input id="usuário" {...register("user")} type="text" /> 
    {errors.user && <span><p>{errors.user.message}</p></span>}
    </FieldArea>

    <FieldArea>
    <label htmlFor="email">Email:</label>
    <input id="email" autoComplete="off" {...register("email")} type="text" /> 
    {errors.email && <span><p>{errors.email.message}</p></span>}
 
    </FieldArea>
  
    <FieldArea>
    <label htmlFor="password">Senha:</label>
    <input id="password" autoComplete="off" {...register("password")} type="password" />
    {errors.password && <span><p>{errors.password.message}</p></span>}

    </FieldArea>

      <p>Já tem uma conta ? <button type="button" onClick={toggleForm}> Faça Login!</button>  </p>

      <Button text="Registrar"/>
    </Form>
  )
}
