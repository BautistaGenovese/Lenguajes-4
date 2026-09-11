export default function Contacto() {
    return (
        <div className="w-full bg-white/90 backdrop-blur-sm rounded-3xl p-10 sm:p-12 text-center border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-sky-50 text-sky-700 border border-sky-100/80 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Página Actual
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 mb-4">Contacto</h1>
            <p className="text-sm text-slate-500">Canales y vías de comunicación directa.</p>
        </div>
    );
}