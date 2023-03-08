function parimp(n) { //n é parâmetro
    if (n % 2 == 0) { //ação
        return 'PAR'//retorno
    } else {
        return 'IMPAR'
    }
}

var res = parimp(10) //chamada
var res2 = parimp(11)

console.log(res)
console.log(res2)