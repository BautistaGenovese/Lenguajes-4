import { ContenedorPagina } from "../components/Contenedores";
import Input from "../components/Input";
import Boton from "../components/Boton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { enviarMensajeContacto } from "../services/emailService";
import Seccion from "../components/Seccion";

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
                <Seccion style="flex flex-col gap-3">
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
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
                        <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                            <span className="font-bold">&gt;&gt; [ERR_SEND_FAILED]: Ocurrió un error al despachar el mensaje. Reintentá.</span>
                        </p>
                    )}

                    <div className="pt-2">
                        {/* <BotonEnviar estado={estado} /> */}
                        <Boton largo type="submit">Enviar datos</Boton>
                    </div>

                </Seccion>
            </form>
        </ContenedorPagina>
    );
}
