//Crear un programa que dado un array 2d de números, indique cuál es la suma de una de sus columnas. 
//El programa debe dar la posibilidad de ingresar qué columna se desea elegir. 
//El array debe estar guardado en una variable (no hace falta ingresarlo). 

const numeros = [
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4]
]

let suma = 0;
const columna = Number(prompt('Ingrese la columna'));

for(let i = 0;i < numeros.length; i++) {
    if(numeros[i][columna - 1] !== undefined) {
        suma += numeros[i][columna - 1];
    } 
}

console.log(suma)