
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"



const GestionarSubasta = () => {

    return (
        <div>
            <div className="DashAdmin">
              <Navbar />
              <div className="flex">
                  <Sidebar /> 
                  <div className="container">

                  <div className="container-fluid pt-5">
        <div className="accordion mb-20 pt-5" id="accordionExample">
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                CREAR SUBASTA
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Ingrese los datos de la nueva subasta.</strong>

              <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-4 position-relative">

                  <div className="form-floating mb-3">
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" placeholder="ID subasta" id="validationTooltip01 floatingInput" required/>
                      <label for="validationTooltip01 floatingInput">ID subasta</label>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">                
                    <input type="text" aria-label="Last name" className="form-control" placeholder="Objeto a subastar" id="validationTooltip02 floatingInput" required/>
                    <label for="validationTooltip02 floatingInput">Objeto a subastar</label>
                  </div> 
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">                
                    <input type="number" aria-label="Last name" className="form-control" placeholder="Precio inicial" id="validationTooltip03 floatingInput" required/>
                    <label for="validationTooltip03 floatingInput">Precio inicial</label>
                  </div> 
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <input type="date" className="form-control" placeholder="Fecha de inicio" id="validationTooltip04 floatingInput" required/>
                    <label for="validationTooltip04 floatingInput">Fecha de inicio</label>
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <input type="date" className="form-control" placeholder="Fecha fin" id="validationTooltip05 floatingInput" required/>
                    <label for="validationTooltip05 floatingInput">Fecha fin</label>
                  </div>
                </div>


                <div className="col-md-4 position-relative">
                    <div className="form-floating mb-3"> 
                      <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                      <label for="validationTextarea floatingInput" className="form-label">Descripción</label>
                      <div className="invalid-feedback">
                        Diligencie la descripción del objeto a subastar.                      
                      </div>
                    </div> 
                    <div className="valid-tooltip">
                      Looks good!
                    </div>
                </div>
                            
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Crear subasta</button>
                </div>
              </form>
            </div>
          </div>
        </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              EDITAR SUBASTA
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Ingrese los datos para actualizar una subasta.</strong>              

                <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-4 position-relative">
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" placeholder="ID subasta" id="validationTooltip06 floatingInput" required/>
                      <label for="validationTooltip06 floatingInput">ID subasta</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">Buscar subasta</button>
                  </div>

                 
                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">                
                    <input type="text" aria-label="Last name" className="form-control" placeholder="Objeto a subastar" id="validationTooltip02 floatingInput" required/>
                    <label for="validationTooltip02 floatingInput">Objeto a subastar</label>
                  </div> 
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">                
                    <input type="number" aria-label="Last name" className="form-control" placeholder="Precio inicial" id="validationTooltip03 floatingInput" required/>
                    <label for="validationTooltip03 floatingInput">Precio inicial</label>
                  </div> 
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <input type="date" className="form-control" placeholder="Fecha de inicio" id="validationTooltip04 floatingInput" required/>
                    <label for="validationTooltip04 floatingInput">Fecha de inicio</label>
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <input type="date" className="form-control" placeholder="Fecha fin" id="validationTooltip05 floatingInput" required/>
                    <label for="validationTooltip05 floatingInput">Fecha fin</label>
                  </div>
                </div>


                <div className="col-md-4 position-relative">
                    <div className="form-floating mb-3"> 
                      <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                      <label for="validationTextarea floatingInput" className="form-label">Descripción</label>
                      <div className="invalid-feedback">
                        Diligencie la descripción del objeto a subastar.                      
                      </div>
                    </div> 
                    <div className="valid-tooltip">
                      Looks good!
                    </div>
                </div>
                            
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Actualizar subasta</button>
                </div>
                </form>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            CANCELAR SUBASTA
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Ingrese los datos para eliminar una subasta.</strong> 
           
              <form className="row g-3 needs-validation" novalidate>             
                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                          <input type="number" className="form-control" placeholder="ID subasta" id="validationTooltip06 floatingInput" required/>
                          <label for="validationTooltip06 floatingInput">ID subasta</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary" type="submit">Buscar subasta</button>
                      </div>

                    <div className="col-md-4 position-relative">
                      <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Objeto a subastar</label>                
                        <input className="form-control" type="text" aria-label="readonly input example" readonly/>
                      </div>               
                    </div>

                    <div className="col-md-4 position-relative">
                      <div className="mb-3">  
                      <label for="exampleFormControlInput1" className="form-label">Fecha de inicio</label>               
                        <input className="form-control" type="text" value="" aria-label="readonly input example" readonly/>
                      </div> 
                    </div>

                    <div className="col-md-4 position-relative">
                        <div className="mb-3">  
                          <label for="exampleFormControlInput1" className="form-label">Fecha de fin</label>                
                          <input className="form-control" type="text" value="" aria-label="readonly input example" readonly/>
                        </div> 
                    </div>

                    <div className="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label">Descripción</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value="" readonly></textarea>
                    </div>
                                
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">Cancelar subasta</button>
                    </div>
              </form>

              </div>
            </div>
          </div>
      </div>
    </div> 

                         
                  </div>                        
              </div>
            </div>
        </div>
    )
}

export default GestionarSubasta