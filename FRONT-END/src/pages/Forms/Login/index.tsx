import { useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/Button";
import { FieldArea, Form } from "../styles";


type LoginProps = {
  toggleForm: ()=> void;
}
 
const schemaLogin = z.object({
  email: z.string()
  .email('Formato de email inválido!')
  .refine(data => data.trim() !== '',{
    message: 'Este campo não pode ser vazio'
  }), 

  password: z.string().min(6, 'A senha precisa de no mínimo 6 caracteres')
});

type LoginForm = z.infer<typeof schemaLogin>; 


export const Login = ({toggleForm}: LoginProps) => {

  const { 
  register, 
  handleSubmit, 
  formState: { errors } } = useForm<LoginForm>({resolver: zodResolver(schemaLogin)
  });


  const onSubmit = (data: any )=>{
    console.log(data);
  }; 
  
  return (
    
    <Form $height={false} onSubmit={handleSubmit(onSubmit)}>
    <h2>Login</h2>

    <FieldArea>
    <label htmlFor="email">Email:</label>
    <input autoComplete="off" id="email" {...register("email")} type="text" /> 
    {errors.email && <span><p>{errors.email.message}</p></span> }
    </FieldArea>
  
    <FieldArea>
    <label htmlFor="password">Senha:</label>
    <input autoComplete="off" id="password" {...register("password")} type="password" />
    {errors.password && <span><p>{errors.password.message}</p></span> }
    </FieldArea>

      <p>Não tem uma conta ?  <button type="button" onClick={toggleForm}>Crie sua conta!</button>  
      </p>

      <Button text="Entrar"/>
    </Form>
  )
}
