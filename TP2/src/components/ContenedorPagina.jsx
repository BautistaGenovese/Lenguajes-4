export default function ContenedorPagina({ titulo, archivo, descripcion }){
    return (
        <div className="w-full bg-zinc-950/70 backdrop-blur-sm p-10 sm:p-12 border border-zinc-800/80 shadow-2xl relative">
            {/* Barra de direcciones */}
            <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-zinc-800 bg-zinc-950 text-[11px] font-mono text-zinc-400" id="badge-pagina">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-zinc-500">~/src/pages/</span>
                    <span className="text-zinc-300 font-medium">{archivo}</span>
                </div>
            </div>
            {/* Titulo de la pagina*/}
            <div className="inline-flex w-full items-stretch gap-2 mb-6">
                <h1 className="text-4xl sm:text-5xl font-mono font-normal tracking-tight text-white">
                    {titulo}
                </h1>
                <span className="w-4 bg-zinc-300 animate-blink"></span>
            </div>
            {/* Texto de descripcion*/}
            <p className="text-sm font-mono text-zinc-400 max-w-sm mb-6">
                {descripcion}
            </p>
            {/* Componente */}
            <span className="font-mono text-xs w-full p-3 border border-dashed border-zinc-600 flex justify-start gap-2">
                <span className="text-zinc-500">[Componente]</span>
                <span className="text-zinc-300 font-medium">&lt;{titulo} /&gt;</span>
            </span>
        </div>
    );
}