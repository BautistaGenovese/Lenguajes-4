import emailjs from '@emailjs/browser';

// Configuracion de EmailJS desde el archivo .env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Envia los datos usando la plantilla de contacto
export const enviarMensajeContacto = (datos) => {
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, datos, PUBLIC_KEY);
};
