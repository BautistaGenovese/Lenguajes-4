import { ContenedorPagina } from "../components/Contenedores";
import Boton from "../components/Boton";

export default function Inicio() {
    return (
        <ContenedorPagina
            titulo="Inicio"
            archivo="Inicio"
            descripcion="Bienvenido a la página principal del sitio."
        >
            <Boton>Hola</Boton>

        </ContenedorPagina>
    );
}