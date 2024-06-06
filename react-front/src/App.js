import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Inicio from './pages/Inicio';
import LavaConNosotros from './pages/LavaConNosotros';
import Sedes from './pages/Sedes';
import Reparacion from './pages/Reparacion';
import Nosotros from './pages/Nosotros';
import IniciarSesion from './pages/IniciarSesion';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Inicio />}/>
            <Route path='/LavaConNosotros' element={<LavaConNosotros/>}/>
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
