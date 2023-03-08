var a = window.document.querySelector('input#gera')
a.addEventListener('click', gerarTabuada)

function gerarTabuada() {

    var table = window.document.getElementById('seltab')
    table.innerHTML = ''
    var res = document.getElementById('res')
    res.innerHTML = ''
    var txtnum = window.document.getElementById('num')
    var numT = Number(txtnum.value)

    if (numT == 0 && txtnum.value.length == 0) {
        window.alert('[ERRO] Número está vazio!')
        return
    }


    var tab = []
    var i = 0

    while (tab.length <= 10) {
        tab.push(numT * i)
        i++
    }

    for (var pos in tab) {
        var item = document.createElement('option')
        item.text = `${numT} x ${pos} = ${tab[pos]}`
        table.appendChild(item)
    }

}