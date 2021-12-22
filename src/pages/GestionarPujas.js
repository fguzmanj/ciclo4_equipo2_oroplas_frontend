import SidebarExterno from "../components/SidebarExterno"
import NavbarUExterno from "../components/NavbarUExterno"
import img_subasta_01 from '../states/img-subasta-01.jpg'

const GestionarSubasta = () => {
    return (
      <div>
        <div className="DashAdmin">
          <NavbarUExterno />
          <div className="flex">
            <SidebarExterno />
            <div className="container">
              
              <div class="row">
                <div class="col-md-4">
                  {/* <div class="box-header mt-4">
                    <h3 class="box-title">Gestionar puja</h3>
                  </div> */}
                  <div class="card card-primary card-outline">
                    <div class="card-body box-profile">
                      <div class="text-center">
                        <img class="profile-user-img img-fluid img-circle" src={img_subasta_01} alt="User profile picture" />
                      </div>

                      <h3 class="text-center mt-4">Descripción Producto</h3>

                      <p class="text-muted text-center">Código: SB-0268</p>

                      <div class="card">
                        <div class="card-header">
                          <p class="card-title text-center">
                            <i class="fas fa-text-width"></i>
                            Información general
                          </p>
                        </div>
                        <div class="card-body">
                          <dl class="row">
                            <dt class="col-sm-8">Precio actual:</dt>
                            <dd class="col-sm-4">$15.000</dd>
                            <dt class="col-sm-8">Incremento mínimo de oferta:</dt>
                            <dd class="col-sm-4">$500</dd>
                            
                          </dl>
                        </div>
                      </div>

                      <div class="col-12 mt-4">
                        <label for="inputAddress2" class="form-label"><b>Nueva oferta</b></label>
                        <input type="text" class="form-control" placeholder="Ingresar oferta" />
                      </div>

                      <a href="#" class="btn btn-primary btn-block mt-4"><b>Realizar oferta</b></a>
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