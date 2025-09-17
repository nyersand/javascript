function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = "img/Dia.png"
        document.body.style.background = "#fee95f85"
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = "img/Tarde.png"
        document.body.style.background = "#66464B"
    } else {
        //Boa Noite!
        img.src = "img/Noite.png"
        document.body.style.background = "#012d6ea7"
    }
}

