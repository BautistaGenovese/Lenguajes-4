export default function Seccion({ children, style = '' }) {
    return (
        <div>
            {/* Titulo de la seccion */}
            <div className="w-full px-2 py-1 border-t border-cyber-cyan bg-cyber-bg">
                <span className="text-cyber-text">Componente de Prueba</span>
            </div>

            {/* Muestra el contenido interior */}
            <div className={`p-3 ${style}`}>
                {children}
            </div>
        </div>
    )
}