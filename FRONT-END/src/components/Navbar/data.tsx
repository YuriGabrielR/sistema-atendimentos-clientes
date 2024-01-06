import { IconType } from "react-icons"
import { FaHome  } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";


const Icon = (Icon:IconType, size:string, color:string)=> 
<Icon size={size} color={color}/> 

export const data = [

    {name: 'Cadastrar', to:'/cadastrar', icon: Icon(BsPersonPlusFill , '30px', '#FFFFFF')},
    {name: 'Pesquisar', to:'/pesquisar',  icon: Icon(FaHome, '30px', '#FFFFFF')}
]