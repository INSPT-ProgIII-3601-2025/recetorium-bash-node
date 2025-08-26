const recetas = require("../data/recetas.js");
const ingredientes = require("../data/ingredientes.js");

const getIngredienteById = (id) => ingredientes.find(ing => ing._id === id);

const expandirIngredientes = (receta) => receta.ingredientes.map(ing => {
  return {
    nombre: getIngredienteById(ing.ingrediente_id).nombre,
    cantidad: ing.cantidad,
    unidad_medida: ing.unidad_medida
  };
});

const getRecetaByName = (nombre) => recetas.find(r => r.nombre === nombre);

const listarRecetas = () => recetas.map(r => r.nombre);

module.exports = {
  getIngredienteById,
  expandirIngredientes,
  getRecetaByName,
  listarRecetas
}