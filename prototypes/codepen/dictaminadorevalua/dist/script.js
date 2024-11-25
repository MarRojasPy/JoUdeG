// Datos simulados para manuscritos asignados y criterios
const dictaminador = {
    manuscritosAsignados: [
        { id: 1, titulo: "Energías Renovables", estado: "Pendiente", archivo: "manuscrito1.pdf" },
        { id: 2, titulo: "Inteligencia Artificial en Educación", estado: "Pendiente", archivo: "manuscrito2.pdf" },
    ],
    criteriosEvaluacion: [
        "Originalidad",
        "Relevancia Académica",
        "Calidad Metodológica",
        "Impacto Potencial",
    ],
};

// Elemento principal donde se renderiza el contenido
const content = document.getElementById("content");

// Función para cargar el panel del dictaminador
function cargarPanelDictaminador() {
    let listaManuscritos = dictaminador.manuscritosAsignados
        .map(
            (m) => `
            <li>
                <span><strong>${m.titulo}</strong> - Estado: ${m.estado}</span>
                <button class="btn btn-primary" onclick="cargarPantallaRevision(${m.id})">Revisar</button>
            </li>`
        )
        .join("");

    content.innerHTML = `
        <h1>Panel del Dictaminador</h1>
        <p>Bienvenido. A continuación, se muestran los manuscritos asignados:</p>
        <ul class="lista">${listaManuscritos}</ul>
    `;
}

// Función para cargar la pantalla de revisión del manuscrito
function cargarPantallaRevision(manuscritoId) {
    const manuscrito = dictaminador.manuscritosAsignados.find((m) => m.id === manuscritoId);

    let listaCriterios = dictaminador.criteriosEvaluacion
        .map((criterio) => `<li>${criterio}</li>`)
        .join("");

    content.innerHTML = `
        <h1>Revisión de Manuscrito</h1>
        <p><strong>Título:</strong> ${manuscrito.titulo}</p>
        <p><strong>Criterios de Evaluación:</strong></p>
        <ul class="lista">${listaCriterios}</ul>
        <a href="${manuscrito.archivo}" class="btn btn-secondary" download>Descargar Manuscrito</a>
        <div class="buttons">
            <button class="btn btn-primary" onclick="cargarPantallaEvaluacion(${manuscrito.id})">Subir Evaluación</button>
            <button class="btn btn-secondary" onclick="cargarPanelDictaminador()">Volver</button>
        </div>
    `;
}

// Función para cargar la pantalla de evaluación
function cargarPantallaEvaluacion(manuscritoId) {
    content.innerHTML = `
        <h1>Subir Evaluación</h1>
        <form id="evaluacionForm">
            <label for="evaluacion">Adjunte su evaluación:</label>
            <input type="file" id="evaluacion" required>
            <div class="buttons">
                <button type="submit" class="btn btn-primary">Enviar</button>
                <button type="button" class="btn btn-secondary" onclick="cargarPanelDictaminador()">Cancelar</button>
            </div>
        </form>
    `;

    document.getElementById("evaluacionForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Evaluación subida con éxito. ¡Gracias por su colaboración!");
        cargarPanelDictaminador();
    });
}

// Inicializar el panel del dictaminador
cargarPanelDictaminador();