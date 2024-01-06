import { data } from "./data";
import { IconsNavBar, Nav } from "./styles";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (

    <Nav>
        <ul>
          {data.map((item, index)=>(

            <Link to={item.to} key={index}>
            
            <IconsNavBar name={item.name}>{item.icon}</IconsNavBar>
            
            </Link>

          ))}
        </ul>
    </Nav>

  )
}
