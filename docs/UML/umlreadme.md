# Diagramas UML de JoUdeG

Este directorio contiene los diagramas UML que describen la estructura y funcionamiento de JoUdeG. Estos diagramas ayudan a visualizar y comprender los diferentes aspectos del sistema.

## Contenido de los diagramas UML

### 1. **Diagrama de Casos de Uso**
- **Propósito:** Identificar las funcionalidades principales del sistema desde el punto de vista de los usuarios.
- **Ubicación:** `DiagramaCasosDeUso.uml`
- **Elementos clave:**
  - Actores: Administradores, dictaminadores, autores y usuarios finales.
  - Casos de uso: Registro de usuarios, envío de artículos, dictámenes, publicación de números, generación de estadísticas.


### 2. **Diagrama de Clases**
- **Propósito:** Representar las entidades principales del sistema y sus relaciones.
- **Ubicación:** `DiagramaDeClases.uml`
- **Elementos clave:**
  - Clases como Usuario, Revista, Artículo, Dictaminador, Número.
  - Atributos y métodos principales.
  - Relaciones como herencia, composición y asociación.


### 3. **Diagrama de Componentes**
- **Propósito:** Visualizar los módulos principales del sistema y cómo interactúan entre sí.
- **Ubicación:** `DiagramaDeComponentes.uml`
- **Elementos clave:**
  - Componentes como Frontend, Backend, Base de datos, API, módulos de autenticación.
  - Interfaces y dependencias.

### 4. **Diagrama de Despliegue**
- **Propósito:** Representar la infraestructura física y lógica del sistema.
- **Ubicación:** `DiagramaDeDespliegue.uml`
- **Elementos clave:**
  - Servidores: Backend, Frontend, Base de datos.
  - Dispositivos de usuarios: Navegadores, dispositivos móviles.
  - Redes y conexiones.

### 5. **Diagrama de Actividad**
- **Propósito:** Representar los flujos de trabajo principales del sistema.
- **Ubicación:** `DiagramaDeActividad_[nombre_flujo].uml`
- **Ejemplo:** Flujo para el registro y autenticación de usuarios.
- **Vista previa:**

### 6. **Diagrama de Secuencia**
- **Propósito:** Detallar la interacción entre los actores y componentes en procesos específicos.
- **Ubicación:** `DiagramaDeSecuencia_[nombre_proceso].uml`
- **Ejemplo:** Flujo desde que un autor somete un artículo hasta que es evaluado y aceptado/rechazado.
- **Vista previa:**

## Instrucciones para generar los diagramas
Si necesitas editar o visualizar los diagramas UML:
1. Usa [PlantUML](https://plantuml.com/) o herramientas gráficas como [Lucidchart](https://www.lucidchart.com/) o [Draw.io](https://app.diagrams.net/).
2. Para PlantUML, abre los archivos `.uml` y renderízalos con un editor compatible como VS Code con la extensión PlantUML.
