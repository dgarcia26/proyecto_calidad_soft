import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">Cualitysoft</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" class="nav-link active" aria-current="page">Inicio</Link>
                    <Link to="/Servicio" class="nav-link">Servicio</Link>
                    <Link to="/Pagos" class="nav-link">Pagos</Link>
                </div>
                </div>
            </div>
        </nav>
        <main className="App-content">
          <Outlet />
        </main>
    </div>
  )
}

export default Header