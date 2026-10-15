import Input from "../components/Input";
import Boton from "../components/Boton";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { enviarMensajeContacto } from "../services/emailService";
import Seccion from "../components/Seccion";

export default function Contacto() {
    // Validacion y estado del formulario
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [estado, setEstado] = useState(null);
    // Oculta el resultado del envio despues de cuatro segundos
    useEffect(() => {
        if (estado !== 'enviado' && estado !== 'error') return;
        const temporizador = setTimeout(() => setEstado(null), 4000);
        return () => clearTimeout(temporizador);
    }, [estado]);
    // Ajusta el zoom del mapa segun el tamaño de la pantalla
    const [mapZoom, setMapZoom] = useState(() =>
        window.matchMedia('(min-width: 768px)').matches ? 13.9 : 12.5
    );

    useEffect(() => {
        const media = window.matchMedia('(min-width: 768px)');
        const actualizarZoom = () => setMapZoom(media.matches ? 13.9 : 12.5);
        actualizarZoom();
        media.addEventListener('change', actualizarZoom);
        return () => media.removeEventListener('change', actualizarZoom);
    }, []);

    // Envia los datos a EmailJS y limpia los campos si sale bien
    const onSubmit = async (datos) => {
        if (isSubmitting) return;
        setEstado('cargando');
        try {
            await enviarMensajeContacto(datos);
            setEstado('enviado');
            reset();
        } catch {
            setEstado('error');
        }
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-cyber font-semibold text-cyber-yellow px-3 py-1 mb-2">Contacto</h1>

            <Seccion
                titulo="Canales y vías de comunicación directa."
                className="flex flex-col-reverse md:flex-row w-full gap-4"
            >
                <div className="flex-1 md:my-auto">
                    {/* Formulario de contacto */}
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="flex flex-col gap-3">
                            <Input
                                type="text"
                                label="Nombre y Apellido"
                                placeHolder="Ingresar nombre y apellido"
                                error={errors.nombreApellido}
                                {...register("nombreApellido", {
                                    required: "Se debe ingresar un nombre y apellido.",
                                    minLength: {
                                        value: 3,
                                        message: "El nombre debe contener al menos 3 caracteres."
                                    }
                                })}
                            />

                            <Input
                                type="text"
                                label="email"
                                placeHolder="tu.email@dominio.com"
                                error={errors.email}
                                {...register("email", {
                                    required: "El correo electrónico es obligatorio.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Formato de correo electrónico no válido"
                                    }
                                })}
                            />

                            <Input
                                multiline
                                label="mensaje"
                                placeHolder="Escribí tu mensaje acá ..."
                                optional={true}
                                error={errors.mensaje}
                                {...register("mensaje", {
                                    maxLength: {
                                        value: 300,
                                        message: "El mensaje excede el límite máximo de 300 caracteres."
                                    }
                                })}
                            />

                            {estado === 'error' && (
                                <p role="alert" className="text-[11px] text-cyber-red font-cyber flex items-center gap-1">
                                    <span className="font-bold">Ocurrió un error al despachar el mensaje. Reintentá.</span>
                                </p>
                            )}

                            <div className="pt-2">
                                <Boton largo type="submit" estado={estado} disabled={isSubmitting}>Enviar datos</Boton>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Mapa de la ciudad */}
                <div className="flex-1 min-w-0 mb-4">
                    <h3 className="uppercase text-cyber-green font-semibold md:text-end">Mapa de la Ciudad</h3>
                    <div className="border-cyberpunk-red-dim w-full p-px"><div className="h-80 md:h-96 [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]">
                        <iframe title="Mapa de ubicación en Salta" className="block w-full h-full border-0" loading="lazy" src={`https://api.maptiler.com/maps/01a13e02-228f-7d22-8819-3604a4d5dead/?key=6pL8GJhl9IA3lmTPBAPs#${mapZoom}/-24.73957/-65.40398`}></iframe></div>
                    </div>
                </div>
            </Seccion>
        </div>
    );
}
