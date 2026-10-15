import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ paginaActual, setPaginaActual }) {
    const navigate = useNavigate();
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const buttonsRef = useRef({});

    const enlaces = [
        { id: 'inicio', route: '/inicio' },
        { id: 'servicios', route: '/servicios' },
        { id: 'contacto', route: '/contacto' },
    ];

    useEffect(() => {
        const currentBtn = buttonsRef.current[paginaActual];
        if (currentBtn) {
            setPillStyle({
                left: currentBtn.offsetLeft,
                width: currentBtn.offsetWidth,
                opacity: 1,
            });
        }
    }, [paginaActual]);

    return (
        <nav className="fixed top-8 inline-flex  z-50 items-center gap-1 bg-zinc-950/70 backdrop-blur-md p-1.5 rounded-full border border-zinc-800/80 font-mono text-xs shadow-2xl">

            {/* Pastilla deslizante */}
            <span
                className="absolute top-1.5 bottom-1.5 left-0 bg-white rounded-full transition-all duration-300 ease-out shadow-sm pointer-events-none"
                style={{
                    transform: `translateX(${pillStyle.left}px)`,
                    width: `${pillStyle.width}px`,
                    opacity: pillStyle.opacity,
                }}
            />

            {enlaces.map((enlace) => (
                <button
                    key={enlace.id}
                    ref={(el) => (buttonsRef.current[enlace.id] = el)}
                    onClick={() => {
                        navigate(enlace.route);
                        setPaginaActual(enlace.id);
                    }}
                    type="button"
                    className={`relative z-10 px-4 py-1.5 rounded-full transition-colors duration-200 cursor-pointer ${paginaActual === enlace.id
                        ? 'text-black font-semibold'
                        : 'text-zinc-400 hover:text-white'
                        }`}
                >
                    {enlace.route}
                </button>
            ))}
        </nav>
    );
}

export function NavbarCyberpunk({ paginaActual, setPaginaActual }) {
    const navigate = useNavigate();
    const buttonsRef = useRef({});
    const ahora = new Date();

    const enlaces = [
        { id: 'inicio', route: '/inicio' },
        { id: 'servicios', route: '/servicios' },
        { id: 'contacto', route: '/contacto' },
    ];

    useEffect(() => {
        const currentBtn = buttonsRef.current[paginaActual];
    }, [paginaActual]);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 flex h-16 gap-1 justify-center bg-cyber-void/65 backdrop-blur-md p-3 pb-0 font-cyber text-lg font-medium">
            <div className='mx-auto px-4 py-1.5 grow border-b italic border-cyber-red-dim'>
                <div className='flex gap-1 items-start justify-start text-cyber-green'>
                    <h3 className='text-2xl'>LENGUAJES</h3><span>IV</span>
                </div>
            </div>
            {enlaces.map((enlace) => (
                <button
                    key={enlace.id}
                    ref={(el) => (buttonsRef.current[enlace.id] = el)}
                    onClick={() => {
                        navigate(enlace.route);
                        setPaginaActual(enlace.id);
                    }}
                    type="button"
                    className={`px-4 py-1.5 border-b-2 transition-colors duration-200 cursor-pointer uppercase ${paginaActual === enlace.id
                        ? 'text-cyber-cyan border-cyber-cyan'
                        : 'text-cyber-red-dim hover:text-cyber-cyan border-b border-cyber-red-dim'
                        }`}
                >
                    {enlace.id}
                </button>
            ))}
            <div className='mx-auto px-4 py-1.5 grow text-xl border-b border-cyber-red-dim'>
                <div className='flex gap-3 items-center italic justify-end'>
                    <span className='text-cyber-red-dim'>{ahora.getHours()}<span className='animate-pulse'>:</span>{ahora.getMinutes()}</span>
                    <span className='text-cyber-red-dim'>{ahora.getDate()}<span className='animate-pulse'>/</span>{ahora.getMonth()}<span className='animate-pulse'>/</span>{ahora.getFullYear().toString().slice(-2)}</span>
                </div>
            </div>
        </nav>
    )
}
