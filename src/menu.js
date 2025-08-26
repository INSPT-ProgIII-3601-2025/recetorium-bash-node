import { listarRecetas, getRecetaByName, expandirIngredientes } from "./helpers.js";

export function demoMenu() {
  console.log("📖 Recetas disponibles:");
  listarRecetas().forEach((r) => console.log("- " + r));

  console.log("\n🔍 Buscando receta: 'Pizza Margarita'...");
  const receta = getRecetaByName("Pizza Margarita");
  console.log("Receta encontrada:", receta.nombre);

  console.log("\n🥗 Ingredientes expandidos:");
  const lista = expandirIngredientes(receta);
  lista.forEach((ing) =>
    console.log(`- ${ing.nombre}: ${ing.cantidad} ${ing.unidad}`)
  );
}
