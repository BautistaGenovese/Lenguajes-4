import obtenerJuegos, { buscarJuegos } from "../services/obtenerJuegos";
import { useState, useEffect, useRef } from "react";
import { CardJuego } from "../components/Card";
import Seccion from "../components/Seccion";
import Input from "../components/Input";
import Boton from "../components/Boton";

export default function Inicio() {
    // Datos del catalogo y de la busqueda
    const [juegos, setJuegos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [resultados, setResultados] = useState(null);
    const [consulta, setConsulta] = useState("");
    const [cargando, setCargando] = useState(false);
    const [cargandoCatalogo, setCargandoCatalogo] = useState(true);
    const [errorCatalogo, setErrorCatalogo] = useState("");
    const [error, setError] = useState("");
    const peticion = useRef(null);

    // Carga los juegos elegidos al entrar a Inicio
    useEffect(() => {
        let activo = true;
        obtenerJuegos()
            .then((datos) => { if (activo) setJuegos(datos); })
            .catch(() => { if (activo) setErrorCatalogo("No se pudo cargar el catálogo. Podés intentar buscar un juego."); })
            .finally(() => { if (activo) setCargandoCatalogo(false); });
        return () => {
            activo = false;
            peticion.current?.abort();
        };
    }, [])

    // Busca en RAWG al enviar el formulario
    async function manejarBusqueda(evento) {
        evento.preventDefault();
        const nombre = busqueda.trim();
        if (!nombre || cargando) return;
        peticion.current?.abort();
        // Permite cancelar la busqueda al volver al catalogo
        const controlador = new AbortController();
        peticion.current = controlador;
        setConsulta(nombre);
        setResultados(null);
        setError("");
        setCargando(true);
        try {
            const datos = await buscarJuegos(nombre, controlador.signal);
            if (!controlador.signal.aborted) setResultados(datos);
        } catch (error) {
            if (!controlador.signal.aborted) setError(error.message);
        } finally {
            if (!controlador.signal.aborted) setCargando(false);
        }
    }

    // Limpia la busqueda y muestra los juegos elegidos
    function volverAlCatalogo() {
        peticion.current?.abort();
        setBusqueda("");
        setConsulta("");
        setResultados(null);
        setError("");
        setCargando(false);
    }

    const juegosVisibles = consulta ? (resultados ?? []) : juegos;
    const esperando = cargando || (!consulta && cargandoCatalogo);
    const errorVisible = consulta ? error : errorCatalogo;

    return (
        <div className="w-full">
            <div className="game-search-heading">
                <h1 className="text-3xl md:text-4xl font-cyber font-semibold text-cyber-yellow">Inicio</h1>
            </div>
            {/* Buscador y boton de regreso */}
            <form onSubmit={manejarBusqueda} className="game-search-form">
                {consulta && (
                    <div className="game-search-back">
                        <Boton variant="back" onClick={volverAlCatalogo} aria-label="Volver al catálogo" title="Volver al catálogo" />
                    </div>
                )}
                <Input variant="search" id="buscar-juego" label="Buscar juegos"
                    value={busqueda} onChange={(evento) => setBusqueda(evento.target.value)}
                    placeHolder="Buscar un juego…" maxLength={120}
                    actionDisabled={cargando || !busqueda.trim()} />
            </form>
            {/* Mensajes de carga y errores */}
            <div aria-live="polite" aria-atomic="true" className="px-3">
                {esperando && <p className="mb-3 text-cyber-cyan">{cargando ? "Buscando juegos…" : "Cargando catálogo…"}</p>}
                {errorVisible && <p role="alert" className="mb-3 text-cyber-red">{errorVisible}</p>}
                {!esperando && resultados?.length === 0 && <p className="mb-3 text-cyber-muted">No se encontraron juegos para “{consulta}”.</p>}
            </div>
            {/* Tarjetas del catalogo o de los resultados */}
            <Seccion titulo={consulta ? `Resultados para “${consulta}”` : "Catálogo de videojuegos"} className="grid grid-cols-1 md:grid-cols-2">
                {!esperando && !errorVisible && juegosVisibles.map((j) => (
                    <CardJuego juego={j} key={j.id} />
                ))}
            </Seccion>
            <p className="px-3 py-2 text-sm text-cyber-muted">
                Datos e imágenes de <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer" className="text-cyber-cyan underline">RAWG</a>.
            </p>
        </div>
    );
}
