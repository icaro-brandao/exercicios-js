function classificartriangulos (lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3) {
        return ("Equilátero")
    }

    else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return ("Isóceles")
    }

    else {
        return ("Escaleno")
    }
}

console.log(classificartriangulos(4, 6, 8))
console.log(classificartriangulos(4, 4, 8))
console.log(classificartriangulos(6, 6, 6))