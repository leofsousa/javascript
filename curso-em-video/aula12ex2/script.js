function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os Dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebe-m.png')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            }
            else if(idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }
            else {
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-f.png')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-f.png')
            }
            else if(idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
           
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}