export default function Input({ label, type, optional, placeHolder, error, multiline = false, ...rest }) {
    const inputId = rest.id ?? rest.name ?? label;
    const errorId = `${inputId}-error`;
    const Field = multiline ? 'textarea' : 'input';
    return (
        <div className="group font-cyber" data-purpose="form-group-name">

            {/* Titulo del Input */}
            <div className="flex items-center justify-between gap-3 text-sm tracking-wider">
                <label htmlFor={inputId} className={`${error ? 'text-cyber-red' : 'text-cyber-red-dim group-focus-within:text-cyber-red'} flex items-center gap-1.5 uppercase transition-colors duration-200`}>
                    {label}
                </label>
                <span className="text-xs text-cyber-muted uppercase">
                    {optional ? "Opcional" : "Requerido"}
                </span>
            </div>

            {/* Input */}
            <div className="cyber-input-frame" data-invalid={error ? 'true' : undefined}>
                <Field
                    className={`relative block w-full min-h-12 border-0 bg-transparent pl-3.5 pr-6 py-2.5 text-base text-cyber-text placeholder:text-cyber-red-dim caret-cyber-red focus:outline-none ${multiline ? 'resize-y whitespace-pre-wrap wrap-anywhere' : ''}`}
                    placeholder={placeHolder}
                    type={multiline ? undefined : type}
                    rows={multiline ? 4 : undefined}
                    {...rest}
                    id={inputId}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error?.message ? errorId : undefined}
                />
            </div>

            {/* Mensaje de Error */}
            {error?.message && (
                <div>
                    {/* Un toque de animación para que el mensaje de error aparezca con estilo */}
                    <p id={errorId} role="alert" className="text-xs text-cyber-red flex items-center gap-1 mt-1">
                        <span className="font-bold">{error.message}</span>
                    </p>
                </div>
            )}
        </div>
    );
}
