import { useNavigate } from 'react-router-dom';

export default function Navbar({ paginaActual, setPaginaActual }) {
    const navigate = useNavigate();
    const ahora = new Date();

    const enlaces = [
        { id: 'inicio', route: '/inicio' },
        { id: 'servicios', route: '/servicios' },
        { id: 'contacto', route: '/contacto' },
    ];

    return (
        <nav className="fixed inset-x-0 top-0 z-50 flex h-12 md:h-16 gap-1 justify-center items-end bg-cyber-void/65 backdrop-blur-md px-3 py-0 font-cyber text-md md:text-lg font-medium">
            <div className='mx-auto py-auto px-4 py-1.5 grow border-b border-cyber-red-dim'>
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
            <div className='flex flex-row gap-1'>
                {enlaces.map((enlace) => (
                    <button
                        key={enlace.id}
                        onClick={() => {
                            navigate(enlace.route);
                            setPaginaActual(enlace.id);
                        }}
                        type="button"
                        className={`px-4 py-1.5 border-b-2 min-w-25 md:min-w-28 transition-colors duration-200 cursor-pointer uppercase ${paginaActual === enlace.id
                            ? 'text-cyber-cyan border-cyber-cyan'
                            : 'text-cyber-red-dim hover:text-cyber-cyan border-cyber-red-dim'
                            }`}
                    >
                        {enlace.id}
                    </button>
                ))}
            </div>
            <div className='mx-auto px-4 py-1.5 grow text-xl border-b border-cyber-red-dim'>
                <div className='hidden md:flex gap-3 items-center italic justify-end'>
                    <span className='text-cyber-red-dim'>{ahora.getHours()}<span className='text-cyber-red animate-blink'>:</span>{ahora.getMinutes()}</span>
                    <span className='text-cyber-red-dim'>{ahora.getDate()}<span className='text-cyber-red'>/</span>{ahora.getMonth()}<span className='text-cyber-red'>/</span>{ahora.getFullYear().toString().slice(-2)}</span>
                </div>
            </div>
        </nav>
    )
}
