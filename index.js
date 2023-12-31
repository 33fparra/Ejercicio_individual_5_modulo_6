import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import hbs from "hbs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); //ocupo el path busca la direccion
const __dirname = dirname(__filename)    

const app = express();
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto http://localhost:3000');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials")

app.get("/", (req, res)=>{
    res.render("index");
});

app.post("/plato", (req, res)=>{
    const nuevoPlato = req.body;
    agregarPlato(nuevoPlato);
    res.render("plato");
});

app.get("/almuerzos", (req, res) => {
    const menu = mostrarMenu();
    res.render("almuerzos", { listado: menu.almuerzos }); // Pasar la lista de almuerzos al template
});

app.delete("/eliminarPlato/:nombre", (req, res) => {
    const nombrePlato = req.params.nombre;
    const borrar = borrarPlato(nombrePlato);
    res.render("eliminarPlato"); // Pasar la lista de almuerzos al template
});

// Función para leer y mostrar el menú
export function mostrarMenu() {
    const data = fs.readFileSync('menu.json', 'utf8');
    const menu = JSON.parse(data);
    console.log(menu);
    return menu;
  }
  
  // Función para agregar un nuevo plato al menú
  export function agregarPlato(plato) {
    const data = fs.readFileSync('menu.json', 'utf8');
    const menu = JSON.parse(data);
    menu.almuerzos.push(plato);
    fs.writeFileSync('menu.json', JSON.stringify(menu, null, 2));
  }
  
  // Función para borrar un plato del menú
  export function borrarPlato(nombre) {
    const data = fs.readFileSync('menu.json', 'utf8');
    const menu = JSON.parse(data);
    menu.almuerzos = menu.almuerzos.filter(plato => plato.nombre !== nombre);
    fs.writeFileSync('menu.json', JSON.stringify(menu, null, 2));
  }

// Si quisiera usar las funciones directamente
//mostrarMenu(); // Mostrará el menú actual
//agregarPlato({ nombre: 'churrasco', precio: 6990 }); // Agregará un nuevo plato al menú
//eliminarPlato('arroz'); // Eliminará el plato 'arroz' del menú
