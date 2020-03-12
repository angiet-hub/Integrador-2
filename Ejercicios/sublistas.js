/* Crear un programa que permita agregar listas de tareas y agruparlas en categorias. El programa debe hacer lo 
siguiente:

    Permitir ingresar el nombre de una categoría
    Permitir ingresar una tarea
    Preguntar si desea ingresar otra tarea
    Si responde que si, volver al punto 2
    Si responde que no, preguntar si desea ingresar otra categoría
    Si responde que sí, volver al punto 1
    Si responde que no, terminar el programa En todo momento (en cada mensaje), el programa debe mostrar las tareas 
    agrupadas por categorías. Las categorías deben diferenciarse de las tareas (se pueden usar divisores, 
        emojis, espacios, etc).  */

let lista = [[]];
let categoria = [];
let tarea = [];
let i = 0;
let j = 0;
let ingresarTarea;

let seguir = true;

while(seguir === true) {
    lista[i].push([prompt('Ingrese el nombre de una categoría')]);
    lista[i][j].push([prompt('Ingrese una tarea')]);
    ingresarTarea = confirm('Desea ingresar otra tarea?');
    i++;

    while(ingresarTarea === true) {
        ingresarTarea = confirm('Desea ingresar otra tarea?');
        lista[i][j].push([prompt('Ingrese una tarea')]);
        j++;
        
        if (ingresarTarea !== true) {
        seguir = confirm('Desea ingresar otra categoria?');
        }
    }

}