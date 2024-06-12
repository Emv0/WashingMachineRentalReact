import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout.js';
import Inicio from './pages/Inicio/Inicio.js';
import Reserva from './pages/Reserva/Reserva.js';
import Sedes from './pages/Sedes';
import Reparacion from './pages/Reparacion/Reparacion.js';
import Nosotros from './pages/Nosotros/Nosotros.js';
import IniciarSesion from '../src/pages/InisiarSesion/IniciarSesion.js';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Inicio />}/>
            <Route path='/Reserva' element={<Reserva/>}/>
            <Route path='/Sedes' element={<Sedes/>}/>
            <Route path='/Reparacion' element={<Reparacion/>}/>
            <Route path='/Nosotros' element={<Nosotros/>}/>
            <Route path='/IniciarSesion' element={<IniciarSesion/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
