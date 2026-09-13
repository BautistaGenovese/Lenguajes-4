const coordenadas = {
    latitud: null,
    longitud: null,
    presicion: null
}
const btnCargar = document.getElementById('btn-cargar');
const inputSelectorFoto = document.getElementById('selector-foto');
const vistaPrevia = document.getElementById('vista-previa');

function calcularGrados(decimal, esLatitud) {
    const direccion = esLatitud 
        ? (decimal >= 0 ? 'N' : 'S') 
        : (decimal >= 0 ? 'E' : 'O');
    
    const valorAbsoluto = Math.abs(decimal);
    const grados = Math.floor(valorAbsoluto);
    
    const minutosFloat = (valorAbsoluto - grados) * 60;
    const minutos = Math.floor(minutosFloat);
    
    const segundos = Math.round((minutosFloat - minutos) * 60);
    
    return `${grados}°${minutos}'${segundos}" ${direccion}`;
}

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
            document.getElementById('valor-latitud-grados').textContent = `(${calcularGrados(coordenadas.latitud, true)})`;
            
            document.getElementById('valor-longitud').textContent = `${coordenadas.longitud}`;
            document.getElementById('valor-longitud-grados').textContent = `(${calcularGrados(coordenadas.longitud, false)})`;

            document.getElementById('valor-presicion').textContent = `${coordenadas.presicion} m`;
        },
        ((err) => mostrarError(err.message, 'error-coordenadas')),
        { enableHighAccuracy: true, timeout: 5000 }
    );
}

analizarPosicion();

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
