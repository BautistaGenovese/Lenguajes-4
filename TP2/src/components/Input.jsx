import Boton from './Boton';

export default function Input({ label, type, optional, placeHolder, error, multiline = false, variant = 'default', actionDisabled = false, ...rest }) {
    const inputId = rest.id ?? rest.name ?? label;
    const errorId = `${inputId}-error`;
    const Field = multiline ? 'textarea' : 'input';
    // Input de busqueda con su boton de envio
    if (variant === 'search') {
        return (
            <div className="game-search-field font-cyber">
                <label htmlFor={inputId} className="sr-only">{label}</label>
                <div className="game-search-bar">
                    <input {...rest} id={inputId} type={type ?? 'search'}
                        placeholder={placeHolder} className="game-search-input" />
                    <Boton variant="search" type="submit" disabled={actionDisabled} aria-label={label} />
                </div>
            </div>
        );
    }
    return (
        <div className="font-cyber">

            {/* Titulo del Input */}
            <div className="flex items-center justify-between gap-3 text-sm tracking-wider">
                <label htmlFor={inputId} className="text-cyber-red uppercase">
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
                    <p id={errorId} role="alert" className="text-xs text-cyber-red mt-1">
                        <span className="font-bold">{error.message}</span>
                    </p>
            )}
        </div>
    );
}
