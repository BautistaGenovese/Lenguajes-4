import { useNavigate } from 'react-router-dom'; 

export default function Navbar({ paginaActual, setPaginaActual }) {

    const navigate = useNavigate();

    const enlaces = [
        { id: 'inicio', route: '/inicio' ,label: 'Inicio', activeColor: 'bg-rose-100 text-rose-800' },
        { id: 'servicios', route: '/servicios' ,label: 'Servicios', activeColor: 'bg-purple-100 text-purple-800' },
        { id: 'contacto', route: '/contacto' ,label: 'Contacto', activeColor: 'bg-sky-100 text-sky-800' },
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md px-3 py-2 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
            {enlaces.map((enlace) => (
                <button
                    key={enlace.id}
                    onClick={() => {navigate(enlace.route); setPaginaActual(enlace.id)}}
                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${paginaActual === enlace.id
                        ? `${enlace.activeColor} shadow-sm`
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                >
                    {enlace.label}
                </button>
            ))}
        </nav>
    );
}