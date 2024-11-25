// Datos simulados para los manuscritos pendientes y dictaminadores disponibles
const equipoEditorial = {
    manuscritosPendientes: [
        { id: 1, titulo: "Tecnologías Emergentes", prioridad: "Alta", estado: "Pendiente" },
        { id: 2, titulo: "Inclusión Digital", prioridad: "Media", estado: "Pendiente" },
        { id: 3, titulo: "Impacto Ambiental de IoT", prioridad: "Baja", estado: "Pendiente" },
    ],
    dictaminadores: [
        { id: 101, nombre: "Dr. Juan Pérez", especialidad: "Tecnología", disponible: true },
        { id: 102, nombre: "Dra. María López", especialidad: "Educación", disponible: true },
        { id: 103, nombre: "Dr. Carlos Fernández", especialidad: "Medio Ambiente", disponible: false },
    ],
};

// Elemento principal donde se renderiza el contenido
const content = document.getElementById("content");

// Función para cargar el panel del equipo editorial
function cargarPanelEditorial() {
    let listaManuscritos = equipoEditorial.manuscritosPendientes
        .map(
            (m) => `
            <li>
                <strong>${m.titulo}</strong> - Prioridad: ${m.prioridad}
                <button class="btn btn-primary" onclick="cargarPantallaAsignacion(${m.id})">Asignar Dictaminadores</button>
            </li>`
        )
        .join("");

    content.innerHTML = `
        <h1>Panel del Equipo Editorial</h1>
        <p>Bienvenido al sistema de gestión de manuscritos. Seleccione una acción:</p>
        <h2>Manuscritos Pendientes</h2>
        <ul class="lista">${listaManuscritos}</ul>
        <div class="buttons">
            <button class="btn btn-secondary" onclick="cargarPantallaReporte()">Ver Reportes</button>
        </div>
    `;
}

// Función para cargar la pantalla de asignación de dictaminadores
function cargarPantallaAsignacion(manuscritoId) {
    const manuscrito = equipoEditorial.manuscritosPendientes.find((m) => m.id === manuscritoId);
    let listaDictaminadores = equipoEditorial.dictaminadores
        .filter((d) => d.disponible)
        .map(
            (d) => `
            <li>
                <strong>${d.nombre}</strong> - Especialidad: ${d.especialidad}
                <button class="btn btn-primary" onclick="asignarDictaminador(${manuscritoId}, ${d.id})">Asignar</button>
            </li>`
        )
        .join("");

    if (listaDictaminadores === "") {
        listaDictaminadores = "<p>No hay dictaminadores disponibles actualmente.</p>";
    }

    content.innerHTML = `
        <h1>Asignación de Dictaminadores</h1>
        <p><strong>Manuscrito:</strong> ${manuscrito.titulo}</p>
        <p><strong>Prioridad:</strong> ${manuscrito.prioridad}</p>
        <h2>Dictaminadores Disponibles</h2>
        <ul class="lista">${listaDictaminadores}</ul>
        <div class="buttons">
            <button class="btn btn-secondary" onclick="cargarPanelEditorial()">Volver al Panel</button>
        </div>
    `;
}

// Función para asignar un dictaminador a un manuscrito
function asignarDictaminador(manuscritoId, dictaminadorId) {
    const dictaminador = equipoEditorial.dictaminadores.find((d) => d.id === dictaminadorId);
    dictaminador.disponible = false;

    alert(`Dictaminador ${dictaminador.nombre} asignado al manuscrito con éxito.`);
    cargarPanelEditorial();
}

// Función para cargar el reporte de progreso
function cargarPantallaReporte() {
    const total = equipoEditorial.manuscritosPendientes.length;
    const altaPrioridad = equipoEditorial.manuscritosPendientes.filter(
        (m) => m.prioridad === "Alta"
    ).length;

    content.innerHTML = `
        <h1>Reporte de Progreso</h1>
        <p><strong>Total de Manuscritos Pendientes:</strong> ${total}</p>
        <p><strong>Manuscritos de Alta Prioridad:</strong> ${altaPrioridad}</p>
        <div class="buttons">
            <button class="btn btn-secondary" onclick="cargarPanelEditorial()">Volver al Panel</button>
        </div>
    `;
}

// Inicializar el módulo del equipo editorial
cargarPanelEditorial();