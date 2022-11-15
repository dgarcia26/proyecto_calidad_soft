import React from 'react'

const Sesion = () => {
  return (
    <div>
          <form class="form-signin">
              
              <h1 class="h3 mb-3 font-weight-normal">Ingrese</h1>
              <input type="email" id="inputEmail" class="form-control text-center" placeholder="Email address" required="" autofocus="" /><br />
              <input type="password" id="inputPassword" class="form-control text-center" placeholder="Password" required="" />
              <div class="checkbox mb-3">
                  <label>
                      <input type="checkbox" value="remember-me" /> Recordar
                  </label>
              </div>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
              <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
          </form>






    </div>
  )
}

export default Sesion