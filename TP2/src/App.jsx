import { useState } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx'
import Servicios from './pages/Servicios.jsx'
import Contacto from './pages/Contacto.jsx'
import Navbar from './components/Navbar.jsx'
import NotFound from './pages/NotFound.jsx';
import ScrollArea from './components/ScrollArea.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  return (
    <HashRouter>
      <div className="h-dvh overflow-hidden bg-cyber-screen font-cyber selection:bg-cyber-cyan selection:text-cyber-void">

        <Navbar paginaActual={paginaActual} setPaginaActual={setPaginaActual} />

        <ScrollArea className="mx-auto mt-12 md:mt-16 w-[calc(100%-2rem)] max-w-6xl h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)]">
          <div className="min-h-full px-4 pb-6 flex flex-col justify-between md:justify-evenly">
            <main className="w-full mx-auto md:mb-auto md:px-6 pt-8 pb-12 flex flex-col items-center">
              <Routes>
                <Route path="/" element={<Navigate to="/inicio" replace />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </ScrollArea>

      </div>
    </HashRouter>
  );
}
