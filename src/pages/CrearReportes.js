import SidebarInterno from "../components/SidebarInterno"
import NavbarUInterno from "../components/NavbarUInterno"

const CrearReportes = () => {
    return (
        <div>
            <div className="DashAdmin">
              <NavbarUInterno />
              <div className="flex">
                  <SidebarInterno /> 
                  <div className="container">


                          <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
         Pujas por Subasta
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">

      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Numero de subasta</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">ID del producto</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Pujas totales</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        
      </div>
    </div>
  </div>







  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Pujas Ganadoras
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">ID del producto</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Precio de venta</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre cliente</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Identificación</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Ciudad de residencia</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      </div>
    </div>
  </div>




  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Pujas Finalizadas
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Numero de subasta</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">ID del producto</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Pujas totales</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Pujas canceladas</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Pujas mayor</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">ID cliente</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Pujas menor</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">ID cliente</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default CrearReportes