function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imag")
    var data = new Date()
    var hora = 14
    var minuto = data.getMinutes()
    msg.innerHTML=`Agora são ${hora} horas e ${minuto} minutos`
    if(hora>=0 && hora <12){
        img.src ='Manhã.jpg'
        document.body.style.background=''
    }
    else if(hora>12 && hora <18){
        img.src ='Tarde.jpg'
        document.body.style.background='grey'
    }
    else{
        img.src ='Noite.jpg'
        document.body.style.background='black'
    }
}