import logo from '../states/logo.png'
import {Link} from 'react-router-dom'

const NavbarHome = () => {
    return (
        <div className="navbar">
            <Link to='/'>
                <img src={logo} alt="" width="60" height="48" />
                <span class="fs-2 fw-bold text-light d-inline-block">Oroplas</span>
                <span Class='d-inline-block'> </span>
                <span class="fs-5 text-light d-inline-block">Subastas</span>
            </Link>
           
           <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link active text-light" to='/'>Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/Login">Iniciar Sesión</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/Conditions">Términos y Condiciones</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarHome