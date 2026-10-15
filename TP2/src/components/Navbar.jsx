import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [ahora, setAhora] = useState(new Date());

    // Actualiza la hora sin recargar la pagina
    useEffect(() => {
        const reloj = setInterval(() => setAhora(new Date()), 1000);
        return () => clearInterval(reloj);
    }, []);

    const enlaces = [
        { id: 'inicio', route: '/inicio' },
        { id: 'servicios', route: '/servicios' },
        { id: 'contacto', route: '/contacto' },
    ];

    return (
        <nav aria-label="Navegación principal" className="fixed inset-x-0 top-0 z-50 flex h-12 md:h-16 gap-1 justify-center items-end bg-cyber-void/65 backdrop-blur-md px-3 font-cyber text-base md:text-lg font-medium">
            {/* Nombre y barra decorativa */}
            <div className='hidden md:block mx-auto px-4 py-1.5 grow border-b border-cyber-red-dim'>
                <div className='hidden md:flex flex-col text-cyber-green'>
                    <div className='flex gap-2 items-end justify-start'>
                        <h2 className='text-2xl'>LENGUAJES</h2><span>IV</span>
                    </div>
                    <div className='w-32 flex flex-row gap-0.5'>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="flex-1 h-1 bg-cyber-green" />
                        ))}
                        <div className="flex-1 h-1 bg-cyber-green animate-pulse" />
                        <div className="flex-1 h-1 bg-cyber-green/10" />
                        <div className="flex-1 h-1 bg-cyber-green/10" />
                    </div>
                </div>
            </div>
            {/* Enlaces a las paginas */}
            <div className='flex flex-row gap-1'>
                {enlaces.map((enlace) => (
                    <NavLink
                        key={enlace.id}
                        to={enlace.route}
                        className={({ isActive }) => `text-center px-3 md:px-4 py-1.5 border-b-2 min-w-23 md:min-w-28 transition-colors duration-200 uppercase ${isActive
                            ? 'text-cyber-cyan border-cyber-cyan'
                            : 'text-cyber-red-dim hover:text-cyber-cyan border-cyber-red-dim'
                            }`}
                    >
                        {enlace.id}
                    </NavLink>
                ))}
            </div>
            {/* Hora y fecha */}
            <div className='hidden md:block mx-auto px-4 py-1.5 grow text-xl border-b border-cyber-red-dim'>
                <div className='hidden md:flex gap-3 items-center italic justify-end'>
                    <span className='text-cyber-red-dim'>{String(ahora.getHours()).padStart(2, '0')}<span className='text-cyber-red animate-blink'>:</span>{String(ahora.getMinutes()).padStart(2, '0')}</span>
                    <span className='text-cyber-red-dim'>{ahora.getDate()}<span className='text-cyber-red'>/</span>{ahora.getMonth() + 1}<span className='text-cyber-red'>/</span>{ahora.getFullYear().toString().slice(-2)}</span>
                </div>
            </div>
        </nav>
    )
}
