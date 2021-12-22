import {NavLink} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa' 
import user from '../states/user.png'
import { Link } from 'react-router-dom'

const SidebarInterno = () => {
    return(
        <div className="sidebar bg-light">
            <ul>
                <li>
                    <NavLink to="/HomeUInterno" exact className="text-dark rounded py-2 w-100 d-inline-block px-3"  activeClassName="active"><FaIcons.FaHome className="me-2" />Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/UInterno/CrearUsuario" exact className="text-dark rounded py-2 w-100 d-inline-block px-3"><FaIcons.FaUsers className="me-2"/>Crear Usuario</NavLink>
                </li>
                <li>
                    <NavLink to="/UInterno/CrearReportes" exact className="text-dark rounded py-2 w-100 d-inline-block px-3"><FaIcons.FaCloud className="me-2"/>Crear Reportes</NavLink>
                </li>
                
                <hr/>
                <div>
                    <Link to="/">
                        <a class=" align-items-center">
                            <img src={user} alt="" width="32" height="32"/>
                            <strong class="text-dark d-inline-block">Cerrar sesión</strong>
                            </a>
                    </Link>
                </div>
                <hr/>
            </ul>
        </div>
    )
}

export default SidebarInterno