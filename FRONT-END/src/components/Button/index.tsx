import { ButtonForm, propsButton } from "./styles"

export const Button = ({text}: propsButton) => {
  return (

   <ButtonForm type="submit">
    
   <p>{text}</p>

   </ButtonForm>

  )
}
