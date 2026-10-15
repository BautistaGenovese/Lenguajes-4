export default function Boton({ children, largo = false, className = '', type = 'button', variant = 'default', estado = null, disabled = false, ...rest }){
    const cargando = estado === 'cargando';
    // Cambia el texto segun el estado del envio
    let etiqueta = children;
    if (cargando) etiqueta = 'Enviando…';
    if (estado === 'enviado') etiqueta = 'Mensaje enviado';
    if (estado === 'error') etiqueta = 'Reintentar envío';

    // Boton de busqueda
    if (variant === 'search') {
        return (
            <button {...rest} type={type} disabled={disabled || cargando} className={`game-search-submit ${className}`}>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                    <path d="M2 11 22 2 13 22 10 14 2 11Zm10 1 5-5-7 4 2 1Z" />
                </svg>
            </button>
        );
    }

    // Boton para volver al catalogo
    if (variant === 'back') {
        return (
            <button {...rest} type={type} disabled={disabled || cargando} aria-busy={cargando} className={`game-search-back-btn ${className}`}>
                <svg viewBox="0 0 24 24" width="23" height="23" fill="currentColor" aria-hidden="true">
                    <path d="m15 3-9 9 9 9h5l-9-9 9-9Z" />
                </svg>
                {children}
            </button>
        );
    }
    return(
        <button
            {...rest}
            type={type}
            disabled={disabled || cargando}
            aria-busy={cargando}
            data-estado={estado ?? undefined}
            className={`cyber-button inline-flex flex-col gap-1.5 items-center justify-center px-3 py-2 border-cyberpunk-red-dim text-cyber-cyan font-medium active:scale-98 ${largo ? 'w-full' : 'w-fit'} ${className}`}
        >
            <span aria-live="polite">{etiqueta}</span>
            {/* Barra indicadora del envio */}
            {estado && (
                <span className="cyber-button-progress" aria-hidden="true">
                    {Array.from({ length: 7 }, (_, index) => (
                        <span key={index} style={{ '--segment': index }} />
                    ))}
                </span>
            )}
        </button>
    )
}
