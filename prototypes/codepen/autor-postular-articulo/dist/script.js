// Datos simulados del autor
const autorInfo = {
    nombre: "Dra. Carolina Rubio",
    institucion: "Universidad de Guadalajara",
    email: "carolina.rubio@udg.mx",
    foto: "https://raw.githubusercontent.com/MarRojasPy/JoUdeG/main/docs/identidadvisual/AUTORA.svg",
    semblanza: `
        La Dra. Carolina Rubio, destacada académica en Tecnologías de la Información en la Universidad de Guadalajara, 
        es reconocida por su excepcional trayectoria en investigación y enseñanza. Con un doctorado en el campo, 
        ha liderado proyectos innovadores enfocados en resolver desafíos sociales y educativos a través de la tecnología. 
        Además de su contribución académica, es conocida por promover la inclusión y diversidad en tecnología, 
        inspirando a futuras generaciones.
    `,
    publicaciones: 0,
    manuscritos: [
        { titulo: "Impacto de la tecnología en la educación", estado: "En revisión" },
        { titulo: "Inclusión tecnológica en comunidades rurales", estado: "Aceptado" }
    ]
};

// Elemento principal donde se renderiza el contenido
const content = document.getElementById("content");

// Función para cargar la pantalla de inicio de sesión
function cargarPantallaLogin() {
    content.innerHTML = `
        <h1>Iniciar Sesión</h1>
        <form id="login-form" class="form">
            <div class="form-group">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
    `;

    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "autor" && password === "12345") {
            alert("Inicio de sesión exitoso");
            cargarPaginaInicioAutor();
        } else {
            alert("Credenciales incorrectas");
        }
    });
}

// Función para cargar la página principal del autor
function cargarPaginaInicioAutor() {
    content.innerHTML = `
        <div class="autora-header">
            <img src="${autorInfo.foto}" alt="Foto de la Dra. Carolina Rubio" class="autora-img">
            <h1>${autorInfo.nombre}</h1>
            <h2>${autorInfo.institucion}</h2>
        </div>
        <div class="autora-ficha">
            <h3>Ficha Autoral</h3>
            <p>${autorInfo.semblanza}</p>
            <p><strong>Email:</strong> ${autorInfo.email}</p>
            <p><strong>Publicaciones Actuales:</strong> ${autorInfo.publicaciones}</p>
        </div>
        <div class="buttons">
            <button class="btn btn-primary" onclick="cargarPantallaConvocatorias()">Postular Nuevo Manuscrito</button>
            <button class="btn btn-secondary" onclick="cargarPantallaSeguimiento()">Seguimiento de Manuscritos</button>
            <button class="btn btn-secondary" onclick="cargarPantallaEstadisticas()">Estadísticas</button>
        </div>
    `;
}

// Función para mostrar la pantalla de seguimiento de manuscritos
function cargarPantallaSeguimiento() {
    let listaManuscritos = autorInfo.manuscritos
        .map(
            (m) => `<li><strong>${m.titulo}</strong> - Estado: ${m.estado}</li>`
        )
        .join("");

    content.innerHTML = `
        <h1>Seguimiento de Manuscritos</h1>
        <ul class="seguimiento-lista">${listaManuscritos}</ul>
        <div class="buttons">
            <button class="btn btn-secondary" onclick="cargarPaginaInicioAutor()">Volver al Panel</button>
        </div>
    `;
}

// Función para mostrar la pantalla de estadísticas
function cargarPantallaEstadisticas() {
    const aceptados = autorInfo.manuscritos.filter(
        (m) => m.estado === "Aceptado"
    ).length;
    const revision = autorInfo.manuscritos.filter(
        (m) => m.estado === "En revisión"
    ).length;

    content.innerHTML = `
        <h1>Estadísticas de Manuscritos</h1>
        <p><strong>Total de Manuscritos:</strong> ${autorInfo.manuscritos.length}</p>
        <p><strong>Aceptados:</strong> ${aceptados}</p>
        <p><strong>En Revisión:</strong> ${revision}</p>
        <div class="buttons">
            <button class="btn btn-secondary" onclick="cargarPaginaInicioAutor()">Volver al Panel</button>
        </div>
    `;
}

// Variables para guardar datos temporales del manuscrito
let datosManuscrito = {};

// Función para mostrar las convocatorias vigentes
function cargarPantallaConvocatorias() {
    content.innerHTML = `
        <h1>Convocatorias Vigentes</h1>
        <div class="buttons">
            <button class="btn btn-secondary" onclick="cargarPantallaFormulario()">Convocatoria 2023</button>
        </div>
    `;
}

// Función para mostrar el formulario de postulación
function cargarPantallaFormulario() {
    content.innerHTML = `
        <h1>Postular Manuscrito</h1>
        <form id="manuscrito-form" class="form">
            <div class="form-group">
                <label for="titulo">Título:</label>
                <input type="text" id="titulo" name="titulo" required>
            </div>
            <div class="form-group">
                <label for="resumen">Resumen:</label>
                <textarea id="resumen" name="resumen" required></textarea>
            </div>
            <div class="form-group">
                <label for="archivo">Subir Manuscrito:</label>
                <input type="file" id="archivo" name="archivo" accept=".pdf" required>
            </div>
            <button type="submit" class="btn btn-primary">Confirmar</button>
        </form>
    `;

    document.getElementById("manuscrito-form").addEventListener("submit", (e) => {
        e.preventDefault();

        // Guardar los datos del formulario
        datosManuscrito = {
            titulo: document.getElementById("titulo").value,
            resumen: document.getElementById("resumen").value,
            archivo: document.getElementById("archivo").files[0].name // Solo el nombre del archivo
        };

        cargarPantallaVerificacion();
    });
}

// Función para mostrar la pantalla de verificación de datos
function cargarPantallaVerificacion() {
    content.innerHTML = `
        <h1>Verificar Datos del Manuscrito</h1>
        <p><strong>Título:</strong> ${datosManuscrito.titulo}</p>
        <p><strong>Resumen:</strong> ${datosManuscrito.resumen}</p>
        <p><strong>Archivo:</strong> ${datosManuscrito.archivo}</p>
        <div class="buttons">
            <button class="btn btn-primary" onclick="cargarPantallaDescargarConstancia()">Confirmar y Postular</button>
            <button class="btn btn-secondary" onclick="cargarPantallaFormulario()">Regresar y Editar</button>
        </div>
    `;
}

// Función para mostrar la descarga de constancia
function cargarPantallaDescargarConstancia() {
    content.innerHTML = `
        <h1>¡Manuscrito Postulado!</h1>
        <p>Su manuscrito ha sido enviado con éxito.</p>
        <p><strong>Número total de publicaciones:</strong> ${++autorInfo.publicaciones}</p>
        <a href="#" class="btn btn-primary">Descargar Constancia</a>
        <div class="buttons">
            <button class="btn btn-secondary" onclick="cargarPaginaInicioAutor()">Volver al Panel</button>
        </div>
    `;
}

// Cargar la pantalla de inicio de sesión al inicio
cargarPantallaLogin();