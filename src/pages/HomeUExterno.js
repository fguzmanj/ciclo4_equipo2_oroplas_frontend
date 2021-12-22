import React from 'react'
import './HomeAdmin.scss'
import Dash from '../states/Dash.jpg'

import NavbarUExterno from '../components/NavbarUExterno'
import SidebarExterno from '../components/SidebarExterno'




function HomeUExterno() {
    return (
        <div>
            <div className="DashAdmin">
              <NavbarUExterno />
              <div className="flex">
                  <SidebarExterno />
                  <div className="container">
                  <div class="card">
                      <div class="card-body">
                      <div className="c-img">
                          <img src={Dash} alt="" width="1400" height="300"/>
                          <div className="txt">
                              <p class="display-4 fw-bolder">
                                  ¡Bienvenido Usuario Externo!
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
                              <h5 class="list-group-item">Ver Subastas: Donde podrá ver las subastas disponibles</h5>
                              <h5 class="list-group-item">Gestionar Pujas: Donde podrá aplicar y cancelar las pujas realizadas en una subastas en particular</h5>
                              <h5 class="list-group-item">Historial Pujas: Donde podrá ver la información general de las aplicadas; por ejemplo, las pujas ganadas, perdidas y canceladas</h5>
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

export default HomeUExterno