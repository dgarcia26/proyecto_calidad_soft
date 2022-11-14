import React, { useState } from 'react'
import {db} from '../firebase';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom'

const Formulario = () => {

const [nombre, setNombre] = useState('')
const [apellido, setApellido] = useState('')
const [celular, setCelular] = useState('')
const [email, setEmail] = useState('')
const [direccion, setDireccion] = useState('')
const [ciudad, setCiudad] = useState('')
const [solicitud, setSolicitud] = useState('')
const [listaTiquet, setlistaTiquet] = useState([])
const [modoEdicion, setModoEdicion] = useState(false)
const [id, setId] = useState('')



//-----inicio de eliminar----------------------
/*const eliminar = async id =>{
  try{
      await deleteDoc(doc(db, 'Tiquet', id))
  }catch(error){
      console.log(error)
  }
}*/
//-----fin de eliminar----------------------
//-----inicio de guardar tiquet------------
const guardarTiquet = async (e) => {
  e.preventDefault()

  try{
     //const imageUrl = await obtenerImagen();
     //console.log(imageUrl)
      const data = await addDoc(collection(db, 'Tiquet'),{
          nombrePersona:nombre,
          apellidoPersona: apellido,
          celularPersona: celular,
          emailPersona: email,
          direccionPersona: direccion,
          ciudadPersona: ciudad,
          solicitudPersona: solicitud,
          //agregar mas campo
          //imageUrl
      })
      setlistaTiquet([
          ...listaTiquet,
          {nombrePersona:nombre, apellidoPersona: apellido, celularPersona: celular, emailPersona: email, direccionPersona: direccion, ciudadPersona: ciudad,
              solicitudPersona: solicitud, id:data.id}
      ])

      setNombre('')
      setApellido('')
      setCelular('')
      setEmail('')
      setDireccion('')
      setCiudad('')
      setSolicitud('')

  }catch(error){
      console.log(error)
  }
}
//------fin de guardar------

const editarTiquet = async (e) => {
  e.preventDefault()
  try{
      //const imageUrl2 = await obtenerImagen();
      const docRef = doc(db, 'Tiquet', id);
      await updateDoc(docRef, {
          
          nombrePersona:nombre,
          apellidoPersona: apellido,
          celularPersona: celular,
          emailPersona: email,
          direccionPersona: direccion,
          ciudadPersona: ciudad,
          solicitudPersona: solicitud,
                    
      })
      

      const nuevoArray = listaTiquet.map(
          item => item.id === id ? {id: id, nombrePersona:nombre, apellidoPersona: apellido, celularPersona: celular, emailPersona: email, direccionPersona: direccion, ciudadPersona: ciudad,
              solicitudPersona: solicitud
          //mas iten
          } : item
      )
      
      setlistaTiquet(nuevoArray)
      setNombre('')
      setApellido('')
      setCelular('')
      setEmail('')
      setDireccion('')
      setCiudad('')
      setSolicitud('')
      setId('')
      setModoEdicion(false)

  }catch(error){
      console.log(error)
  }
}

//-----fin de editar

const cancelar = () =>{
  setModoEdicion(false)
  setNombre('')
  setApellido('')
  setCelular('')
  setEmail('')
  setDireccion('')
  setCiudad('')
  setSolicitud('')
  setId('')
}

  return (
    <div>
        <div className="row">
            <div className='col-4'></div>
            <div className='col-4'>
                
            <form className='container justify-content-center' onSubmit={modoEdicion ? editarTiquet : guardarTiquet}>
                <h3>Nuevo Servicio</h3>
                <input type="text" 
                className="form-control mb-3 text-center" 
                placeholder='Ingrese Nombre'
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)} required
                />
                 <input type="text" 
                className="form-control mb-3 text-center" 
                placeholder='Ingrese Apellido'
                value={apellido}
                onChange={(e)=>setApellido(e.target.value)} required
                />                  
                <input type="text" 
                className="form-control mb-3 text-center" 
                placeholder='Ingrese Celular'
                value={celular}
                onChange={(e)=>setCelular(e.target.value)} required
                />
                <input type="text" 
                className="form-control mb-3 text-center" 
                placeholder='Ingrese Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)} required
                />
                <input type="text" 
                className="form-control mb-3 text-center" 
                placeholder='Direccion'
                value={direccion}
                onChange={(e)=>setDireccion(e.target.value)} required
                />
                <input type="text" 
                className="form-control mb-3 text-center" 
                placeholder='Ciudad'
                value={ciudad}
                onChange={(e)=>setCiudad(e.target.value)} required
                />
                <input type="text" 
                className="form-control mb-3 text-center" 
                placeholder='Ingrese Solicitud'
                value={solicitud}
                onChange={(e)=>setSolicitud(e.target.value)} required
                />
                {
                  modoEdicion ?
                  (
                      <>
                          <button
                          className='btn btn-warning btn-block'
                          on='submit'>Editar</button>
                          <Link to="/Servicios"><button
                          className='btn btn-dark btn-block mx-2'
                          onClick={()=>cancelar()}>Cancelar</button></Link>
                      </>
                  )
                  :                    
                  <button 
                  type='submit'
                  className='btn btn-primary btn-block'>
                  Agregar
                  </button>
                                   
                }
                <Link to="/Servicios"><button
                          className='btn btn-dark btn-block mx-2'
                          onClick={()=>cancelar()}>Cancelar</button></Link>
                
            </form>
            </div>
            </div>
    </div>
  )
}

export default Formulario