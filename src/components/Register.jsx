import React from 'react'

const Register = () => {
  return (
    <div>
        <h2>Registrese</h2>
        <div>
        <form class="form-signin">            
              
              <input type="text" id="inputText" class="form-control text-center" placeholder="Nombre" required="" autofocus="" /><br />
              <input type="text" id="inputText" class="form-control text-center" placeholder="Apellido" required="" autofocus="" /><br />
              <input type="tel" id="inputTel" class="form-control text-center" placeholder="Telefono" required="" autofocus="" /><br />
              <input type="email" id="inputEmail" class="form-control text-center" placeholder="Email address" required="" autofocus="" /><br />
              <input type="password" id="inputPassword" class="form-control text-center" placeholder="Password" required="" /><br />
              
              <button class="btn btn-lg btn-primary btn-block" type="submit">Guardar</button>
              <p class="mt-5 mb-3 text-muted">© 2022</p>
          </form>         
        </div>
    </div>
  )
}

export default Register