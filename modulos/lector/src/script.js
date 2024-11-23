// Datos simulados para los artículos publicados
const lector = {
    articulosPublicados: [
        { id: 1, titulo: "Impacto del Cambio Climático", tema: "Medio Ambiente", url: "articulo1.pdf" },
        { id: 2, titulo: "Avances en Inteligencia Artificial", tema: "Tecnología", url: "articulo2.pdf" },
        { id: 3, titulo: "Educación en la Era Digital", tema: "Educación", url: "articulo3.pdf" },
    ],
};

// Elemento principal donde se renderiza el contenido
const content = document.getElementById("content");

// Función para cargar el panel del lector
function cargarPanelLector() {
    content.innerHTML = `
        <h1>Explorar Artículos</h1>
        <div class="buscador">
            <input type="text" id="busqueda" placeholder="Buscar artículos por título o tema">
            <button onclick="filtrarArticulos()">Buscar</button>
        </div>
        <div id="resultados"></div>
    `;

    mostrarArticulos(lector.articulosPublicados);
}

// Función para mostrar la lista de artículos
function mostrarArticulos(articulos) {
    const resultados = document.getElementById("resultados");

    if (articulos.length === 0) {
        resultados.innerHTML = "<p>No se encontraron artículos.</p>";
        return;
    }

    resultados.innerHTML = articulos
        .map(
            (a) => `
            <div class="articulo">
                <div>
                    <h3>${a.titulo}</h3>
                    <p><strong>Tema:</strong> ${a.tema}</p>
                </div>
                <div class="buttons">
                    <button class="btn btn-primary" onclick="leerArticulo('${a.url}')">Leer</button>
                    <button class="btn btn-secondary" onclick="descargarArticulo('${a.url}')">Descargar</button>
                </div>
            </div>
        `
        )
        .join("");
}

// Función para filtrar artículos
function filtrarArticulos() {
    const busqueda = document.getElementById("busqueda").value.toLowerCase();
    const articulosFiltrados = lector.articulosPublicados.filter(
        (a) =>
            a.titulo.toLowerCase().includes(busqueda) ||
            a.tema.toLowerCase().includes(busqueda)
    );

    mostrarArticulos(articulosFiltrados);
}

// Función para leer un artículo (previsualizador PDF)
function leerArticulo(url) {
    window.open(url, "_blank");
}

// Función para descargar un artículo
function descargarArticulo(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    link.click();
}

// Inicializar el módulo del lector
cargarPanelLector();