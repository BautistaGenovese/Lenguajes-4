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
        <nav className="relative inline-flex items-center gap-1 bg-zinc-950 p-1.5 rounded-full border border-zinc-800/80 font-mono text-xs">
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
                    className={`relative z-10 px-4 py-1.5 rounded-full transition-colors duration-200 cursor-pointer ${
                        paginaActual === enlace.id
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