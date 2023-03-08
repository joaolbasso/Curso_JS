var fnum = document.querySelector('input#fnum')
var lista = document.querySelector('select#selvet')
var detalhes = document.getElementById('detalhes')


var valores = []

function adicionar() {
    detalhes.innerHTML = ''
    var num = Number(fnum.value)
    if (fnum.value.length == 0) {
        alert('[ERRO] Número vazio!')
        return
    }

    if (num >= 1 && num <= 100 && naoRepetido(num)) {
        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        lista.appendChild(item)
    } else {
        alert('[ERRO] Valor inválido ou repetido!')
    }
    fnum.value = ''
    fnum.focus()
}

function finalizar() {
    if (lista.innerHTML == '' || valores.length == 0) {
        alert('[ERRO] Insira números!')
    } else {
        var maior, menor, somaVetor = 0, mediaVetor = 0, total
        //Total de elementos
        total = valores.length

        //Maior, menor e somaVetor
        maior = valores[0]
        menor = valores[0]

        for (var pos in valores) {
            somaVetor += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

    /* Opções de max e min no vetor
    maior = Math.max(...valores)
    menor = Math.min(...valores)
    */
        //Media Vetor
        mediaVetor = somaVetor / total

        detalhes.innerHTML = `<p> Ao todo foram <strong>${total}</strong> elementos adicionados</p>
                             <p> O maior valor adicionado foi <strong>${maior}</strong> </p>
                             <p> O menor valor adicionado foi <strong>${menor}</strong></p>
                             <p> A soma dos valor é de <strong>${somaVetor}</strong></p>
                             <p> A média dos valores é de <strong>${mediaVetor.toFixed(2)}</strong>`

    }





}

function naoRepetido(n) {
    if (valores.indexOf(n) == -1) {
        return true
    } else {
        return false
    }
}



