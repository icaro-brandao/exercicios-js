// par nome/valor
const saudacao = "Opa" // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: "Carlos",
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)