//Crear un programa que permita ingresar 9 números separados por espacios, y los distribuya en una grilla de 3x3. 
//El programa debe decir si hay algún número que se repite en una fila, columna, o diagonal. Ejemplo

/* [
  [2, 7, 12],
  [8, 23, 1],
  [9, 45, 7]
] // ✅

[
  [2, 7, 12],
  [8, 23, 1],
  [23, 45, 7]
] // 🚫 */

const numeros = prompt('Ingrese 9 numeros separados por espacios').split(" ");
let arrayFinal = [[],[],[]];
arrayFinal[0] = numeros.slice(0, 3);
arrayFinal[1] = numeros.slice(3, 6);
arrayFinal[2] = numeros.slice(6);

for(let i = 0; i < arrayFinal.length; i++) {
  for(let j = 0; j < arrayFinal[i].length; j++) {
    if(arrayFinal[i][j] !== arrayFinal[i][j]) {
      alert('Sin Números repetido');
    } else {
      alert('Numeros repetidos');
    }
  }
}

