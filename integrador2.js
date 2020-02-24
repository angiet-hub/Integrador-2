let usuarios = [
    ['Carla', 'Pedro', 'Lucas', 'Ana'],
    ['1545628984', '1545251245', '1523357849', '15789456'],
    ['carla@gmail.com', 'pedro@gmail.com', 'lucas@gmail.com', 'ana@gmail.com'],
]

let nombresUsuarios = usuarios[0] ;
let telefonosUsuarios = usuarios[1];
let emailUsuarios = usuarios[2];

const eleccion = prompt(`Elija una de las siguientes operaciones:
-Crear un usuario 
-Buscar un usuario 
-Listar todos los usuarios
-Modificar un usuario 
-Eliminar un usuario 
-Salir del programa`);

switch(eleccion) {

    //_____________CREAR UN USUARIO__________________//

    case 'Crear un usuario':
       let nuevoUsuario = true;
        
        while (nuevoUsuario) {  
            let usuarioNuevo = prompt('Ingrese el nombre del usuario');
            let telefonoNuevo = prompt('Ingrese el número de teléfono');
            let emailNuevo = prompt('Ingrese la dirección de e-mail');
            let confirmarOperacion = confirm(`Los datos ingresdos son: ${usuarioNuevo}, ${telefonoNuevo}, 
            ${emailNuevo}. Desea confirmar la operación?`);

            if(confirmarOperacion) {
                nombresUsuarios.push(usuarioNuevo);
                telefonosUsuarios.push(telefonoNuevo);
                emailUsuarios.push(emailNuevo);
                alert('Operación exitosa');
            } else {
                alert('Operación cancelada');
            }
            nuevoUsuario = confirm('Desea crear un nuevo usuario?');
        } 
        eleccion = prompt(`Elija una de las siguientes operaciones:
        -Crear un usuario 
        -Buscar un usuario 
        -Listar todos los usuarios
        -Modificar un usuario 
        -Eliminar un usuario 
        -Salir del programa`);
        break;


    //__________________BUSCAR UN USUARIO_____________________//

    case "Buscar un usuario":
        let confirmarBusqueda = true;

        while(confirmarBusqueda){
            let buscarUsuario = prompt("Por qué dato desea buscar un usuario? ID, Nombre, Celular, Email");
            let valorUsuario = prompt("Ingrese el valor que va a buscar");
            switch(buscarUsuario) {
                case "ID":
                    let valorUsuarioNumero = Number(valorUsuario);
                    if(valorUsuarioNumero > nombresUsuarios.length) {
                        alert(`Usuario no encontrado`);
                    } else {
                        alert(`Los datos encontrados son: 
                        ${nombresUsuarios[valorUsuarioNumero]}, 
                        ${telefonosUsuarios[valorUsuarioNumero]}, 
                        ${emailUsuarios[valorUsuarioNumero]}`);
                    }
                    break;
                
                case "Nombre":
                    for(let i = 0; i < nombresUsuarios.length; i++) {
                        if(valorUsuario === nombresUsuarios[i]) {
                            alert(`Los datos encontrados son: ${nombresUsuarios[i]},${telefonosUsuarios[i]},
                            ${emailUsuarios[i]}`);
                        } else if (valorUsuario !== nombresUsuarios[i]) {
                            alert(`Usuario no encontrado`)
                        }
                    }
                    break;
                case "Celular":
                    for(let i = 0; i < telefonosUsuarios.length; i++) {
                        if(valorUsuario === telefonosUsuarios[i]) {
                            alert(`Los datos encontrados son: ${telefonosUsuarios[i]}, ${nombresUsuarios[i]},
                            ${emailUsuarios[i]}`);
                        } else if (valorUsuario !== nombresUsuarios[i]) {
                            alert(`Usuario no encontrado`)
                        }
                    }
                    break;
                
                case "Email":
                    for(let i = 0; i < emailUsuarios.length; i++) {
                        if(valorUsuario === emailUsuarios[i]) {
                            alert(`Los datos encontrados son: ${emailUsuarios[i]},${nombresUsuarios[i]},
                            ${telefonosUsuarios[i]}`);
                        } else if (valorUsuario !== nombresUsuarios[i]) {
                            alert(`Usuario no encontrado`)
                        }
                    }
                    break;
                }    
            confirmarBusqueda = confirm("Desea repetir el procedimiento?");
        }
        break;


    //_______________LISTAR USUARIOS______________//


    case "Listar todos los usuarios":
        let mensaje = "";

        for(i = 0; i < usuarios.length; i++) {
            for(j = 0; j < usuarios[0].length; j++) {
                mensaje += usuarios[i][j] + '\n';
                }
            }
        alert(`${mensaje}`)
        eleccion = prompt(`Elija una de las siguientes operaciones:
        -Crear un usuario 
        -Buscar un usuario 
        -Listar todos los usuarios
        -Modificar un usuario 
        -Eliminar un usuario 
        -Salir del programa`);
        break;

    //_______________MODIFICAR USUARIO______________//
    
    case "Modificar un usuario":
        let modificarUsuario = true;

        while(modificarUsuario) {
            let usuarioModificar = Number(prompt("Ingrese el ID del usuario a modificar."));
            if(usuarioModificar === 0 || usuarioModificar === 1 || usuarioModificar === 2 || usuarioModificar === 3) {
                nuevoNombre = prompt("Ingrese el nombre");
                nuevoTelefono = prompt("Ingrese el telefono");
                nuevoEmail = prompt("Ingrese el email");
            } else {
                alert(`Usuario no encontrado`);
            }

            const confirmarModificar = confirm(`Los datos ingresados son:
            ${nuevoNombre}}, 
            ${nuevoTelefono}, 
            ${nuevoEmail}. Desea confirmarlos?`);

            if(confirmarModificar) {
                nombresUsuarios[usuarioModificar] = nuevoNombre;
                telefonosUsuarios[usuarioModificar] = nuevoTelefono;
                emailUsuarios[usuarioModificar] = nuevoEmail;
                alert('El cambio se realizó con éxito');
            } else {
                alert("La operación fue cancelada");
            }
            modificarUsuario = confirm("Desea realizar nuevamente el proceso?");
        }
        break;

    //_______________ELIMINAR USUARIO_________________//

    case "Eliminar un usuario":
        let eliminarUsuario = true;
        while(eliminarUsuario) {
            let usuarioEliminar = Number(prompt("Ingrese el ID del usuario a eliminar."));
            if(usuarioEliminar === 0 || usuarioEliminar === 1 || usuarioEliminar === 2 || usuarioEliminar === 3){
                const confirmarEliminar = confirm(`Los datos encontrados son:
                ${nombresUsuarios[usuarioEliminar]}
                ${telefonosUsuarios[usuarioEliminar]}
                ${emailUsuarios[usuarioEliminar]}. Desea confirmar la operación?`);
                if(confirmarEliminar) {
                    nombresUsuarios.splice([usuarioEliminar], 1)
                    telefonosUsuarios.splice([usuarioEliminar], 1)
                    emailUsuarios.splice([usuarioEliminar], 1)
                } else {
                    alert('La operación fue eliminada');
                }
            } else {
            alert('Usuario no encontrado');
            }
            eliminarUsuario = confirm("Desea realizar nuevamente el proceso?");
    }
        break;

    //_____________SALIR DEL PROGRAMA____________//

    case "Salir del programa":
        const salirPrograma = confirm('Desea confirmar la operación?');
        if(salirPrograma) {
            alert('Hasta luego!');
        } else {
            eleccion = prompt(`Elija una de las siguientes operaciones:
        -Crear un usuario 
        -Buscar un usuario 
        -Listar todos los usuarios
        -Modificar un usuario 
        -Eliminar un usuario 
        -Salir del programa`);
        }
        break;

    //_____________OTRA OPCION_____________//


    default:
        eleccion = prompt(`Elija una de las siguientes operaciones:
        -Crear un usuario 
        -Buscar un usuario 
        -Listar todos los usuarios
        -Modificar un usuario 
        -Eliminar un usuario 
        -Salir del programa`);
}

