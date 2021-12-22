import React from 'react'
import imagen1 from '../states/imagen1.jpg'
import joya1 from '../states/joya1.jpg'
import joya2 from '../states/joya2.jpg'
import joya3 from '../states/joya3.jpg'
import './Home.scss'

import NavbarHome from '../components/NavbarHome'

function Home() {
    return (
        <div>
            <NavbarHome />
            <div className="c-img">
                <img src={imagen1} alt="" width="1400" height="450"/>
                <div className="txt">
                    <p class="display-4 fw-bolder">
                        ¡Las joyas de tus sueños, al alcance de tus manos!
                    </p>
                </div>
            </div>

            <div className="contenedor">
            <div className="container d-flex justify-content-center h-100 align-items-center ">
                <div className="row">

                    <div className="col-md-4">
                        <div class="card">
                        <img src={joya1} class="card-img-top" alt="" width="30" height="300"/>
                            <div class="card-body">
                                 <h5 class="card-title fw-bolder">Anillo Oro Amarillo con Diamantes</h5>
                                 <p class="card-text">
                                 Anillo en oro amarillo con un diamante, rodeado de 12 diamantes cada uno de 0.02.
                                 </p>
                                 <a href="#" class="btn btn-primary">$5.000.000</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                    <div class="card">
                        <img src={joya2} class="card-img-top" alt="" width="30" height="300"/>
                            <div class="card-body">
                                 <h5 class="card-title fw-bolder">Anillo oro blanco con Diamantes</h5>
                                 <p class="card-text">Anillos en oro Blanco de 18k con Diamante Central de 0.33ct, Oro limpio, Lujo sostenible y respaldo de por Vida.</p>
                                 <a href="#" class="btn btn-primary">$6.600.000</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="card">
                        <img src={joya3} class="card-img-top" alt="" width="30" height="300"/>
                            <div class="card-body">
                                 <h5 class="card-title fw-bolder">Anillo Oro Blanco con Diamantes</h5>
                                 <p class="card-text">Juego de anillos de compromiso de oro blanco de 10 quilates con diamantes de 3 quilates.</p>
                                 <a href="#" class="btn btn-primary">$8.600.000</a>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
            </div>
            
        </div>

    )
}

export default Home
