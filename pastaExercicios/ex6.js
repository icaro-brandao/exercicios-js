function aplicacaoFinanceira (capitalInicial, taxa, tempo){

    return capitalInicial + (capitalInicial * taxa * tempo)
}
function aplicacaoRegime (capitalInicial, taxa, tempo){

    return capitalInicial * (1 + taxa) ** tempo
}

console.log(aplicacaoFinanceira(100, 10/100, 2));
console.log(aplicacaoRegime(100, 10/100, 2));