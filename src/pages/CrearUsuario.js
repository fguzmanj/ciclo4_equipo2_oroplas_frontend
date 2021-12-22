import React from 'react'
import logo from '../states/logo.png'
import './Home.scss'

import NavbarUInterno from '../components/NavbarUInterno'
import SidebarInterno from '../components/SidebarInterno'

function CrearUsuario() {
    return (
        <div>
            <NavbarUInterno /> 
            <div className="flex">
                <SidebarInterno />
            <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card">
                <div className="contenedor">
                    <img src={logo} className="rounded mx-auto d-block" alt="" width="100" height="100"/>
                    <h5 class="card-title fw-bold text-center"> Crear tu cuenta de Oroplas</h5>
                    <div class="card-body">

                    <form class="row g-3 needs-validation" novalidate>
                        
                        <div class="col-md-5">
                            <label for="validationCustom01" class="form-label">Nombres</label>
                            <input type="text" class="form-control" id="validationCustom01" required/>
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        
                        <div class="col-md-5">
                            <label for="validationCustom02" class="form-label">Apellidos</label>
                            <input type="text" class="form-control" id="validationCustom02" required/>
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        
                        <div class="col-md-10">
                            <label for="validationCustomUsername" class="form-label">Correo electrónico</label>
                            <div class="input-group has-validation">
                                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                                <div class="invalid-feedback">Please choose a email.</div>
                            </div>
                        </div>
                        
                        <div class="col-md-5">
                            <label for="validationCustom04" class="form-label">Tipo de documento</label>
                            <select class="form-select" id="validationCustom04" required>
                                <option selected disabled value="">...</option>
                                <option>Cedula de Ciudadania</option>
                                <option>Pasaporte</option>
                                </select>
                                <div class="invalid-feedback"> Please select a valid type.</div>
                        </div>

                        <div class="col-md-5">
                            <label for="validationCustom03" class="form-label">Número del documento</label>
                            <input type="text" class="form-control" id="validationCustom03" required/>
                            <div class="invalid-feedback">Please provide a number document type.</div>
                        </div>
                        
                        <div class="col-md-5">
                            <label for="validationCustom05" class="form-label">Fecha de expedición del documento</label>
                            <input type="text" class="form-control" id="validationCustom05" required/>
                            <div class="invalid-feedback">Please provide a valid date.</div>
                        </div>

                        <div class="col-md-5">
                            <label for="validationCustom05" class="form-label">Fecha de nacimiento</label>
                            <input type="text" class="form-control" id="validationCustom05" required/>
                            <div class="invalid-feedback">Please provide a valid date.</div>
                        </div>

                        <div class="col-md-5">
                            <label for="validationCustom05" class="form-label">Contraseña</label>
                            <input type="password"class="form-control" id="validationCustom05" required/>
                            <div class="invalid-feedback">Please provide a valid password.</div>
                        </div>

                        <div class="col-md-5">
                            <label for="validationCustom05" class="form-label">Confirmar contraseña</label>
                            <input type="password"class="form-control" id="validationCustom05" required/>
                            <div class="invalid-feedback">Please provide a valid password.</div>
                        </div>
                        
                        <div class="col-10">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                <label class="form-check-label" for="invalidCheck">Acepta los términos y condiciones</label>
                                <div class="invalid-feedback">You must agree before submitting.</div>
                            </div>
                        </div>
                        
                        <div class="col-10">
                            <button class="btn btn-primary" type="submit" to="/Login">Submit form</button>
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

export default CrearUsuario