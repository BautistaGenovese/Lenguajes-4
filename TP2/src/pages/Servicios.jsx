import { CardServicio } from "../components/Card";
import Seccion from "../components/Seccion";

const servicios = [
    {
        id: 1,
        nombre: "Interfaces de la Net",
        categoria: "Desarrollo frontend",
        descripcion:
            "Desarrollo de sitios web interactivos con componentes reutilizables y navegación entre páginas.",
        tecnologias: ["HTML", "CSS", "JavaScript", "React"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/frontend.jpg`,
        imagenAlt: "Pantallas con código y teclado iluminados en tonos cian y naranja",
    },
    {
        id: 2,
        nombre: "Diseño de terminales",
        categoria: "Diseño responsive",
        descripcion:
            "Diseño de interfaces adaptables a celulares, tablets y computadoras, con estilos y tipografías personalizados.",
        tecnologias: ["CSS", "Tailwind CSS"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/responsive.jpg`,
        imagenAlt: "Notebook y teléfono celular sobre una superficie oscura",
    },
    {
        id: 3,
        nombre: "Conexión al Data Pool",
        categoria: "Integración de APIs",
        descripcion:
            "Consulta de APIs públicas para mostrar información externa, con indicadores de carga y manejo de errores.",
        tecnologias: ["JavaScript", "Fetch API", "React"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/apis.jpg`,
        imagenAlt: "Cables azules conectados a equipos de red para transmitir datos",
    },
    {
        id: 4,
        nombre: "Canal de comunicaciones",
        categoria: "Formularios web",
        descripcion:
            "Creación de formularios de contacto con validación de campos, mensajes de error y envío de consultas.",
        tecnologias: ["React", "React Hook Form"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/formularios.jpg`,
        imagenAlt: "Primer plano del icono de correo electrónico en la pantalla de un celular",
    },
    {
        id: 5,
        nombre: "Núcleo del sistema",
        categoria: "Desarrollo backend",
        descripcion:
            "Creación de servidores y APIs propias para procesar solicitudes, aplicar reglas de negocio y conectar aplicaciones con sus datos.",
        tecnologias: ["Node.js", "Express", "APIs REST"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/backend.jpg`,
        imagenAlt: "Programador con auriculares trabajando con código y terminales en una notebook y un monitor",
    },
    {
        id: 6,
        nombre: "Bóveda de datos",
        categoria: "Bases de datos",
        descripcion:
            "Diseño de tablas y relaciones, consultas SQL y organización de la información para almacenar y recuperar datos de forma eficiente.",
        tecnologias: ["SQL", "MySQL", "PostgreSQL"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/bases-datos.jpg`,
        imagenAlt: "Racks con servidores y cableado en un centro de datos",
    },
    {
        id: 7,
        nombre: "Protocolo de defensa",
        categoria: "Seguridad web",
        descripcion:
            "Aplicación de controles de acceso, validación de entradas y protección de contraseñas para reducir vulnerabilidades en aplicaciones web.",
        tecnologias: ["HTTPS", "bcrypt", "OWASP"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/seguridad.jpg`,
        imagenAlt: "Dos personas revisando pantallas con herramientas de cifrado y seguridad informática",
    },
    {
        id: 8,
        nombre: "Diagnóstico de la Net",
        categoria: "Pruebas de software",
        descripcion:
            "Verificación de funciones, formularios y recorridos de usuario mediante pruebas automatizadas para detectar errores antes de publicar.",
        tecnologias: ["Vitest", "React Testing Library", "Playwright"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/testing.jpg`,
        imagenAlt: "Pantalla con código de una interfaz y su vista previa en un emulador de teléfono",
    },
    {
        id: 9,
        nombre: "Archivo de versiones",
        categoria: "Control de versiones",
        descripcion:
            "Gestión del historial de código, trabajo con ramas y revisión de cambios para colaborar en proyectos y recuperar versiones anteriores.",
        tecnologias: ["Git", "GitHub", "Pull requests"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/versiones.jpg`,
        imagenAlt: "Primer plano de código fuente con resaltado de sintaxis en varios colores",
    },
    {
        id: 10,
        nombre: "Taller de terminales",
        categoria: "Soporte técnico",
        descripcion:
            "Diagnóstico de fallas de hardware y software, mantenimiento de equipos e instalación de sistemas para mejorar su funcionamiento.",
        tecnologias: ["Windows", "Linux", "Diagnóstico de hardware"],
        imagen: `${import.meta.env.BASE_URL}images/servicios/soporte.jpg`,
        imagenAlt: "Técnico midiendo componentes de una computadora abierta con puntas de prueba",
    },
];

export default function Servicios() {
    return (
        <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-cyber font-semibold text-cyber-yellow px-3 py-1 mb-2">Servicios</h1>
            <Seccion
                titulo="Catálogo y descripción de servicios ofrecidos."
                className="grid grid-cols-1 md:grid-cols-2"
            >
                {servicios.map((servicio) => (
                    <CardServicio servicio={servicio} key={servicio.id} />
                ))}
            </Seccion>
        </div>
    );
}
