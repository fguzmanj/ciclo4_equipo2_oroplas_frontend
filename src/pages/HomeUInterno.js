import React from 'react'
import './HomeAdmin.scss'
import Dash from '../states/Dash.jpg'

import NavbarUInterno from '../components/NavbarUInterno'
import SidebarInterno from '../components/SidebarInterno'




function HomeUInterno() {
    return (
        <div>
            <div className="DashAdmin">
              <NavbarUInterno />
              <div className="flex">
                  <SidebarInterno />
                  <div className="container">
                  <div class="card">
                      <div class="card-body">
                      <div className="c-img">
                          <img src={Dash} alt="" width="1400" height="300"/>
                          <div className="txt">
                              <p class="display-4 fw-bolder">
                                  ¡Bienvenido Usuario Interno!
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
                              <h5 class="list-group-item">Crear usuario: Donde podrá crear los usuarios que se requieran</h5>
                              <h5 class="list-group-item">Crear reportes: Donde podrá llevar el conteo de las pujas por subasta, las pujas ganadoras, las pujas finalizadas y las subastas que se encuentran disponibles</h5>
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

export default HomeUInterno


