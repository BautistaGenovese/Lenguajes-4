const btnAnalizar = document.getElementById('btn-analizar');
const btnCopiarLatitud = document.getElementById('btn-copiar-latitud');
const btnCopiarLongitud = document.getElementById('btn-copiar-longitud');
const error = document.getElementById('tarjeta-error');
const infoError = document.getElementById('info-error');
const coordenadas = {
    latitud: null,
    longitud: null,
    presicion: null
}

function mostrarError(mensaje) {
    if (error.classList.contains('oculto')) {
        error.classList.remove('oculto');
        infoError.textContent = String(mensaje);
    }
}

async function copiar (mensaje) {
    try {
        await navigator.clipboard.writeText(mensaje);
    } catch (err) {
        mostrarError(err);
    }
}

btnCopiarLatitud.addEventListener('click', () => {
    if (coordenadas.latitud){
        copiar(coordenadas.latitud);
        btnCopiarLatitud.style.backgroundColor = 'var(--green)'
        setTimeout(()=>{
            btnCopiarLatitud.style.backgroundColor = 'var(--white)'
        }, 3000)
    }
})

btnCopiarLongitud.addEventListener('click', () => {
    if (coordenadas.longitud){
        copiar(coordenadas.longitud);
        btnCopiarLongitud.style.backgroundColor = 'var(--green)'
        setTimeout(()=>{
            btnCopiarLongitud.style.backgroundColor = 'var(--white)'
        }, 3000)
    }
})

btnAnalizar.addEventListener('click', () => {
    if (!navigator.geolocation) {
        mostrarError('Geolocalización no soportada por este navegador')
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
        ((err) => mostrarError(err.message)),
        { enableHighAccuracy: true, timeout: 5000 }
    );
});
