var res = document.querySelector('div#res')
function contador() {
    res.innerHTML = ''
    var ni = document.getElementById('ini')
    nini = Number(ni.value)
    var nf = document.getElementById('fim')
    nfim = Number(nf.value)
    var np = document.querySelector('input#pas')
    npas = Number(np.value)

    if (ni.value.length == 0 || nf.value.length == 0 || np.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        return
    }

    if (npas <= 0) {
        npas = 1
        window.alert('Passo inválido, considerando passo 1...')
    }

    if (nini > nfim) {
        //regressiva
        for (var i = nini; i >= nfim; i-=npas) {
            res.innerHTML += `${i} &#128073 `
        }
    } else {   
        //crescente
        for (var i = nini; i <= nfim; i+=npas) {
             res.innerHTML += `${i} &#128073 `
    }
}
    res.innerHTML += '&#9989'
}
