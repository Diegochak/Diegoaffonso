function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = "Agora são $  horas"
    if (hora >= 0 && hora < 12){
        img.src = './images/01.png'
    }
    else if (hora >= 12 && hora <= 18 ){
        img.src = './images/02.png'
            }
    else {
        img.src = './images/03.png'
    }           
}