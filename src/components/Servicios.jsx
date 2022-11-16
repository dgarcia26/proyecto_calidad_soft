import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore';
import {db} from '../firebase';


const Servicios = () => {

  const [listaTiquet, setlistaTiquet] = useState([])

  useEffect(()=>{
    const obtenerDatos = async () => {
        try{
            await onSnapshot(collection(db, "Tiquet"), (query)=>{
                setlistaTiquet(query.docs.map((doc)=>({...doc.data(), id:doc.id})))
            })
        }catch(error){
            console.log(error)
        }
    }
    obtenerDatos();
  }, [])

  


  return (
    <div>
      <h1>Servicios</h1>
      <hr />
      <div className='row'>
        <div className="col-9 container">
          <h3>Lista de Servicios</h3>
          <ul className="list-group">
                {
                     listaTiquet.map(item => (
                         <li className="list-group-item card" key={item.id}>
                                  
                                    <div className="card-header">
                                      <h5 class="card-title">{item.solicitudPersona}</h5>
                                    </div>
                                    <div className="card-body">
                                      <div className="card-title">
                                        <h6 className="lead"><b>Nombre:</b> {item.nombrePersona} {item.apellidoPersona}</h6>
                                        <h6 className="card-text">
                                          Solicitud: {item.solicitudPersona}
                                        </h6>
                                        <h6>Estado: </h6>
                                        <p>
                                          <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                          Ver más
                                          </button>
                                        </p>
                                        <div className='mas'>
                                          <div class="collapse collapse" id="collapseWidthExample">
                                            <div class="card card-body">
                                              Persona Asignada: --------------------------
                                            </div>
                                          </div>
                                        </div>                                        
                                      </div>
                                    </div>
                                  
                         </li>
                     ))        
                }
            </ul>          
        </div>
        <div className='col-3 container'>
        <h3 className='container'>Nuevo Servicio</h3>
        <div className='new-serv'>
        <Link to="/Formulario"><button type="button" class="btn btn-outline-primary sr-only nuevo">+ Agregar</button></Link>
        
        </div>
        </div>
      </div>
      






    </div>
  )
}

export default Servicios