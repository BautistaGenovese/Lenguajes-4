// Datos del trabajo y enlace al repositorio
export default function Footer() {
    return (
        <footer className="w-full px-2 md:px-6 font-cyber">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-cyber-red-dim/50 py-2 text-xs tracking-wide text-cyber-muted">
                <span>Bautista Genovese</span>
                <span>Lenguajes IV <span className="text-cyber-red-dim">//</span> TP2, TP3 y TP4 · React</span>
                <a
                    href="https://github.com/BautistaGenovese/Lenguajes-4/tree/main/TP2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyber-cyan hover:text-cyber-text transition-colors focus-visible:outline-1 focus-visible:outline-cyber-cyan focus-visible:outline-offset-2"
                >
                    <span>GitHub</span>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                    <span className="sr-only"> (abre en otra pestaña)</span>
                </a>
            </div>
        </footer>
    );
}
