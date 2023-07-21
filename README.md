<img src="public/images/perfil.png" align="right" />

# Trabajo Individual 5 Modulo 6 [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/33fparra/Ejercicio_individual_5_modulo_6)

> Nuestro Trabajo

https://github.com/33fparra/Ejercicio_individual_5_modulo_6

Contents
========

 * [Descripción del Proyecto](#descripción-del-proyecto-memo)
 * [Instrucciones de Instalación](#instrucciones-de-instalación-computer)
 * [Funcionalidades](#funcionalidades-sparkles)
 * [Participantes del Grupo](#participantes-del-grupo-busts_in_silhouette)
 
## Descripción del Proyecto :memo:

📝 Implementar la persistencia de objetos en una aplicación web utilizando archivos de texto plano para resolver un problema acorde al entorno Node.js

Un restaurante tiene su menú guardado en un archivo json, y quiere que crees funciones para mostrar por consola el
menu, además de agregar nuevos platos, y quitarlos cuando quieran hacerlo, este es el archivo json inicial:
````sh
{
"almuerzos": [
   {
      "nombre": "cazuela",
      "precio": 5990
   },
   {
      "nombre": "carbonada",
      "precio": 4990
   },
   {
      "nombre": "arroz",
      "precio": 3000
   }
]}
````

Creamos tres funciones:
1. - una que consulte el archivo json, y lo muestre en consola.
2. - una que al entregarle como parámetro un objeto, lo agregue al archivo json
3. - una que al entregarle un string con el nombre de un plato lo borre del archivo


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
    }
    ````

</details>

</details>

## Funcionalidades :sparkles:

✨ Con nuestra aplicacion puedes:

1. Funcionalidad : funcion que consulte el archivo json, y lo muestre en consola
2. Funcionalidad : funcion que al entregar como parámetro un objeto, lo agregue al archivo .json
3. Funcionalidad : funcion que al entregar un string con el nombre de un plato lo borre del archivo

![Foto de grupo](public/images/grupoVerde.jpg)

## Participantes del Grupo :busts_in_silhouette:

1. Cecilia Montero : https://github.com/cmonlop

2. Karla Mieres : https://github.com/karlamieres

3. Zimram Blanco : https://github.com/Zimram

4. Andrea Pilquiman : https://github.com/AndreaPLL

5. Gonzalo Aranda : https://github.com/gonzaloaranda

6. Felipe Andres Parra : https://github.com/33fparra

### Este proyecto está bajo la licencia MIT. Para más información, consulta el archivo LICENSE.


<img src="public/images/logGrupoVerde.png" align="right" />

## Grupo Verde (https://github.com/33fparra/Ejercicio_individual_5_modulo_6)

