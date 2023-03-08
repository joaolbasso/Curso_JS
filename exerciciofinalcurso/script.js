var a = document.querySelector('input#adiciona')
a.addEventListener('click', adicionar)

var af = document.querySelector('input#finalizar')
af.addEventListener('click', finalizar) 

var vetor = []

function adicionar() {
    detalhes.innerHTML = ''
    var txtnum = document.querySelector('input#num')
    var num = Number(txtnum.value)
    var selval = document.querySelector('select#selval')
    if (txtnum.value.length == 0 || num < 1 || num > 100) {
        alert('[ERRO] Valor inválido ou vazio!')
        txtnum.value = ''
        txtnum.focus() 
        return
    }

    //lista.indexOf(Number(n)) != -1) comando percorre a lista se retornar -1, sinal que ñ tem
    var controle = 0
    for (var pos in vetor) {
        if (vetor[pos] == num) {
            controle = 1 
        }             
    }

    if (controle == 0) {
        var item = document.createElement('option')
        item.text = `Valor ${num} foi adicionado`
        selval.appendChild(item)
        vetor.push(num)
    } else {
        alert('Valor já inserido')
    }
    txtnum.value = ''
    txtnum.focus()

}

function finalizar() {
    if (selval.innerHTML == '' || vetor.length == 0)  {
        alert('[ERRO] Insira valores!')
        return
    }

    let maior = 0, menor = 0, somaVetor = 0, mediaVetor = 0 

    //Acha ${maior} e ${menor}
    if (vetor.length == 1) {
        maior = vetor[0]
        menor = vetor[0]
    } else {
        maior = vetor[0]
        menor = vetor[0]
        for (var i=1; i<vetor.length; i++) {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i] 
            }
        }
    }

    

    //Acha ${somaVetor}
    for (let y in vetor) {
        somaVetor += vetor[y]
    }

    //Acha ${mediaVetor}
    mediaVetor = somaVetor / vetor.length

    var detalhes = document.getElementById('detalhes')
    detalhes.innerHTML = `<p>Ao todo temos ${vetor.length} números cadastrados</p>
                          <p>O maior valor informado foi ${maior} </p>
                          <p>O menor valor informado foi ${menor} </p>
                          <p>Somando todos os valores, temos ${somaVetor} </p>
                          <p>A média dos valores digitados é ${mediaVetor.toFixed(2)} </p>`
}

