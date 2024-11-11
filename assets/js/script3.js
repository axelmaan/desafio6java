
function cargarContenido(url, contenedorId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {

            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');

            console.log(`Contenido de ${url}:`, doc);

            let contenido = '';
            if (contenedorId === 'contenedor-propiedades') {
                const propiedadesElement = doc.querySelector('#propiedad');
                if (propiedadesElement) {
                    contenido = propiedadesElement.innerHTML;
                } 
            } else if (contenedorId === 'contenedor-propiedades') {
                const alquilerElement = doc.querySelector('#alquiler');
                if (alquilerElement) {
                    contenido = alquilerElement.innerHTML;
                } 
            }
            
            document.getElementById(contenedorId).innerHTML = contenido;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    cargarContenido('ventas.html', 'contenedor-propiedades');
    cargarContenido('alquiler.html', 'contenedor-propiedades');
});
