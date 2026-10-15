import { Link } from "react-router-dom";

// Pagina que se muestra cuando la ruta no existe
export default function NotFound() {
    return (
        <section aria-labelledby="error-title" className="w-full max-w-3xl p-6 md:p-10">
            <div className="flex items-center gap-3 border-b border-cyber-red-dim pb-3 text-xs uppercase tracking-widest text-cyber-red">
                <span className="h-2 w-2 bg-cyber-red" aria-hidden="true" />
                <span>Error de navegación</span>
                <span className="ml-auto text-cyber-muted">ERR_404</span>
            </div>

            <div className="py-8 md:py-12">
                <p aria-hidden="true" className="text-8xl md:text-9xl font-semibold leading-none tracking-tight text-cyber-red">404<span className="text-cyber-cyan">_</span></p>
                <h1 id="error-title" className="mt-5 text-2xl md:text-3xl font-semibold uppercase text-cyber-yellow">
                    Página no encontrada
                </h1>
                <p className="mt-3 max-w-md text-cyber-muted">
                    Esta dirección no está disponible. Revisá la URL o volvé al inicio para continuar explorando.
                </p>
            </div>

            <div className="border-t border-cyber-red-dim pt-5">
                <Link to="/inicio" className="border-cyberpunk-red-dim inline-flex items-center gap-3 px-4 py-2 font-semibold uppercase text-cyber-cyan focus-visible:outline-2 focus-visible:outline-cyber-cyan focus-visible:outline-offset-4">
                    <span aria-hidden="true">←</span> Volver al inicio
                </Link>
            </div>
        </section>
    );
}
