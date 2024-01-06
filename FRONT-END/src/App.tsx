import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
 import Panel from "./pages/Panel"

function App() {

  return (
    <>
     
     <Routes>
      <Route path="/"  Component={Home} />
      <Route path="/painel"  Component={Panel} />
      
     </Routes>
        
    
    </>
  )
}

export default App
