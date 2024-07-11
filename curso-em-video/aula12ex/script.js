function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#EBD1A6'
    } else if(hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#B2754C'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#3C2E4F'
    }
}

//cor manha: #EBD1A6 
//cor tarde: #B2754C
//cor noite: #3C2E4F