# Documentación

## Introducción

Este sitio es un repositorio de instrumentos. Aquí encotrarás los más típicos clasificados por tipo, un poco de historia sobre sus orígenes y un listado de los géneros donde se suele usar. Siempre acompañado de una imagen y una muestra del sonido del instrumento. Sistema programado con React y Firebase Firestore.

## Instalación y configuración

1. Descargar e instalar el código fuente es muy sencillo. Simplemente debes ejecutar `git clone git@github.com:GuillemBagur/dwec-instruments.git` y se te creará un directorio con el código adentro.

2. En cuanto a la configuración, sería recomendable cambiar las claves de Firebase por unas de propias (las de ejemplo han estado expuestas y son de prueba). Dichas claves de deben cambiar en el fichero `config/firebaseConfig.js`.

## Estructura del código

El código viene con la estructura por defecto de Vite. Todo el código fuente está en `src`.

El código de React se divide en 2 partes principales:

1. Páginas. Las páginas son los componentes que van ligadas a una ruta. Tenemos 4 páginas:
- Home (inicio)
- InstrumentEditor (crear y editar instrumentos)
- InstrumentGet (obtener y mostrar la información detallada de un instrumento)
- InstrumentSearch (buscar por nombre entre los instrumentos)

> Estos componentes jsx fienen con su homónimo en css (está en los requerimientos).

2. Componentes. Los comopnentes ya son elementos más compactos. La idea es usarlos varias veces (o tener la posiblidad de re-usarlos).

> Normalmente, encontrarás un fichero css para cada componente (llamado igual pero con .css). Pero no tiene por qué ser así.

## Funciones implementadas

El sistema es capaz de crear, leer, editar y borrar instrumentos desde una base de datos de Firestore.

Para hacer un sistema más especializado en instrumentos musicales, he usado dos colecciones de la base de datos adicionales: `genres` (géneros musicales) y `instrumentTypes` (tipos de instrumentos). Es una forma de hacer que estos dos arrays sean configurables, pero tampoco me imagino que cambien tanto como para poderlos editar desde el propio sistema.

Además, el sistema permite subir imágenes y sonidos de cada instrumento (que se visualizan/reproducen luego al mostrarlos). Para lograr ésto, convertimos ambos ficheros en base64. Realizamos las comprobaciones de tipo de fichero y tamaño para evitar desastres.

Finalmente, el sistema de permite buscar instrumentos a partir de su nombre, tipo de instrumento o géneros en los que se usa.


## Mejoras y futuras implementaciones

- Añadir una confirmación al eliminar instrumentos. Actualmente no se aplica por no usar la función nativa `confirm()`, que es visualmente denigrante.

- Añadir un sistema de login/autenticación, para evitar que cualquiera pueda gestionar los instrumentos.

- Agregar seguridad usando reglas de firebase.

- Hacer un navbar responsive.