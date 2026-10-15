export function ContenedorPagina({ titulo, archivo, descripcion, children }) {
    return (
        <div className="w-full font-cyber">
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
            {children}
        </div>
    );
}