const demoMenu = require("./src/menu.js");
const {detallarRecetaPorNombre} = require("./src/recetorium.js");
//import { demoMenu } from "./src/menu.js";

// demoMenu();

// Argumentos: node index.js Lasagna
const nombreDeReceta = process.argv.slice(2) || "Pizza Margarita";
detallarRecetaPorNombre(nombreDeReceta);

