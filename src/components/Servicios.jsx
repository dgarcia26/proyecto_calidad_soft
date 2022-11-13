import React from 'react'
import { Link } from 'react-router-dom'
import listaTiquet from './Formulario'


const Servicios = () => {
  return (
    <div>
      <h1>Servicios</h1>
      <hr />
      <div className='row'>
        <div className="col-8">
          <h3>Lista de Servicios</h3>
          <ul className="list-group">
                {
                     listaTiquet.map(item => (
                         <li className="list-group-item card" key={item.id}>
                            
                            
                            <div className="row">
                                <div className="col-8">
                                    <h6 className="lead">Nombre: {item.nombrePersona}</h6>
                                    <h6 className="lead">Apellido: {item.apellidoPersona}</h6>
                                    <h6 className="lead">Celular: {item.celularPersona}</h6>
                                    <h6 className="lead">Email: {item.emailPersona}</h6>
                                    <h6 className="lead">Direccion: {item.cargoPersona}</h6>
                                    <h6 className="lead">Ciudad: {item.despachoPersona}</h6>
                                    <h6 className="lead">Solicitud: {item.solicitudPersona}</h6>
                                </div>
                            </div>  
                                                          
                             
                         </li>
                     ))        
                }
            </ul>
          <div class="card">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">Titulo Servicio</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <Link to="/mas"><button class="btn btn-primary">más detalles</button></Link>
            </div>
          </div>
        </div>
        <div className='col-4'>
        <h3 className='container'>Nuevo Servicio</h3>
        <div className='new-serv'>
        <Link to="/Formulario"><button type="button" class="btn btn-outline-primary sr-only">Agregar</button></Link>
        </div>
        </div>
      </div>
      






    </div>
  )
}

export default Servicios