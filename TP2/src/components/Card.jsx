export function CardServicio({ servicio }) {

    const nomServicio = servicio.nombre;
    const catServicio = servicio.categoria;
    const descServicio = servicio.descripcion;
    const tecServicio = servicio.tecnologias;
    const imgServicio = servicio.imagen;
    const imgAltServicio = servicio.imagenAlt;

    return (
        <article className="border-cyberpunk-red-dim font-cyber m-2">
            {/* Imagen */}
            <div className="relative p-px">
                <img
                    src={imgServicio}
                    alt={imgAltServicio}
                    loading="lazy"
                    className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-x-px top-px h-full bg-linear-to-b from-cyber-void/90 via-transparent to-transparent pointer-events-none" />
                <h2 className="absolute top-4 left-4 right-4 z-10 uppercase font-semibold text-xl text-cyber-yellow leading-tight">
                    {nomServicio}
                </h2>
            </div>

            <div className="border-t border-cyber-red-dim px-4 py-3">
                <div className="my-1">
                    <span className="uppercase text-cyber-yellow font-semibold">Categoría</span>
                    <p className="text-cyber-red pl-1">{catServicio}</p>
                </div>

                <div className="border-t border-cyber-red-dim py-2">
                    <span className="uppercase text-cyber-green font-semibold">Descripción</span>
                    <p className="text-cyber-red pl-1">{descServicio}</p>
                </div>

                <div className="border-t border-cyber-red-dim py-2">
                    <span className="uppercase text-cyber-green font-semibold">tecnologías</span>
                    <ul className="text-cyber-cyan list-disc ml-4 pl-1">
                        {tecServicio.map((tecno) => (
                            <li key={tecno}>
                                {tecno}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    )

}

export function CardJuego({ juego }) {
    const nomJuego = juego.name              // Nombre
    const relJuego = juego.released          // Fecha de lanzamiento
    const rtgJuego = juego.rating            // Puntuación de RAWG
    const imgJuego = juego.background_image  // URL de la imagen
    const generos = juego.genres ?? [];
    const plataformas = juego.platforms ?? [];
    const valoraciones = juego.ratings_count ?? 0;
    const fecha = relJuego
        ? new Date(`${relJuego}T00:00:00`).toLocaleDateString("es-AR")
        : "Sin fecha confirmada";

    return (
        <article className="border-cyberpunk-red-dim font-cyber m-2">
            <div className="relative p-px">
                {imgJuego ? (
                    <img
                        src={imgJuego}
                        alt={`Imagen del videojuego ${nomJuego}`}
                        loading="lazy"
                        className="w-full aspect-video object-cover"
                    />
                ) : (
                    <div className="aspect-video flex items-center justify-center bg-cyber-panel text-cyber-muted">
                        Imagen no disponible
                    </div>
                )}
                <div className="absolute inset-x-px top-px h-full bg-linear-to-b from-cyber-void/90 via-transparent to-transparent pointer-events-none" />
                <h2 className="absolute top-4 left-4 right-4 z-10 uppercase font-semibold text-xl text-cyber-yellow leading-tight">
                    {nomJuego}
                </h2>
            </div>

            <div className="border-t border-cyber-red-dim px-4 py-3">
                <div className="my-1">
                    <span className="uppercase text-cyber-yellow font-semibold">Géneros</span>
                    <p className="text-cyber-red pl-1">
                        {generos.map((genero) => genero.name).join(", ") || "Sin géneros informados"}
                    </p>
                </div>

                <div className="border-t border-cyber-red-dim py-2">
                    <span className="uppercase text-cyber-green font-semibold">Lanzamiento</span>
                    <p className="text-cyber-cyan pl-1">
                        {relJuego ? <time dateTime={relJuego}>{fecha}</time> : fecha}
                    </p>
                </div>

                <div className="border-t border-cyber-red-dim py-2">
                    <span className="uppercase text-cyber-green font-semibold">Valoración de usuarios</span>
                    <p className="text-cyber-cyan pl-1">
                        {valoraciones > 0 && rtgJuego != null
                            ? `${rtgJuego} / ${juego.rating_top || 5} · ${valoraciones} valoraciones`
                            : "Sin valoraciones"}
                    </p>
                </div>

                <div className="border-t border-cyber-red-dim py-2">
                    <span className="uppercase text-cyber-green font-semibold">Plataformas compatibles</span>
                    {plataformas.length > 0 ? (
                        <ul className="text-cyber-cyan list-disc ml-4 pl-1">
                            {plataformas.map(({ platform }) => (
                                <li key={platform.id}>{platform.name}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-cyber-cyan pl-1">Sin plataformas informadas</p>
                    )}
                </div>
            </div>
        </article>
    );
}
