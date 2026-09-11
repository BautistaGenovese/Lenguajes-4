import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx'
import Servicios from './pages/Servicio.jsx'
import Contacto from './pages/Contacto.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {

  const [paginaActual, setPaginaActual] = useState('inicio');

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-rose-50/60 via-purple-50/50 to-sky-50/60 text-slate-700 flex flex-col justify-start gap-5 p-6 sm:p-10">

        <header className="w-full max-w-xl mx-auto pt-4 flex flex-col items-center">
          <Navbar paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
        </header>

        {/* Contenedor central con la página renderizada */}
        <Routes className="w-full max-w-md mx-auto my-auto py-12 flex flex-col items-center">

          <Route path='/' element={<Navigate to="/inicio" replace />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/contacto' element={<Contacto />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}
