import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Inicio from './pages/inicio/Inicio';
import ReservaYa from './pages/ReservaYa/ReservaYa';
import Reparaciones from './pages/Reparaciones/Reparaciones';
import Contactanos from './pages/Contactanos/Contactanos';



function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Inicio />}/>
            <Route path='/reservaYa' element={<ReservaYa/>}/>
            <Route path='/reparaciones' element={<Reparaciones/>}/>
            <Route path='/contactanos' element={<Contactanos/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
