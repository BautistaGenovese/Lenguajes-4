export function ContenedorPagina({ titulo, archivo, descripcion, children }) {
    return (
        <div className="w-full border border-zinc-800/80 font-cyber">
            {/* Titulo de la pagina*/}
            <div className="p-4">
                {/* Titulo de la sección */}
                <h1 className="text-3xl md:text-4xl font-cyber font-semibold text-cyber-yellow mb-2">
                    {titulo}
                </h1>
                {/* Texto de descripcion*/}
                <p className="text-md text-cyber-cyan">
                    {descripcion}
                </p>
            </div>
            <div className="">
                {/* Titulo de la seccion */}
                <div className="w-full px-2 py-1 border-t border-cyber-cyan bg-cyber-bg">
                    <span className="text-cyber-text">Componente de Prueba</span>
                </div>

                {/* Muestra el contenido interior */}
                {children}
            </div>
        </div>
    );
}