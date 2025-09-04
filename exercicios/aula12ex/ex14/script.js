function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'imagens/foto-dia.jpg'
        document.body.style.background = '#82a6d3ea'
    } else if (hora>= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#fca93dc2'
    } else {
        //BOA NOITE!
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#09181dfa'
    }
}