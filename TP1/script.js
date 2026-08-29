const btnCopiarLatitud = document.getElementById('btn-copiar-latitud');
const btnCopiarLongitud = document.getElementById('btn-copiar-longitud');
const coordenadas = {
    latitud: null,
    longitud: null,
    presicion: null
}
const btnCargar = document.getElementById('btn-cargar');
const inputSelectorFoto = document.getElementById('selector-foto');
const vistaPrevia = document.getElementById('vista-previa');

function mostrarError(mensaje, contenedorId) {
    if (!contenedorId) return;

    const contenedorError = document.getElementById(`${contenedorId}`);
 
    contenedorError.innerHTML = `
    <div>
    <span aria-hidden="true" class="material-symbols-outlined icono-grande">error</span>
    <span class="etiqueta">Error</span>
    </div>
    <p class="subtitulo" id="info-error">${String(mensaje)}</p>
    `

    if (contenedorError.classList.contains('oculto')) {
        contenedorError.classList.remove('oculto');
    }
}

function analizarPosicion() {
    if (!navigator.geolocation) {
        mostrarError('Geolocalización no soportada por este navegador', 'error-coordenadas')
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            coordenadas.latitud = pos.coords.latitude;
            coordenadas.longitud = pos.coords.longitude;
            coordenadas.presicion = pos.coords.accuracy;

            document.getElementById('valor-latitud').textContent = `${coordenadas.latitud}`;
            document.getElementById('valor-longitud').textContent = `${coordenadas.longitud}`;
            document.getElementById('valor-presicion').textContent = `${coordenadas.presicion} m`;
        },
        ((err) => mostrarError(err.message, 'error-coordenadas')),
        { enableHighAccuracy: true, timeout: 5000 }
    );
}

analizarPosicion();

async function copiar(mensaje) {
    try {
        await navigator.clipboard.writeText(mensaje);
    } catch (err) {
        mostrarError(err);
    }
}

btnCopiarLatitud.addEventListener('click', () => {
    if (coordenadas.latitud) {
        copiar(coordenadas.latitud);
        btnCopiarLatitud.style.backgroundColor = 'var(--green)'
        setTimeout(() => {
            btnCopiarLatitud.style.backgroundColor = 'var(--white)'
        }, 3000)
    }
})

btnCopiarLongitud.addEventListener('click', () => {
    if (coordenadas.longitud) {
        copiar(coordenadas.longitud);
        btnCopiarLongitud.style.backgroundColor = 'var(--green)'
        setTimeout(() => {
            btnCopiarLongitud.style.backgroundColor = 'var(--white)'
        }, 3000)
    }
})

btnCargar.addEventListener('click', () => {
    inputSelectorFoto.click()
});

inputSelectorFoto.addEventListener('change', (evento) => {
    const archivo = evento.target.files[0];

    if (archivo) {

        if (!archivo.type.startsWith('image/')) {
            mostrarError('Solo se permiten archivos de imagen.', 'error-imagen');
            inputSelectorFoto.value = '';
            return;
        }

        const lector = new FileReader();

        lector.onload = (e) => {
            vistaPrevia.src = e.target.result;
            vistaPrevia.style.display = 'block';
            vistaPrevia.style.padding = '0';
        }
        lector.readAsDataURL(archivo)
    };
});
