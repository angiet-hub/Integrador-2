//Crear un programa que dado un array 2d de números, indique cuál es el mayor de ellos. El array debe estar 
//guardado en una variable (no hace falta ingresarlo). Array de ejemplo:

const array = [
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4]
]

let numeroMayor = 0;

for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
        if(array[i][j] > numeroMayor) {
            numeroMayor = array[i][j];
        }
    }
}

console.log(numeroMayor)