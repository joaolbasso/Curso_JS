function gerarTabuada() {
    let num = document.querySelector('input#num')
    let numT = Number(num.value) 
    let tabela = document.querySelector('select#seltab') //Select html, entra option
    tabela.innerHTML = ''

    if (num.value.length == 0) {
        alert('[ERRO] Por favor, digite um número!')
        return
    }

    var i = 0
    
    for (var cont = 0; cont <=10; cont++) {
        let item = document.createElement('option')
        item.text = `${numT} x ${cont} = ${numT*cont}`
        tabela.appendChild(item)
    }
}