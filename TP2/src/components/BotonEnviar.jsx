export default function BotonEnviar({ estado }) {
    const estaCargando = estado === 'cargando';
    const estaEnviado = estado === 'enviado';

    return (
        <button
            id="submit-btn"
            type="submit"
            disabled={estaCargando || estaEnviado}
            className={`group w-full h-12 sm:h-13 font-mono text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md tracking-tight ${
                estaEnviado
                    ? 'bg-emerald-500 text-black border border-emerald-400 cursor-default'
                    : estaCargando
                    ? 'bg-zinc-800 text-zinc-400 border border-zinc-700 cursor-wait'
                    : 'bg-white hover:bg-neutral-200 active:scale-[0.99] text-black border border-white cursor-pointer'
            }`}
        >
            {estaCargando ? (
                <>
                    <svg className="animate-spin w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>[POST]: Despachando mensaje...</span>
                </>
            ) : estaEnviado ? (
                <>
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">[STATUS_200]: Mensaje enviado</span>
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