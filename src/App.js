import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.scss'
import NavbarHome from './components/NavbarHome'
import Home from './pages/Home'
import Login from './pages/Login'
import Conditions from './pages/Conditions'
import Footer from './components/Footer'

import Registro from './pages/Registro'

import HomeAdmin from './pages/HomeAdmin'
import GestionarUsuario from './pages/GestionarUsuario'
import GestionarSubasta from './pages/GestionarSubasta'
import HistorialSubasta from './pages/HistorialSubasta'

import HomeUInterno from './pages/HomeUInterno'
import CrearUsuario from './pages/CrearUsuario'
import CrearReportes from './pages/CrearReportes'

import HomeUExterno from './pages/HomeUExterno'
import VerSubastas from './pages/VerSubastas'
import GestionarPujas from './pages/GestionarPujas'
import HistorialPujas from './pages/HistorialPujas'




function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Conditions' element={<Conditions />}></Route>
        
        <Route path='/Registro' element={<Registro />}></Route>

        <Route path="/HomeAdmin" element={<HomeAdmin/>} />
        <Route path="/Admin/GestionarUsuario" element={<GestionarUsuario />} />
        <Route path="/Admin/GestionarSubasta" element={<GestionarSubasta />} />
        <Route path="/Admin/HistorialSubasta" element={<HistorialSubasta />} />

        <Route path="/HomeUInterno" element={<HomeUInterno />} />
        <Route path="/UInterno/CrearUsuario" element={<CrearUsuario />} />
        <Route path="/UInterno/CrearReportes" element={<CrearReportes />} />

        <Route path="/HomeUExterno" element={<HomeUExterno />} />
        <Route path="/UExterno/VerSubastas" element={<VerSubastas />} />
        <Route path="/UExterno/GestionarPujas" element={<GestionarPujas />} />
        <Route path="/UExterno/HistorialPujas" element={<HistorialPujas />} />

        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
  )
}

export default App
