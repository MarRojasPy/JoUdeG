### ***Metodología para la creación de JoUdeG: Arquitectura de Software***

Para poder lograr una metodología clara para el desarrollo de JoUdeG primero se debe comprender que es la arquitectura software. A lo largo de la historia la arquitectura de software ha tenido distintas definiciones todas influenciadas en gran parte por el background y necesidades de sus autores. Según el libro Software Architecture in Practice la arquitectura de software de un sistema es el conjunto de estructuras necesarias para razonar acerca del sistema [(Bass et al., 2012\)](https://www.zotero.org/google-docs/?sEFfZ8). Esta definición nos presenta dos conceptos importantes: sistema y estructura. Cuando hablamos de sistema entendemos al conjunto de elementos relacionados entre sí que funciona como un todo [(Bunge, 2001\)](https://www.zotero.org/google-docs/?asD8Ug) y por su parte la estructura se refiere a cómo se organizan estos elementos y cómo se conectan y para entender esto utilizamos los patrones de sistema. [(Estevez, 2021\)](https://www.zotero.org/google-docs/?dmWDeW)

Otra definición es la del libro Design It\! From Programmer to software Architecture donde se define a la arquitectura de software como el conjunto decisiones de diseño importantes para organizar el software pero siempre buscando cumplir los atributos de calidad deseados.[)](https://www.zotero.org/google-docs/?broken=3JmyZ6) Las decisiones de diseño son las que se toman según el proyecto y las que definen cómo trabaja el equipo.[(Keeling, 2017\)](https://www.zotero.org/google-docs/?BERFZD) En el libro Arquitectura de Software: Conceptos y Ciclo de desarrollo, los autores consideran a la arquitectura de software como una transformación hacia la solución técnica de determinada problemática u oportunidad con el fin de resolverla. [(Velasco-Elizondo, 2015\)](https://www.zotero.org/google-docs/?LOCRcV)

Ralph Johnson define a la arquitectura de software acerca de las cosas importantes, cualquiera que estas sean. Dejando así abierto el debate a que la verdadera definición de los elementos de la arquitectura de software dependerá de la persona o empresa que vaya a hacer uso de ella. [(Fowler, 2003\)](https://www.zotero.org/google-docs/?R8dPDy)

En los últimos años hemos vivido lo que muchos expertos llaman “la cuarta revolución industrial” haciendo referencia a cómo las organizaciones se han visto en la necesidad de migrar de sus sistemas análogos al mundo digital, esto no es ajeno a las revistas científicas que es en lo que se basa JoUdeG. Una de los mayores retos de la app es vincular sus requerimientos funcionales con los no funcionales, es decir lograr que la tareas que se realicen logren los objetivos y calidad establecida, es aquí donde la arquitectura software debe intervenir para lograr ese equilibrio funcional con el no funcional. Entre muchas otras cosas la arquitectura de software es importante por los siguientes puntos: 1\) Predecir y contrarrestar riesgos, 2\) Sincroniza las partes con el sistema, 3\) Reducir costos, 4\) Crea proyectos estables, 5\) Crea proyectos con facilidad de mantenimiento, 6\) Aumentar la calidad de los sistemas, 7\) Inabilita y habilita los atributos de calidad de sistema, 8\) Permite que el sistema evolucione sin riesgos y 9\) Deja documentación que permita a los involucrados dar mantenimiento al software.  

Cuando se empieza con un nuevo desarrollo se deben de definir tres puntos clave: los requisitos funcionales, las restricciones de diseño y los atributos de calidad (Zapata, 2020). En el caso específico de JoUdeG no se tienen demasiadas restricciones de diseño ya que al ser un proyecto de posgrado el “cliente” es al mismo tiempo el desarrollador. Pero si se han logrado establecer algunos requisitos funcionales y atributos de calidad. 

Los requisitos funcionales hacen referencia a lo que esperamos que realice nuestro software, dichos requisitos en el caso de JoUdeG son: 1\) Asignación de perfiles según el rol, 2\) La posibilidad de generar calendarios de actividades, 3\) Almacenar y editar una base de datos de autores, 4\) Almacenar y editar base de datos de dictaminadores, 5\) Seguimiento de tareas para la preparación del número, 6\) Apoyo en la evaluación doble ciego y 7\) Generación de estadísticas. 

##### *Figura 5\. Atributos de Calidad de JoUdeG* {#figura-5.-atributos-de-calidad-de-joudeg}

| Atributo | Descripción | ¿Por qué debe ser un atributo de JoUdeG? |
| :---: | :---: | ----- |
| **Desplegabilidad** | Qué tan fácil o no es desplegar una nueva versión de la aplicación | Las políticas editoriales y los requisitos para índices cambian constantemente por lo que JoUdeGs debe tener la capacidad de desplegarse conforme sea necesario  |
| **Escalabilidad** | Capacidad de atender cada vez más solicitudes | Se espera que JoUdeGs sea utilizado en una primera etapa por las revistas científicas de la UdeG pero debe tener la capacidad de prestar el servicio a cada vez más instituciones.  |
| **Interoperabilidad** | Que tan bien se puede intercambiar datos con otros sistemas  | Debido a que JoUdeGs es una aplicación web debe poder conectarse a servicios de terceros y servidores. |
| **Rendimiento** | El sistema hace lo que espera que haga en el tiempo esperado por el usuario | El proceso editorial responde a una fecha de publicación así que cada tarea debe realizarse en un tiempo determinado.  |
| **Seguridad** | Evitar accesos no autorizados y proteger los autorizados | La app web manejara información sensible de autores, evaluadores y equipo editorial. También debe proteger el anonimato de la evaluación por pares ciegos.  |
| **Usabilidad** | Qué tan fácil puede realizar un usuario las tareas en el sistema.  | En el contexto académico conviven personas de todas las edades y con distintos conocimientos por lo cual JoUdeG debe tener una interfaz amigable con todos.  |

*Fuente: Elaboración propia con base en: El patrón de arquitectura correcto para tu aplicación, 2019\.* 

Los atributos de calidad son propiedades medibles del sistema que indica que tan bien se satisface cada una de las partes interesadas. Los atributos que se esperan de JoUdeG ([Figura 5](#figura-5.-atributos-de-calidad-de-joudeg)) son: desplegabilidad, escalabilidad, interoperabilidad, rendimiento, seguridad y usabilidad. Establecidos estos atributos la siguiente consideración es con que patrón de arquitectura se debe construir la aplicación. 

Los patrones de arquitectura son estructuras que nos permiten dar solución a la forma en la que vamos a organizar nuestro software. Es importante reconocer que estos patrones reflejan las estrategias utilizadas por otros arquitectos de software para abordar desafíos estructurales, proporcionando un conjunto de atributos que permiten su aplicación en una variedad de contextos. Mientras que los patrones de diseño se centran en resolver problemas a nivel de componentes individuales del software, los patrones arquitectónicos se aplican a la concepción global de la arquitectura del sistema. [(Manuel Zapata, 2019\)](https://www.zotero.org/google-docs/?xHr2N0)

Algunos de los patrones de arquitectura más populares son: 

1. **Microkernel:** Se aplica a softwares que necesitan adaptarse a los requisitos del sistema separando el núcleo funcional mínimo de un núcleo funcional amplio [(Pastor, 2019\)](https://www.zotero.org/google-docs/?uJJ8zf).   
2. **Microservicios:** Los microservicios funcionan como múltiples servicios que trabajan juntos. Cada microservicio tiene una labor distinta dentro del software y lo único que los relaciona es la comunicación.   
3. **Arquitectura por capas:** Es uno de los patrones más comunes, se organiza en niveles con distintos componentes y acomodados en capas horizontales, una de sus características más importantes es que a pesar de que sus componentes están interconectados son independientes uno de otros. 

Los arquetipos funcionan explicando cómo se relaciona cada parte del sistema entre sí especificando sus restricciones, como usarlos y cuando cuidando siempre los atributos de calidad definidos anteriormente.[(Novoseltseva, 2020\)](https://www.zotero.org/google-docs/?fWHRck) Es por esto que el patrón de arquitectura debe decirse después de establecer los atributos de calidad para así adaptarse a los mismos. Es decir que si nos basamos en los atributos de calidad de JoUdeG podemos concluir que los mejor para el desarrollo es una arquitectura basada en Microservicios y el Modelo en capas. 

El modelo en capas es uno de los patrones más comunes, se organiza en un patrón con distintos grupos de sub tareas, las capas del modelo se acomodan de manera horizontal con un rol específico y se clasifican en capas de alto nivel y de bajo nivel. Las capas de alto nivel suelen ser las que están directamente en contacto con los usuarios mientras que las de bajo nivel son las que sostienen la estructura. 

 A pesar de que lo más común es trabajar con tres capas el modelo en capas no especifica la cantidad de capas que debes utilizar, esto dependerá de las necesidades de desarrollo. A continuación se plantean los casos según el número de capas. 

1. **Una capa**

   *Ventajas*

* Menor latencia.  
* Disponibilidad  
* Mejor manejo de datos

  *Desventajas*

* Menor escalabilidad.  
* Poca capacidad de testeailidad.  
* Vulnerabilidad de modificaciones o ingeniería inversa.  
2. **Dos capas**

   *Ventajas*

* Menor número de llamadas.  
* Mayor rendimiento por la cercanía de la base de datos y el servidor.   
* Mayor seguridad 

  *Desventajas*

* Menor control del software  
* Poca escalabilidad  
* Poca probabilidad de reutilizar la lógica del software  
3. **Tres capas**

   *Ventajas*

* Menor corrupción de datos  
* Mayor seguridad  
* Mayor escalabilidad

  *Desventajas*

* Es más difícil el desarrollo y el mantenimiento


4. **N capas**

   *Ventajas*

* Menor corrupción de datos  
* Mayor seguridad  
* Mayor escalabilidad  
* Mejor rendimiento.

  *Desventajas*

* Es más difícil el desarrollo y el mantenimiento

Según la [*Figura 5*](#figura-5.-atributos-de-calidad-de-joudeg) trabajar con un modelo de dos capas nos ayuda a generar un menor número de llamadas y tiene un mayor rendimiento en la interoperabilidad con las bases de datos es por esto que se considera la mejor opción para JoUdeG.   
Como ya lo mencionamos anteriormente uno de los principales atributos de la app web JoUdeG es escalabilidad pero aún se debe definir qué tipo de escalado se busca Para la escalabilidad existen dos modelos el escalado vertical y el horizontal. 

1. **Escalado horizontal:** El escalado horizontal se consigue aumentando el número de servidores que atienden una aplicación. 

   *Ventajas*

* El escalado es prácticamente infinito.  
* Permite alta disponibilidad.  
* Permite un correcto balance de carga entre los servidores.

  *Desventajas*

* Mayor configuración,  
* Necesita que la aplicación esté construida de modo que soporte escalamiento vertical.  
* Menos económica, ya que requiere de varios servidores.


2. **Escalado Vertical:** Se consigue aumentando los recursos del servidor. Principalmente, en lo que respecta a la capacidad de procesamiento, memoria y almacenamiento. 

   *Ventajas*

* Facilidad de implementación y configuración.  
* No requiere un diseño específico en la aplicación y su arquitectura para funcionar.  
* Puede ser más económico.

  *Desventajas*

* Está limitado a la capacidad de un único servidor.  
* No aporta beneficios en relación a la alta disponibilidad.


Con base a lo anterior y tomando en cuenta que JoUdeG es un trabajo de tesis que cuenta con un presupuesto limitado se debe dirigir el proyecto a un escalado vertical. 

La elección del lenguaje de programación se basa en la idea de que una app web por lo que se necesitar de lenguajes de programación tanto para el front end developer como el back end developer:   
*Front End Developer:*

* JavaScript: para APIs  
* HTML: imagen del sitio  
* CSS: Optimización para dispositivos y navegadores


*Back End Developer:* 

* Java Spring Boot

JoUdeG será una app web con requisitos funcionales como la  1\) Asignación de perfiles según el rol, 2\) La posibilidad de generar calendarios de actividades, 3\) Almacenar y editar una base de datos de autores, 4\) Almacenar y editar base de datos de dictaminadores, 5\) Seguimiento de tareas para la preparación del número, 6\) Apoyo en la evaluación doble ciego y 7\) Generación de estadísticas. Sus atributos de calidad son desplegabilidad, escalabilidad, interoperabilidad, rendimiento, seguridad y usabilidad por lo que se optó por un patrón de arquitectura basado en microservicios y un modelo en 2 capas. Por último se espera que el escalado sea vertical para economizar en costos y se utilizaran lenguajes típicos del desarrollo web como JavaScript, HTML, CSS, Java Spring Boot y Java los cuales se dividirán entre Front end development  y Back  end development y la metodología  del proyecto se llevará bajo el modelo de cascada combinado con el método Scrum.

##### *Figura 6\. Diagrama de Arquitectura de Software JoUdeG*

*Fuente: Elaboración propia disponible en [https://github.com/MarRojasPy/JoUdeG.git](https://github.com/MarRojasPy/JoUdeG.git)*

La implementación de una metodología estructurada en el desarrollo de JoUdeG depende en gran medida de una arquitectura de software clara y bien planificada. Como podemos ver en la Figura 6 la arquitectura de software de JoUdeG interactúa de manera organizada y coherente con los objetivos del sistema. El modelo en dos capas basado en Microservicios permite la escalabilidad y facilita el mantenimiento, no solo permitiendo que la app sea funcional y eficiente si no que también sea adaptable a los cambios que en el futuro otros programadores hagan. 