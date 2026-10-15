export default function Seccion({ children, className = '', titulo = '' }) {
    return (
        <div>
            {/* Titulo de la seccion */}
            {titulo ? (
                <div className="w-full px-2 py-1 border-t border-cyber-cyan bg-cyber-bg/70">
                    <span className="text-cyber-text">{titulo}</span>
                </div>
            ) : (
                <span className="w-full flex border-b border-cyber-red"></span>
            )}

            {/* Muestra el contenido interior */}
            <div className={`p-3 ${className}`}>
                {children}
            </div>
        </div>
    )
}