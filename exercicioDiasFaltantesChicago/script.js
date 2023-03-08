var botao = document.querySelector('input#btnCalcula')
botao.addEventListener('click', calcula)

var resu = document.querySelector('div#res');

function calcula() {
    var data = new Date();
    dia = data.getDay();
    mes = data.getMonth();

    resu.innerText('${dia} e ${mes}')
}