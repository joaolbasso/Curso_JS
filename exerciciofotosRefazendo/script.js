var a = document.querySelector('input#btn')
a.addEventListener('click', carrega)

function carrega() {
    var txtano = document.getElementById('txtano')
    var ano = Number (txtano.value)
    var d = new Date()
    var anoCor = d.getFullYear()
    var idade =  anoCor - ano
    var rd = document.getElementsByName('rdbtn')
    var res = document.getElementsByTagName('div')[1]
    
    
    if (ano <= 0 || ano > 2023 || txtano.value.length == 0) {
        alert('Ano inválido!')
        txtano.value = ''
        txtano.focus()
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (rd[0].checked) {
            alert('HOMEM')
            var nomearquivo = selecionaImg(idade, 1)
            img.setAttribute('src' , nomearquivo)
            res.innerHTML(`Detectado Homem com idade de ${idade}`)
            res.appendChild(img)
            return
        } else {
            alert('Mulher')
            var nomearquivo = selecionaImg(idade, 2)
            img.setAttribute('src', nomearquivo)
            res.appendChild(img)
            res.innerHTML(`Detectado Mulher com idade de ${idade}`)
            return
        }

}
}

function selecionaImg(idade, cfS) {
        //homens
    if (cfS == 1) {
        if (idade > 0 && idade < 13) {
            return 'criancam.png'
        }
    } else {
        //mulheres
    }
    
}