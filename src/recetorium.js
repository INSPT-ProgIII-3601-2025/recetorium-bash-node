const {getRecetaByName, expandirIngredientes} = require('./helpers');


const detallarRecetaPorNombre = (nombre) => {
    console.log(`\n🔍 Buscando receta: '${nombre}'...`);
    const receta = getRecetaByName(nombre);
    console.log("Receta encontrada:", receta);

    console.log("\n🥗 Ingredientes expandidos:");
    const lista = expandirIngredientes(receta);
    lista.forEach(({nombre, cantidad, unidad_medida}) =>
        console.log(`- ${nombre}: ${cantidad} ${unidad_medida}`)
    );
}

module.exports = {
    detallarRecetaPorNombre
}
