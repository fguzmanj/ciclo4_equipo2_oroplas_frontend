import React from 'react'

function CreateUsers() {
    return (
        <div>
              <div className="container-fluid pt-5">
      <div className="accordion mb-20 pt-5" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              CREAR USUARIO
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Ingrese los datos del nuevo usuario.</strong>

            <form className="row g-3 needs-validation" novalidate>
              <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">                
                  <input type="text" aria-label="First name" className="form-control" placeholder="Nombres" id="validationTooltip01 floatingInput" required/>
                  <label for="validationTooltip01 floatingInput">Nombres</label>
                </div>               
                <div className="valid-tooltip">
                  Looks good!
                </div>
              </div>

              <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">                
                  <input type="text" aria-label="Last name" className="form-control" placeholder="Apellidos" id="validationTooltip02 floatingInput" required/>
                  <label for="validationTooltip02 floatingInput">Apellidos</label>
                </div> 
                <div className="valid-tooltip">
                  Looks good!
                </div>
              </div>

              <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">                
                    <input type="text" aria-label="User" className="form-control" placeholder="Nombre de usuario" id="validationTooltip02 floatingInput" required/>
                    <label for="floatingInput">Nombre de usuario</label>
                  </div> 
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
              </div>

              <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput validationTooltip03" placeholder="name@example.com" required/>
                  <label for="validationTooltip03 floatingInput">Correo electrónico</label>
                </div>
              </div>

              <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="Tipo de documento">
                    <option selected>Seleccione el tipo de documento</option>
                    <option value="1">Cedula de Ciudadania</option>
                    <option value="2">Pasaporte</option>
                  </select>
                  <label for="validationTooltip04 floatingSelect">Tipo de documento</label>
                </div>
              </div>

              <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" placeholder="Numero de identificación" id="validationTooltip05 floatingInput" required/>
                  <label for="validationTooltip05 floatingInput">Número de identificación</label>
                </div>
              </div>

              <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">
                  <input type="date" className="form-control" placeholder="Fecha de nacimiento" id="validationTooltip06 floatingInput" required/>
                  <label for="validationTooltip06 floatingInput">Fecha de nacimiento</label>
                </div>
              </div>

              <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword validationTooltip07" placeholder="Password" required/>
                  <label for="validationTooltip07 floatingPassword">Password</label>
                </div>
              </div>

              <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="Tipo de documento">
                    <option selected>Seleccione el roll</option>
                    <option value="1">Administrador</option>
                    <option value="2">Interno</option>
                    <option value="3">Externo</option>
                  </select>
                  <label for="validationTooltip04 floatingSelect">Roll</label>
                </div>
              </div> 
                          
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Crear usuario</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            EDITAR USUARIO
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Ingrese los datos para actualizar un usuario.</strong>              

              <form className="row g-3 needs-validation" novalidate>
              <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="Tipo de documento">
                      <option selected>Seleccione el tipo de documento</option>
                      <option value="1">Cedula de Ciudadania</option>
                      <option value="2">Pasaporte</option>
                    </select>
                    <label for="validationTooltip04 floatingSelect">Tipo de documento</label>
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Numero de identificación" id="validationTooltip05 floatingInput" required/>
                    <label for="validationTooltip05 floatingInput">Número de identificación</label>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Buscar usuario</button>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">                
                    <input type="text" aria-label="First name" className="form-control" placeholder="Nombres" id="validationTooltip01 floatingInput" required/>
                    <label for="validationTooltip01 floatingInput">Nombres</label>
                  </div>               
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">                
                    <input type="text" aria-label="Last name" className="form-control" placeholder="Apellidos" id="validationTooltip02 floatingInput" required/>
                    <label for="validationTooltip02 floatingInput">Apellidos</label>
                  </div> 
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                    <div className="form-floating mb-3">                
                      <input type="text" aria-label="User" className="form-control" placeholder="Nombre de usuario" id="validationTooltip02 floatingInput" required/>
                      <label for="floatingInput">Nombre de usuario</label>
                    </div> 
                    <div className="valid-tooltip">
                      Looks good!
                    </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput validationTooltip03" placeholder="name@example.com" required/>
                    <label for="validationTooltip03 floatingInput">Correo electrónico</label>
                  </div>
                </div>                  

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <input type="date" className="form-control" placeholder="Fecha de nacimiento" id="validationTooltip06 floatingInput" required/>
                    <label for="validationTooltip06 floatingInput">Fecha de nacimiento</label>
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword validationTooltip07" placeholder="Password" required/>
                    <label for="validationTooltip07 floatingPassword">Password</label>
                  </div>
                </div>

                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="Tipo de documento">
                      <option selected>Seleccione el roll</option>
                      <option value="1">Administrador</option>
                      <option value="2">Interno</option>
                      <option value="3">Externo</option>
                    </select>
                    <label for="validationTooltip04 floatingSelect">Roll</label>
                  </div>
                </div> 
                            
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Actualizar usuario</button>
                </div>
              </form>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          ELIMINAR USUARIO
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Ingrese los datos para eliminar un usuario.</strong> 
         
            <form className="row g-3 needs-validation" novalidate>             
            <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example" placeholder="Tipo de documento">
                    <option selected>Seleccione el tipo de documento</option>
                    <option value="1">Cedula de Ciudadania</option>
                    <option value="2">Pasaporte</option>
                  </select>
                  <label for="validationTooltip04 floatingSelect">Tipo de documento</label>
                </div>
              </div>

              <div className="col-md-4 position-relative">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" placeholder="Numero de identificación" id="validationTooltip05 floatingInput" required/>
                  <label for="validationTooltip05 floatingInput">Número de identificación</label>
                </div>
              </div>

              <div className="col-12">
                <button className="btn btn-primary" type="submit">Buscar usuario</button>
              </div>

              <div className="col-md-4 position-relative">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Nombres</label>                 
                  <input className="form-control" type="text" value="" aria-label="readonly input example" readonly/>
                </div>               
              </div>

              <div className="col-md-4 position-relative">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Apellidos</label>                 
                  <input className="form-control" type="text" value="" aria-label="readonly input example" readonly/>
                </div> 
              </div>

              <div className="col-md-4 position-relative">
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Usuario</label>                 
                    <input className="form-control" type="text" value="" aria-label="readonly input example" readonly/>
                  </div> 
              </div>

              <div className="col-md-4 position-relative">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Correo electrónico</label> 
                  <input className="form-control" type="text" value="" aria-label="readonly input example" readonly/>
                </div>
              </div>                

              <div className="col-md-4 position-relative">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Roll</label>                 
                    <input className="form-control" type="text" value="" aria-label="readonly input example" readonly/>
                  </div> 
              </div>
                          
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Eliminar usuario</button>
              </div>
            </form>

            </div>
          </div>
        </div>
    </div>
  </div>    
        </div>
    )
}

export default CreateUsers
