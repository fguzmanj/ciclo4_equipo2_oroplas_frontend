import SidebarExterno from "../components/SidebarExterno"
import NavbarUExterno from "../components/NavbarUExterno"

const HistorialPujas = () => {
  return (
    <div>
      <div className="DashAdmin">
        <NavbarUExterno />
        <div className="flex">
          <SidebarExterno />
          <div className="container">
            <div class="row">
              <div class="box-header">
                <h3 class="box-title">Mis pujas realizadas</h3>
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
            <div class="row">
              <div class="col-md-6">
                <div class="box-header mt-4">
                  <h3 class="box-title">Historial de pujas</h3>
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Código</th>
                      <th scope="col">Descripción del producto</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">SB-0320</th>
                      <td>Diamante Wittelsbach-Graff </td>
                      <td>Ganada</td>
                    </tr>
                    <tr>
                      <th scope="row">SB-0190</th>
                      <td>Reloj Hallucination</td>
                      <td>Perdida</td>
                    </tr>
                    <tr>
                      <th scope="row">SB-0586</th>
                      <td>Collar L’Incomparable</td>
                      <td>Perdida</td>
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
      </div>
    </div>
  )
}

export default HistorialPujas