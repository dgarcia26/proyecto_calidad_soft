import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**conectar la app por URL */
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Servicios from './components/Servicios';
import Pagos from './components/Pagos';
import Inicio from './components/Inicio';
import Page404 from './components/Page404';
import Formulario from './components/Formulario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
                  <Route path='/' element={<App />} >
                    <Route index
                          element={<Inicio />}
                    />
                    <Route path='Servicios' element={<Servicios />} />
                    <Route path='Pagos' element={<Pagos />} >
                    </Route>
                    <Route path='Formulario' element={<Formulario />} />
                    <Route path='*'
                        element={
                          <Page404/>
                        }>
                    </Route>
                  </Route>
            </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
