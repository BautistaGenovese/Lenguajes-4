import { useNavigate } from 'react-router-dom';

export default function Navbar({ paginaActual, setPaginaActual }) {

    const navigate = useNavigate();

    const enlaces = [
        { id: 'inicio', route: '/inicio' },
        { id: 'servicios', route: '/servicios' },
        { id: 'contacto', route: '/contacto' },
    ];

    return (
        <nav className="bg-zinc-950/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-zinc-800/80 flex items-center gap-1 font-mono text-xs">
            {enlaces.map((enlace) => (
                <button
                    key={enlace.id}
                    onClick={() => { navigate(enlace.route); setPaginaActual(enlace.id) }}
                    className={`px-4 py-1.5 rounded-full transition-all duration-150 ${paginaActual === enlace.id
                            ? 'bg-white text-black font-semibold shadow-sm'
                            : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                        }`}
                >
                    {enlace.route}
                </button>
            ))}
        </nav>
    );
}