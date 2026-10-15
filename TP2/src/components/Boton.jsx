export default function Boton({ children, largo = false, className = '', type = 'button', ...rest }){
    return(
        <button
            {...rest}
            type={type}
            className={`inline-flex items-center justify-center px-3 py-2 border-cyberpunk-red-dim text-cyber-cyan font-medium active:scale-98 ${largo ? 'w-full' : 'w-fit'} ${className}`}
        >
            {children}
        </button>
    )
}
