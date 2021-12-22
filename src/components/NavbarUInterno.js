import logo from '../states/logo.png'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'

const NavbarUInterno = () => {
    return(
        <div className="navbar">
            <a>
            <Link to="/">
                <img src={logo} alt="" width="60" height="48" />
                <span className="fs-2 fw-bold text-light d-inline-block">Oroplas</span>
                <span className="d-inline-block"> </span>
                <span className="fs-5 text-light d-inline-block">Subastas</span>
            </Link>
            </a>
            <button href="" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link disabled text-uppercase">
                        <span><FaIcons.FaUserTie className="me-2" />Usuario Interno</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavbarUInterno