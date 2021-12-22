import React from "react"; 
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import CreateUsers from "../components/CreateUsers"

import './HomeAdmin.scss'



const GestionarUsuario = () => {

    
  const [subasta, setSubasta] = React.useState([])

    React.useEffect(() => {
    //console.log("Leyendo subastas");
    obtenerSubastas()
  }, [])

  const obtenerSubastas = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    //const data = await fetch("localhost:3222/api/v1/subastas")
    const subastas = await data.json()
    //console.log(subastas)
    setSubasta(subastas)
  }

    return (
        <div>
            <div className="DashAdmin">
              <Navbar />
              <div className="flex">
                  <Sidebar /> 
                  <div className="container">
                  <ul>
                      {
                        
                        subasta.map(item => (
                          <li key={item.id}>{item.name} - {item.description}</li>
                        ))
                      }
                    </ul>
                    <CreateUsers />                        
                  </div>                        
             </div>
            </div>
        </div>
    )
}

export default GestionarUsuario