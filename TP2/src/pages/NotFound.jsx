import { ContenedorPagina } from "../components/Contenedores";

export default function NotFound() {
    return (
        <div className="w-full bg-zinc-950 p-6 md:p-12 border border-zinc-800/80">
            {/* Barra de direcciones */}
            <div className="flex justify-center md:justify-start mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                    <span className="text-zinc-500">Error:</span>
                    <span className="text-zinc-300 font-medium">Page Not Found</span>
                </div>
            </div>
            {/* Titulo de la pagina*/}
            <div className="inline-flex w-full items-stretch gap-2 mb-6">
                <h1 className="text-4xl md:text-5xl font-mono font-normal text-white">
                    404 Not Found
                </h1>
            </div>
            {/* Texto de descripcion*/}
            <p className="text-sm font-mono text-zinc-400 mb-6">
                Página no encontrada. Verifica que la URL esté escrita correctamente.
            </p>
            {/* Componente */}
            <span className="font-mono text-xs w-full p-3 border border-dashed border-zinc-600 flex justify-start gap-2">
                <span className="text-zinc-500">[Error]</span>
                <span className="text-zinc-300 font-medium">Página no disponible</span>
            </span>
        </div>
    );
}