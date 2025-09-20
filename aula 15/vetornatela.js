let valores = [8, 1, 7, 4, 2, 9]

//Simplificado =
// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

//Modo ainda mais simplificado =
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

