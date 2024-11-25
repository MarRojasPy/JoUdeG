// Elemento principal donde se renderiza el contenido
const content = document.getElementById("content");

// Función para cargar la pantalla de bienvenida
function cargarPantallaBienvenida() {
    content.innerHTML = `
        <h1>¡Bienvenido a JoUdeG!</h1>
        <p>Plataforma de gestión de revistas académicas.</p>
        <div class="buttons">
            <button class="btn btn-primary" onclick="cargarPantallaLogin()">Iniciar Sesión</button>
        </div>
    `;
}

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

    // Validación de inicio de sesión
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "12345") {
            alert("Inicio de sesión exitoso");
            cargarPantallaPanelInstitucion();
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    });
}

// Función para cargar la pantalla del panel de institución
function cargarPantallaPanelInstitucion() {
    content.innerHTML = `
        <div class="institucion-header">
            <img src="https://raw.githubusercontent.com/MarRojasPy/JoUdeG/main/docs/identidadvisual/LOGO-UNIVERSIDAD.svg" alt="Foto de Perfil" class="profile-img">
            <h2>Universidad de Guadalajara</h2>
        </div>
        <h1>Panel de Institución</h1>
        <p>Seleccione una acción:</p>
        <div class="buttons">
            <button class="btn btn-primary" onclick="cargarPantallaAltaRevista()">Dar de Alta Revista</button>
            <button class="btn btn-secondary" onclick="alert('Funcionalidad próximamente disponible')">Editar Revista</button>
            <button class="btn btn-secondary" onclick="alert('Funcionalidad próximamente disponible')">Revisar Estadísticas</button>
            <button class="btn btn-secondary" onclick="alert('Funcionalidad próximamente disponible')">Catálogo de Publicaciones</button>
        </div>
    `;
}

// Función para cargar la pantalla de alta de revista
function cargarPantallaAltaRevista() {
    content.innerHTML = `
        <h1>Dar de Alta Revista</h1>
        <form id="alta-form" class="form">
            <div class="form-group">
                <label for="nombre">Nombre de la Revista:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            <div class="form-group">
                <label for="issn">ISSN:</label>
                <input type="text" id="issn" name="issn" required>
            </div>
            <div class="form-group">
                <label for="centro">Centro Universitario:</label>
                <input type="text" id="centro" name="centro" required>
            </div>
            <div class="form-group">
                <label for="departamento">Departamento:</label>
                <input type="text" id="departamento" name="departamento" required>
            </div>
            <div class="form-group">
                <label for="director">Director:</label>
                <input type="text" id="director" name="director" required>
            </div>
            <div class="form-group">
                <label for="editor">Editor:</label>
                <input type="text" id="editor" name="editor" required>
            </div>
            <button type="submit" class="btn btn-primary">Continuar</button>
        </form>
    `;

    const altaForm = document.getElementById("alta-form");
    altaForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const datosRevista = {
            nombre: document.getElementById("nombre").value,
            issn: document.getElementById("issn").value,
            centro: document.getElementById("centro").value,
            departamento: document.getElementById("departamento").value,
            director: document.getElementById("director").value,
            editor: document.getElementById("editor").value,
        };
        cargarPantallaConfirmarDatos(datosRevista);
    });
}

// Función para cargar la pantalla de confirmación de datos
function cargarPantallaConfirmarDatos(datos) {
    content.innerHTML = `
        <h1>Confirmar Datos</h1>
        <p>Por favor, revise los datos ingresados:</p>
        <ul class="confirmacion-lista">
            <li><strong>Nombre:</strong> ${datos.nombre}</li>
            <li><strong>ISSN:</strong> ${datos.issn}</li>
            <li><strong>Centro Universitario:</strong> ${datos.centro}</li>
            <li><strong>Departamento:</strong> ${datos.departamento}</li>
            <li><strong>Director:</strong> ${datos.director}</li>
            <li><strong>Editor:</strong> ${datos.editor}</li>
        </ul>
        <div class="buttons">
            <button class="btn btn-primary" onclick="cargarPantallaConfirmacion()">Confirmar</button>
            <button class="btn btn-secondary" onclick="cargarPantallaAltaRevista()">Corregir</button>
        </div>
    `;
}

// Función para cargar la pantalla de confirmación final
function cargarPantallaConfirmacion() {
    content.innerHTML = `
        <h1>¡Revista Registrada con Éxito!</h1>
        <p>La revista ha sido dada de alta correctamente en el sistema.</p>
        <button class="btn btn-primary" onclick="cargarPantallaAltaRevista()">Registrar otra Revista</button>
        <button class="btn btn-secondary" onclick="cargarPantallaPanelInstitucion()">Volver al Panel</button>
    `;
}

// Cargar la pantalla inicial (bienvenida)
cargarPantallaBienvenida();