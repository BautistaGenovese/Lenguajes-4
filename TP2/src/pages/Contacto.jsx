import { ContenedorPagina } from "../components/Contenedores";
import Input from "../components/Input";
import BotonEnviar from "../components/BotonEnviar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { enviarMensajeContacto } from "../services/emailService";

export default function Contacto() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [estado, setEstado] = useState(null);

    const onSubmit = (datos) => {
        setEstado('cargando');

        enviarMensajeContacto(datos)
            .then(() => {
                setEstado('enviado');
                reset();
                setTimeout(() => setEstado(null), 4000);
            })
            .catch((err) => {
                setEstado('error');
                console.error('Error:', err);
                setTimeout(() => setEstado(null), 4000);
            });
    };

    return (
        <ContenedorPagina
            titulo="Contacto"
            archivo="Contacto"
            descripcion="Canales y vías de comunicación directa."
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col border border-neutral-800/90 p-6 mt-3 bg-black/50 gap-6">
                    <Input
                        type="text"
                        label="nombreApellido"
                        placeHolder="Ingresá tu nombre y apellido..."
                        error={errors.nombreApellido}
                        {...register("nombreApellido", {
                            required: "[ERR_REQUIRED_NAME]: Se debe ingresar un nombre y apellido.",
                            minLength: {
                                value: 3,
                                message: "[ERR_NAME_TOO_SHORT]: El nombre debe contener al menos 3 caracteres."
                            }
                        })}
                    />

                    <Input
                        type="text"
                        label="email"
                        placeHolder="tu.email@dominio.com"
                        error={errors.email}
                        {...register("email", {
                            required: "[ERR_REQUIRED_EMAIL]: El correo electrónico es obligatorio.",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "[ERR_INVALID_EMAIL]: Formato de correo electrónico no válido"
                            }
                        })}
                    />

                    <Input
                        type="text"
                        label="mensaje"
                        placeHolder="Escribí tu mensaje acá..."
                        optional={true}
                        error={errors.mensaje}
                        {...register("mensaje", {
                            maxLength: {
                                value: 300,
                                message: "[ERR_MAX_LENGTH_EXCEEDED]: El mensaje excede el límite máximo de 300 caracteres."
                            }
                        })}
                    />

                    {estado === 'error' && (
                        <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                            <span className="font-bold">&gt;&gt; [ERR_SEND_FAILED]: Ocurrió un error al despachar el mensaje. Reintentá.</span>
                        </p>
                    )}

                    <div className="pt-2">
                        <BotonEnviar estado={estado} />
                    </div>
                </div>
            </form>
        </ContenedorPagina>
    );
}