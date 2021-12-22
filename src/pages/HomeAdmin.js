import React from 'react'
import './HomeAdmin.scss'
import Dash from '../states/Dash.jpg'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'




function HomeAdmin() {
    return (
        <div>
            <div className="DashAdmin">
              <Navbar />
              <div className="flex">
                  <Sidebar />
                  <div className="container">
                  <div class="card">
                      <div className="card-body">
                      <div className="c-img">
                          <img src={Dash} alt="" width="1400" height="300"/>
                          <div className="txt">
                              <p class="display-4 fw-bolder">
                                  ¡Bienvenido Administrador!
                              </p>
                              <p class="display-7 fw-bolder">
                              “La esencia de lo que estamos haciendo siempre ha sido diferente. No intentamos hacer cosas que estén de moda… Todavía parece una locura que alguien quiera usar lo mismo que otra persona”.
                              </p>
                          </div>
                     </div>
                          <div className='contenedor'>
                          <h5 class="card-title">En este panel encontraras las siguientes funciones: </h5>
                          <p/>
                          <ul class="list-group list-group-flush display-7">
                              <h5 class="list-group-item">Gestionar usuario: Donde podrá crear, editar y eliminar los usuarios</h5>
                              <h5 class="list-group-item">Gestionar subastas: Donde podrá crear, editar y cancelar las subastas</h5>
                              <h5 class="list-group-item">Historial de subastas: Donde veras todas las subastas finalizadas, canceladas y programadas.</h5>
                          </ul>
                          </div>
                      </div>
                 </div>
                 </div>
              </div>
            </div>
        </div>
    )
}

export default HomeAdmin


