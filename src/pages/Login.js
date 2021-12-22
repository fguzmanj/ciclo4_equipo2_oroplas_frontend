import React from 'react'
import logo from '../states/logo.png'
import './Home.scss'

import { Link } from 'react-router-dom'
import NavbarHome from '../components/NavbarHome'




function Login() {
    return (
        <div>
           <NavbarHome /> 
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="card">
                <div className="contenedor">
                    <img src={logo} className="rounded mx-auto d-block" alt="" width="100" height="100"/>
                    <h5 class="card-title fw-bold text-center">Oroplas</h5>
                    <h6 class="card-subtitle mb-2 text-muted text-center">Acceder</h6>    
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="evalidationCustom01" class="form-label">Correo electrónico</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                                <div class="valid-feedback">Looks good!</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="passwordHelpInline"/>
                                <div id="passwordHelp" class="form-text">Su contraseña debe tener entre 8 y 20 caracteres.</div>
                            </div>

                            <div className="contenedorseg h-100">
                                <div className="d-grid gap-3 col-6 mx-auto d-inline-block">
                                    <Link to="/">
                                    <a class="btn btn-primary d-flex justify-content-center" type="submit">Siguiente</a>
                                    </Link>
                                    <Link to="/Registro">
                                    <a className="btn btn-outline-secondary d-flex d-inline-block justify-content-center">Crear cuenta</a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <Link to="/HomeAdmin">
                                    <li class="breadcrumb-item"><a href="">DashAdmin</a></li>
                                    </Link>
                                </ol>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <Link to="/HomeUInterno">
                                    <li class="breadcrumb-item"><a href="">DashUsuarioInterno</a></li>
                                    </Link>
                                </ol>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <Link to="/HomeUExterno">
                                    <li class="breadcrumb-item"><a href="">DashUsuarioExterno</a></li>
                                    </Link>
                                </ol>
                            </nav>

            </div>
     </div>
     </div>
    )
}

export default Login


