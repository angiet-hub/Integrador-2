const comestibles = [
    ["manzana", "pera", "banana"],
    ["choclo", "brocoli", "lechuga"],
    ["lentejas", "garbanzos", "porotos"]
]

let mensaje = "";

for (let i = 0; i < comestibles.length; i++) {
    console.log("---------------------");
    for (let j = 0; j < comestibles[i].length; j++) {
        mensaje += comestibles[i][j] + "\n";
    }
}