<img src="perfil.png" align="right" />

# Trabajo Grupal 4 Modulo 6 [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/33fparra/Servidor_web_contenidos_NodeJS)

> Nuestro Trabajo


https://github.com/33fparra/Servidor_web_contenidos_NodeJS

Contents
========

 * [Descripción del Proyecto](#descripción-del-proyecto-memo)
 * [Instrucciones de Instalación](#instrucciones-de-instalación-computer)
 * [Funcionalidades](#funcionalidades-sparkles)
 * [Participantes del Grupo](#participantes-del-grupo-busts_in_silhouette)
 
## Descripción del Proyecto :memo:

📝 Implementar un servidor web de contenidos estáticos y dinámicos utilizando motores de plantillas acorde al entorno Node Express para dar solución a un problema.

La empresa Black and White Spa está promocionando una campaña para las redes sociales en donde quieren ofrecer un sitio web que permita escribir la URL de una imagen de internet y que ésta sea
procesada por el servidor para ser devuelta en blanco y negro. Deberás crear un servidor que disponibiliza una ruta raíz que devuelva un HTML con el formulario para
ingresar la URL de la imagen con estilos CSS de un documento interno en los archivos del servidor. El formulario debe redirigir a otra ruta del servidor que procese la imagen y la devuelva en blanco y negro.

## Instrucciones de Instalación :computer:

⚙️ Para instalar las dependencias necesarias, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   npm install

4. Para que funcione debes escribir en la terminal: "node server.js --key 123"
5. Abrir el archivo html ingresando al https://localhost:3000
6. En el formulario introducir la url de la imagen que procesaremos

<details><summary><b>Ver las instrucciones</b></summary>

1. Instalar las dependencias:

   ```sh
   npm install
   ```

2. En el caso de no poder instalar las dependencias:

   ```sh
   npm install --force
   ```

3. Las librerias que estamos ocupando `package.json`:

    ````sh
    ... 
    "name": "helpers",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    + "type": "module",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    "express": "^4.18.2",
    + "hbs": "^4.2.0",
    + "jimp": "^0.22.8",
    "nodemon": "^3.0.1",
    + "yargs": "^17.7.2"
    }
    ````

4. Ejecutar el comando 'help':

   ```sh
   node server.js --help
   ```

5. Ejecutar el comando 'key', para que inicie el servidor, recuerda que la `key` correcta es `123`:

   ```sh
   node server.js --key 123
   ```   
</details>

</details>

## Funcionalidades :sparkles:

✨ Con nuestra aplicacion puedes:

1. Funcionalidad : Cambiar imagen a escala de grises
2. Funcionalidad : Redimensionar la imagen a 350px
3. Funcionalidad : Cambiar la calidad de la Imagen al 60%

![Foto de grupo](/grupoVerde.jpg)

## Participantes del Grupo :busts_in_silhouette:

1. Cecilia Montero : https://github.com/cmonlop

2. Karla Mieres : https://github.com/karlamieres

3. Zimram Blanco : https://github.com/Zimram

4. Andrea Pilquiman : https://github.com/AndreaPLL

5. Gonzalo Aranda : https://github.com/gonzaloaranda

6. Felipe Andres Parra : https://github.com/33fparra

### Este proyecto está bajo la licencia MIT. Para más información, consulta el archivo LICENSE.


<img src="logGrupoVerde.png" align="right" />

## Grupo Verde (https://github.com/33fparra/Renderizado_hbs_tareasPendientes_m6_g4)

