import { useState } from 'react'
import { HashRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx'
import Servicios from './pages/Servicios.jsx'
import Contacto from './pages/Contacto.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  return (
    <HashRouter>
      <div className="min-h-screen bg-[#050505] bg-grid text-zinc-300 flex flex-col justify-start p-6 sm:p-10 selection:bg-white selection:text-black">

        <header className="w-full max-w-xl mx-auto pt-4 flex flex-col items-center">
          <Navbar paginaActual={paginaActual} setPaginaActual={setPaginaActual} />
        </header>

        <main className="w-full max-w-2xl mx-auto px-6 py-12 flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <footer className="w-full max-w-xl mx-auto py-12 text-center">
          <p className="text-[11px] font-mono text-zinc-600 tracking-wide">
            Bautista Genovese • Lenguajes 4 • Trabajo Práctico 2: React • <a href='https://github.com/BautistaGenovese/Lenguajes-4/tree/main/TP2' target='_blank' className='text-zinc-400'>Link GitHub</a>
          </p>
        </footer>

      </div>
    </HashRouter>
  );
}
