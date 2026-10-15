import obtenerJuegos from "../services/obtenerJuegos";
import { useState, useEffect } from "react";
import { CardJuego } from "../components/Card";
import Seccion from "../components/Seccion";

export default function Inicio() {

    const [juegos, setJuegos] = useState([]);

    useEffect(() => {
        obtenerJuegos()
            .then((datos) => setJuegos(datos))
            .catch((error) => console.log(error));
    }, [])

    return (
        <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-cyber font-semibold text-cyber-yellow px-3 py-1 mb-2">Inicio</h1>
            <Seccion titulo="Catálogo de videojuegos" className="grid grid-cols-1 md:grid-cols-2">
                {juegos.map((j) => (
                    <CardJuego juego={j} key={j.id} />
                ))}
            </Seccion>
            <p className="px-3 py-2 text-sm text-cyber-muted">
                Datos e imágenes de <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer" className="text-cyber-cyan underline">RAWG</a>.
            </p>
        </div>
    );
}
