//Crear un programa que dado un array 2d de strings, indique cuál es la cantidad de una de sus ítems. 
//El programa debe dar la posibilidad de ingresar qué item se desea buscar. Ejemplo:

/* [
  ['manzana', 'pera', 'banana', 'banana'],
  ['banana', 'manzana'],
  ['manzana', 'pera', 'banana'],
  ['pera', 'banana', 'manzana', 'banana']
] */

// Cantidad de manzana: 4

const frutas = [
    ['manzana', 'pera', 'banana', 'banana'],
    ['banana', 'manzana'],
    ['manzana', 'pera', 'banana'],
    ['pera', 'banana', 'manzana', 'banana']
]
let suma = 0;
let manzanas = 0;
let peras = 0;
let bananas = 0;
let frutaBuscar = prompt('Ingrese la fruta a buscar');

/*  for(let i = 0; i < frutas.length; i++){
    for(let j = 0; j < frutas[i].length; j++){
        if(frutaBuscar === "manzana") {
            manzanas++;
            alert(`Cantidad de manzana: ${manzanas}`);
        } else if(frutaBuscar === "pera") {
            peras++;
            alert(`Cantidad de pera: ${peras}`);
        } else if(frutaBuscar === "banana") {
            bananas++;
            alert(`Cantidad de banana: ${bananas}`);
        }
    }
    
} 
 */

for(let i = 0; i < frutas.length; i++){
    for(let j = 0; j < frutas[i].length; j++){
        if(frutaBuscar === frutas[i][j]) {
            suma++;
            
        } 
    }
    
} alert(`Cantidad de ${frutaBuscar}: ${suma}`); 