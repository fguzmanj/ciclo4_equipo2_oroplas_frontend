import React from "react"; 
import {get} from "../api/node/http.js";

import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

import img_subasta_01 from '../states/img-subasta-01.jpg'
import img_subasta_02 from '../states/img-subasta-02.jpg'
import img_subasta_03 from '../states/img-subasta-03.jpg'
import img_subasta_04 from '../states/img-subasta-04.jpg'
import img_subasta_05 from '../states/img-subasta-05.jpg'
import img_subasta_06 from '../states/img-subasta-06.jpg'
import img_subasta_07 from '../states/img-subasta-07.jpg'
import img_subasta_08 from '../states/img-subasta-08.jpg'



const HistorialSubasta = () => {

  

  
  const [subastas, setSubastas] = React.useState([])

  React.useEffect(() => {
    console.log("Leyendo subastas");
    get("subastas").then((data) => {
      setSubastas(data.subastas);
    })
  }, []);

  const rows = subastas.map((subasta) => {
    return (
      <tr key = {subasta._id}>
        <td>{subasta.name}</td>
        <td>{subasta.published_date}</td>
        <td>{subasta.description}</td>
      </tr>
    )
  });

    return (
        <div>
            <div className="DashAdmin">
              <Navbar />
              <div className="flex">
                  <Sidebar /> 
                  <div className="container">

                    <ul>
                      {
                        /*
                        subasta.map(item => (
                          <li key={item.id}>{item.name} - {item.description}</li>
                        ))
                        */
                      
                        subastas.map(item => (
                            <li key = {item._id}> {item.name} - {item.published_date} - {item.description}</li>
                          ))
                      }
                    </ul>

                  <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Subastas
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
{/* <div className="container"> */}
<div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={img_subasta_01} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Descripción Producto</h5>
                                        Última oferta: $80.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={img_subasta_02} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Descripción Producto</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        Última oferta: $18.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={img_subasta_03} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Descripción Producto</h5>
                                        Última oferta: $25.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={img_subasta_04} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Descripción Producto</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        Última oferta: $40.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={img_subasta_05} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Descripción Producto</h5>
                                        Última oferta: $25.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={img_subasta_06} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Descripción Producto</h5>
                                        Última oferta: $280.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={img_subasta_07} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Descripción Producto</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        Última oferta: $18.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={img_subasta_08} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Descripción Producto</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        Última oferta: $40.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Detalles</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                {/* </div> */}

      </div>
    </div>
  </div>







  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Detalles de las subastas 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <div class="row">
              <div class="box-header">
                <h3 class="box-title">Subastas en plataforma</h3>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Descripción del producto</th>
                    <th scope="col">Fecha apertura</th>
                    <th scope="col">Fecha cierre</th>
                    <th scope="col">Última puja</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">SB-0586</th>
                    <td>Diamante Rosa</td>
                    <td>10/08/2021</td>
                    <td>10/01/2022</td>
                    <td>$3.000</td>
                    <td>Activo</td>
                    <td>
                      <a href="#" class="btn btn-xs btn-success m-1">Ver detalle</a>
                      <a href="#" class="btn btn-xs btn-primary m-1">Modificar</a>
                      <a href="#" class="btn btn-xs btn-danger m-1">Eliminar</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SB-0592</th>
                    <td>Winston Blue</td>
                    <td>30/07/2020</td>
                    <td>15/09/2020</td>
                    <td>$4.000</td>
                    <td>Vendido</td>
                    <td>
                      <a href="#" class="btn btn-xs btn-success m-1">Ver detalle</a>
                      <a href="#" class="btn btn-xs btn-primary m-1">Modificar</a>
                      <a href="#" class="btn btn-xs btn-danger m-1">Eliminar</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SB-0625</th>
                    <td>Collar Hutton-Mdivani</td>
                    <td>13/04/2016</td>
                    <td>22/06/2016</td>
                    <td>$8.000</td>
                    <td>Vendido</td>
                    <td>
                      <a href="#" class="btn btn-xs btn-success m-1">Ver detalle</a>
                      <a href="#" class="btn btn-xs btn-primary m-1">Modificar</a>
                      <a href="#" class="btn btn-xs btn-danger m-1">Eliminar</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#">Previo</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                </ul>
              </nav>
            </div>
      </div>
    </div>
  </div>



  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Subastas reprogramadas
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">No se encontro ninguna subasta reprogrmada</div>
    </div>
  </div>
</div>


                  </div>
              </div>
            </div>
        </div>
    )
}

export default HistorialSubasta