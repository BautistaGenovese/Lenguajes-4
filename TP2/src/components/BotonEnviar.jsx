import { useState, useEffect } from 'react';

// Cuadros clásicos del spinner de CLI / Vite (dots braille)
const FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export default function BotonEnviar({ estado }) {
    const estaCargando = estado === 'cargando';
    const estaEnviado = estado === 'enviado';
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        if (!estaCargando) return;

        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % FRAMES.length);
        }, 80);

        return () => clearInterval(interval);
    }, [estaCargando]);

    return (
        <button
            id="submit-btn"
            type="submit"
            disabled={estaCargando || estaEnviado}
            className={`group w-full h-12 sm:h-13 font-mono text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md tracking-tight ${estaEnviado
                    ? 'text-zinc-300 text-black border border-emerald-400 cursor-default'
                    : estaCargando
                        ? 'text-zinc-300 border border-blue-400 cursor-wait'
                        : 'bg-white hover:bg-neutral-200 active:scale-[0.99] text-black border border-white cursor-pointer'
                }`}
        >
            {estaCargando ? (
                <div className="flex items-center gap-2">
                    <span className="select-none inline-block w-3 text-center">
                        {FRAMES[frameIndex]}
                    </span>
                    <span><span className='text-blue-400 font-bold'>[POST]</span> Enviando...</span>
                </div>
            ) : estaEnviado ? (
                <>
                    <svg className="w-4 h-4 text-emerald-400 hidden md:inline" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span  className=''>
                        <span className='font-bold text-emerald-400'>[STATUS_200]</span> Mensaje enviado
                    </span>
                </>
            ) : (
                <>
                    <span>Enviar mensaje</span>
                    <svg
                        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </>
            )}
        </button>
    );
}