export default function Input({ label, type, optional, placeHolder, error, ...rest }) {
    return (
        <div className="space-y-1.5 font-mono" data-purpose="form-group-name">

            {/* Titulo del Input */}
            <div className="flex flex-col md:flex-row-reverse md:justify-between text-xs">
                <span className={`text-xs tracking-wider ${error ? 'text-rose-300' : 'text-neutral-500'} transition-colors duration-200 ease-in-out`}>
                    {optional ? "optional" : "required"}
                </span>
                <label className={`${error ? 'text-rose-300' : 'text-neutral-300'} flex items-center gap-1.5 transition-colors duration-200 ease-in-out`}>
                    <span className={`${error ? 'text-rose-400' : 'text-emerald-400'} transition-colors duration-200`}>const</span>
                    <span>{label}</span>
                    <span className={`${error ? 'text-rose-400' : 'text-neutral-600'} transition-colors duration-200`}>: string</span>
                </label>
            </div>

            {/* Input */}
            <div className="relative">
                <input
                    className={`w-full bg-[#111113] border px-3.5 py-2.5 text-xs sm:text-sm text-neutral-200 placeholder-neutral-600 transition-all duration-200 ease-in-out focus:outline-none focus:border-dashed 
                            ${error
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-neutral-800 focus:border-zinc-600'
                        }`}
                    placeholder={placeHolder}
                    type={type}
                    {...rest}
                />
            </div>

            {/* Mensaje de Error */}
            {error?.message && (
                <div>
                    {/* Un toque de animación para que el mensaje de error aparezca con estilo */}
                    <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1 animate-fade-in">
                        <span className="font-bold">&gt;&gt; {error.message}</span>
                    </p>
                </div>
            )}
        </div>
    );
}
