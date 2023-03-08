var act = document.querySelector('input#btncontar')
act.addEventListener('click', carregar)
let contagem = document.querySelector('div#b')

function carregar() {
    contagem.innerHTML = ''
    let txtini = document.querySelector('input#ini')
    let txtfim = document.querySelector('input#fim')
    let txtpas = document.getElementById('pas')
    
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        alert('[ERRO] Digite um valor!')
        return
    }

    let ini, fim, pas
    ini = Number(txtini.value)
    fim = Number(txtfim.value)
    pas = Number(txtpas.value)
    contar(ini, fim, pas) //Chama função próxima 
}

//passagem de parâmetro
function contar(inicio, final, passo) {
    let i = inicio
    if (inicio > final) { //decresce
        while (i>=final) {
        contagem.innerHTML += ` ${i} \u{1F449} `             
            i -= passo
        }
    } else {
        while (i<=final) {
            contagem.innerHTML += ` ${i} \u{1F449} `
            i += passo
        }
    }
    contagem.innerHTML += ` \u{2705} `
}
